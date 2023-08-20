import * as vscode from 'vscode';
import { formatFile, calculateIndentation } from './utlis';


export const addSuperLogger = (editor: vscode.TextEditor | undefined) => {
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found.');
        return;
    }

    const { document, selection } = editor;
    const selectedText = document.getText(selection);
    const lineNumber = selection.active.line + 1;
    const printStatement = formatFile(document.fileName, lineNumber, selectedText);



    // Determine where to insert the print statement
    const lineToInsert = selection.isEmpty ? selection.active.line : selection.end.line;

    const calculatedIndentation = calculateIndentation(editor, lineNumber);
    const insertText = `${calculatedIndentation}${printStatement}\n`;

    editor.edit((editBuilder: vscode.TextEditorEdit) => {
        editBuilder.insert(new vscode.Position(lineToInsert + 1, 0), insertText);
    });
};
