// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { addSuperLogger, nodeLogger } from './superLogger';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('🎉 Thanks for installing SuperLogger!');

	let addSuperLoggerDisposable = vscode.commands.registerCommand('superlogger.addSuperLogger', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			addSuperLogger(editor);
		}
	});

	let nodeLoggerDisposable = vscode.commands.registerCommand('superlogger.nodeLogger', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			nodeLogger(editor);
		}
	});

	context.subscriptions.push(addSuperLoggerDisposable, nodeLoggerDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
