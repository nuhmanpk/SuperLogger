import * as vscode from 'vscode';
import { formatFile, calculateIndentation } from './utlis';
import { fileExtensions } from './fileExtensions';


export const addSuperLogger = (editor: vscode.TextEditor | undefined) => {
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found.');
        return;
    }

    const { document, selection } = editor;
    const selectedText = document.getText(selection);
    const lineNumber = selection.active.line + 1;
    const printStatement = formatFile(document.fileName, lineNumber, selectedText);
    if (!printStatement) {
        vscode.window.showErrorMessage('Couldn\'t find any logging for this extenstion.');
        return;
    }


    // Determine where to insert the print statement
    const lineToInsert = selection.isEmpty ? selection.active.line : selection.end.line;

    const calculatedIndentation = calculateIndentation(editor, lineNumber);
    const insertText = `${calculatedIndentation}${printStatement.printSyntax}\n`;

    editor.edit((editBuilder: vscode.TextEditorEdit) => {
        editBuilder.insert(new vscode.Position(lineToInsert + 1, 0), insertText);
    });
};

export const commentLogger = (editor: vscode.TextEditor | undefined) => {
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found.');
        return;
    }

    const { document } = editor;
    const text = document.getText();
    const filename = document.fileName;
    const parts = filename.split(/[\\/]/);
    const fileName = parts[parts.length - 1];
    const fileExtension = fileName.split('.').pop();
    let fileProps: any;
    if (fileExtension) {
        fileProps = fileExtensions(fileExtension);
    } else {
        vscode.window.showErrorMessage('Unable to determine file extension.');
    }

    // Generate the regex pattern dynamically
    const logRegexPattern = `(${fileProps.printSyntax}\\([^)]*\\);?)`;
    const logRegex = new RegExp(logRegexPattern, 'g');

    const commentedText = text.replace(logRegex, (match) => `${fileProps.commentSyntax} ${match}`);

    // Replace the entire content of the document with the modified text
    editor.edit((editBuilder) => {
        const start = new vscode.Position(0, 0);
        const end = new vscode.Position(document.lineCount - 1, 0);
        const range = new vscode.Range(start, end);
        editBuilder.replace(range, commentedText);
    });

    vscode.window.showInformationMessage('Added comments to console.log() statements.');



};