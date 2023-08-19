import * as vscode from 'vscode';
import { data } from './misc';

// Function to choose a random joke
function getRandomJoke(): string {
    const jokes = data.jokes;
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Function to choose a random emoji
function getRandomEmoji(): string {
    const emojis = data.emojis;
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Function to trim the file path and include line number
function formatFilePath(filePath: string, lineNumber: number): string {
    const parts = filePath.split(/[\\/]/);
    const fileName = parts[parts.length - 1];
    return `${fileName}:${lineNumber}`;
}

function calculateIndentation(editor: vscode.TextEditor, lineNumber: number): string {
    if (lineNumber < 0) {
        // If it's the first line, use no indentation
        return '';
    }

    const previousLineText = editor.document.lineAt(lineNumber - 1).text;
    const previousLineIndentation = previousLineText.match(/^\s*/)?.[0] || '';

    // If the previous line ends with a colon (likely a Python code block), add extra indentation
    if (previousLineText.trim().endsWith(':')) {
        return previousLineIndentation + '    '; // Adjust the number of spaces as needed
    }

    return previousLineIndentation;
}

export const addSuperLogger = (editor: vscode.TextEditor | undefined) => {
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found.');
        return;
    }

    const { document, selection } = editor;
    const selectedText = document.getText(selection);
    const lineNumber = selection.active.line + 1;
    const filePath = formatFilePath(document.fileName, lineNumber);

    const randomJoke = getRandomJoke();
    const randomEmoji = getRandomEmoji();

    const printStatement = `print("${randomEmoji} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${randomJoke}" `})`;

    // Determine where to insert the print statement
    const lineToInsert = selection.isEmpty ? selection.active.line : selection.end.line;

    const calculatedIndentation = calculateIndentation(editor, lineNumber);
    const insertText = `${calculatedIndentation}${printStatement}\n`;

    editor.edit((editBuilder: vscode.TextEditorEdit) => {
        editBuilder.insert(new vscode.Position(lineToInsert + 1, 0), insertText);
    });
};
