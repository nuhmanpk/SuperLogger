import * as vscode from 'vscode';
import { formatFile, calculateIndentation, getSelectionTarget, LoggerPreferences } from './utils';


const getLoggerPreferences = (): LoggerPreferences => {
    const config = vscode.workspace.getConfiguration('superLogger');
    return {
        includeEmoji: config.get<boolean>('includeEmoji', true),
        includeFileMetadata: config.get<boolean>('includeFileMetadata', true),
        insertJokeComment: config.get<boolean>('insertJokeComment', false),
    };
};

export const addSuperLogger = (editor: vscode.TextEditor | undefined) => {
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found.');
        return;
    }

    const { document, selection } = editor;
    const selectedText = getSelectionTarget(document, selection);
    const lineNumber = selection.active.line + 1;
    const preferences = getLoggerPreferences();
    const printStatement = formatFile(document.fileName, lineNumber, selectedText, preferences);
    if (!printStatement) {
        vscode.window.showErrorMessage('Couldn\'t find any logging for this extension.');
        return;
    }

    // Determine where to insert the print statement
    const lineToInsert = selection.isEmpty ? selection.active.line : selection.end.line;
    const calculatedIndentation = calculateIndentation(editor, lineNumber);

    const linesToInsert: string[] = [];
    if (printStatement.jokeComment) {
        linesToInsert.push(`${calculatedIndentation}${printStatement.commentSyntax} ${printStatement.jokeComment}`);
    }
    linesToInsert.push(`${calculatedIndentation}${printStatement.printSyntax}`);

    const insertText = `${linesToInsert.join('\n')}\n`;

    editor.edit((editBuilder: vscode.TextEditorEdit) => {
        editBuilder.insert(new vscode.Position(lineToInsert + 1, 0), insertText);
    });
};

const nodeExtensions = new Set(['js', 'ts', 'tsx', 'jsx', 'mjs', 'cjs', 'vue', 'svelte']);

export const nodeLogger = (editor: vscode.TextEditor | undefined) => {
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found.');
        return;
    }

    const { document, selection } = editor;
    const lineNumber = selection.active.line + 1;
    const filename = document.fileName;
    const fileExtension = filename.split('.').pop()?.toLowerCase();

    if (!fileExtension || !nodeExtensions.has(fileExtension)) {
        vscode.window.showErrorMessage('This shortcut only supports Node-friendly files (JS/TS/Vue/Svelte).');
        return;
    }

    const selectedText = getSelectionTarget(document, selection);
    if (!selectedText) {
        vscode.window.showErrorMessage('Select a variable or expression to log.');
        return;
    }

    const preferences = { ...getLoggerPreferences(), includeFileMetadata: false };
    const printStatement = formatFile(document.fileName, lineNumber, selectedText, preferences);
    if (!printStatement) {
        vscode.window.showErrorMessage('Unable to build a console log for this file.');
        return;
    }

    const lineToInsert = selection.isEmpty ? selection.active.line : selection.end.line;
    const indentation = calculateIndentation(editor, lineNumber);
    const insertText = `${indentation}${printStatement.printSyntax}\n`;

    editor.edit((editBuilder: vscode.TextEditorEdit) => {
        editBuilder.insert(new vscode.Position(lineToInsert + 1, 0), insertText);
    });
};
