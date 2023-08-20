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
export function formatFile(filePath: string, lineNumber: number, selectedText: string): string {
    const parts = filePath.split(/[\\/]/);
    const fileName = parts[parts.length - 1];
    const fileExtension = fileName.split('.').pop();
    
    if (fileExtension) {
        const filePathString = `${fileName}:${lineNumber}`;
        const printStatement = fileExtensions(filePathString, fileExtension, selectedText);
        return printStatement;
    } else {
        // Handle the case where there is no file extension (e.g., for files without extensions)
        return `UnknownFile:${lineNumber}`;
    }
}

export function calculateIndentation(editor: vscode.TextEditor, lineNumber: number): string {
    if (lineNumber <= 0) {
        // If it's the first line or a negative line number, use no indentation
        return '';
    }

    const document = editor.document;
    const lineText = document.lineAt(lineNumber).text;

    // Find the indentation of the previous non-empty line
    let previousIndentation = '';
    let i = lineNumber - 1;
    while (i >= 0) {
        const prevLineText = document.lineAt(i).text;
        if (prevLineText.trim() !== '') {
            previousIndentation = prevLineText.match(/^\s*/)?.[0] || '';
            break;
        }
        i--;
    }

    // If the current line ends with a colon or an opening brace, add extra indentation
    if (lineText.trim().endsWith(':') || lineText.trim().endsWith('{')) {
        return previousIndentation + '    '; // Adjust the number of spaces as needed
    }

    // Use the same indentation as the previous non-empty line
    return previousIndentation;
}



