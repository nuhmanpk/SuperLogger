import * as vscode from 'vscode';
import { formatFile, calculateIndentation, getRandomEmoji } from './utlis';
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

export const nodeLogger = (editor: vscode.TextEditor | undefined) => {
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found.');
        return;
    }

    const { document, selection } = editor;
    const selectedText = document.getText(selection);
    const lineNumber = selection.active.line + 1;
    const filename = document.fileName;
    const parts = filename.split(/[\\/]/);
    const fileName = parts[parts.length - 1];
    const fileExtension = fileName.split('.').pop();
    let fileProps: any;
    let nodeExtentions = ['JavaScript', 'TypeScript', 'TypeScript (JSX)',
        'JavaScript (JSX)', 'Vue.js', 'Svelte'];
    if (fileExtension) {
        fileProps = fileExtensions(fileExtension);
        if (nodeExtentions.includes(fileProps.language)) {
            const lineToInsert = selection.isEmpty ? selection.active.line : selection.end.line;

            const calculatedIndentation = calculateIndentation(editor, lineNumber);
            const insertText = `${calculatedIndentation}console.log('${getRandomEmoji()}:', ${selectedText});\n`;

            editor.edit((editBuilder: vscode.TextEditorEdit) => {
                editBuilder.insert(new vscode.Position(lineToInsert + 1, 0), insertText);
            });
        } else {
            vscode.window.showErrorMessage('This is only for Node.\n Try cmd + opt + p or ctrl + alt + p');
        }
    } else {
        vscode.window.showErrorMessage('Unable to determine file extension.');
    }

};