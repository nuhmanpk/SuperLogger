// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { addSuperLogger, commentLogger } from './superLogger';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let addSuperLoggerDisposable = vscode.commands.registerCommand('superlogger.addSuperLogger', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			addSuperLogger(editor);
		}
	});

	let commentLoggerDisposable = vscode.commands.registerCommand('superlogger.commentLogs', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			commentLogger(editor);
		}
	});

	context.subscriptions.push(addSuperLoggerDisposable, commentLoggerDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
