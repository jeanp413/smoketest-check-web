import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('smoketest-check-web.smoketestCheckWeb', () => {
		vscode.window.showInformationMessage('Hello World from smoketest-check-web!');
	}));
}

export function deactivate() {}
