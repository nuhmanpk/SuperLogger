import * as vscode from 'vscode';
import { data } from './misc';
import { fileExtensions } from './fileExtensions';

// Function to choose a random joke
export function getRandomJoke(): string {
    const jokes = data.jokes;
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Function to choose a random emoji
export function getRandomEmoji(): string {
    const emojis = data.emojis;
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Function to trim the file and include line number , return the file language
export function formatFile(filePath: string, lineNumber: number, selectedText: string): any {
    const parts = filePath.split(/[\\/]/);
    const fileName = parts[parts.length - 1];
    const fileExtension = fileName.split('.').pop();
    
    if (fileExtension) {
        const filePathString = `${fileName}:${lineNumber}`;
        const printStatement = fileExtensions(fileExtension, filePathString, selectedText);
        if(!printStatement){
            return null;
        }
        return printStatement;
    } else {
        // Handle the case where there is no file extension (e.g., for files without extensions)
        return `UnknownFile:${lineNumber}`;
    }
}

export function calculateIndentation(editor: vscode.TextEditor, lineNumber: number): string {
    try {
        if (lineNumber <= 0) {
            // If it's the first line or a negative line number, use no indentation
            return '';
        }

        const document = editor.document;

        // Get the text of the current line
        const currentLineText = document.lineAt(lineNumber).text;

        // Get the text of the previous line
        const previousLineText = document.lineAt(lineNumber - 1).text;

        // Find the indentation of the previous line
        const previousLineIndentation = previousLineText.match(/^\s*/)?.[0] || '';

        // Determine if the previous line ends with a character that suggests nesting
        const requiresExtraIndentation = previousLineText.trim().endsWith(':') || previousLineText.trim().endsWith('{');

        if (requiresExtraIndentation) {
            // Add extra indentation if nesting is suggested
            return previousLineIndentation + '    '; // Adjust the number of spaces or use a tab if needed
        }

        // If the current line is blank, use the same indentation as the previous line
        if (!currentLineText.trim()) {
            return previousLineIndentation;
        }

        // Default: Use the same indentation as the previous line
        return previousLineIndentation;
    } catch (error) {
        console.error('Error calculating indentation:', error);
        return ''; // Fallback to no indentation
    }
}