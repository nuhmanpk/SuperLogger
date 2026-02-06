// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { readFileSync } from 'fs';
import { addSuperLogger, nodeLogger } from './superLogger';

const WELCOME_STATE_KEY = 'superLogger.hasShownWelcome';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const config = vscode.workspace.getConfiguration('superLogger');
	if (config.get<boolean>('showWelcomeMessage', true)) {
		vscode.window.showInformationMessage('🎉 Thanks for installing SuperLogger!');
	}

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

	let welcomeDisposable = vscode.commands.registerCommand('superlogger.openWelcome', () => {
		showWelcomePanel(context);
	});

	context.subscriptions.push(addSuperLoggerDisposable, nodeLoggerDisposable, welcomeDisposable);

	const hasSeenWelcome = context.globalState.get<boolean>(WELCOME_STATE_KEY, false);
	if (!hasSeenWelcome) {
		showWelcomePanel(context, true);
	}
}

// This method is called when your extension is deactivated
export function deactivate() { }

function showWelcomePanel(context: vscode.ExtensionContext, markAsSeen: boolean = false) {
	const panel = vscode.window.createWebviewPanel(
		'superLoggerWelcome',
		'Welcome to SuperLogger',
		vscode.ViewColumn.Active,
		{
			enableScripts: false,
			localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'images')]
		}
	);

	panel.webview.html = getWelcomeHtml(context, panel.webview);

	if (markAsSeen) {
		context.globalState.update(WELCOME_STATE_KEY, true);
	}
}

function getWelcomeHtml(context: vscode.ExtensionContext, webview: vscode.Webview): string {
	const extensionPackage = getPackageMetadata(context);
	const version = extensionPackage?.version ?? '0.0.0';
	const repositoryUrl = sanitizeLink(extensionPackage?.repository?.url ?? 'https://github.com/nuhmanpk/SuperLogger');
	const marketplaceUrl = 'https://marketplace.visualstudio.com/items?itemName=nuhmanpk.superlogger';
	const sponsorUrl = 'https://github.com/sponsors/nuhmanpk';
	const coffeeUrl = 'https://www.buymeacoffee.com/nuhmanpk';
	const maintainerSite = 'https://github.com/nuhmanpk';
	const logoUri = webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'images', 'logo.png'));
	const useCases = [
		'Drop contextual logs without leaving the keyboard.',
		'Quickly instrument unfamiliar code when onboarding to a repo.',
		'Share playful console output during live coding sessions.',
		'Create repeatable logging conventions across polyglot teams.',
	];
	const languages = [
		'Python',
		'JavaScript',
		'TypeScript',
		'Java',
		'Go',
		'Swift',
		'Kotlin',
		'Ruby',
		'PHP',
		'C#',
		'C++',
		'Rust',
		'Dart',
		'Scala',
		'Lua',
		'Elixir',
		'Julia',
	];
	const quickLinks = [
		{ label: 'GitHub Repo', url: repositoryUrl },
		{ label: 'VS Code Marketplace', url: marketplaceUrl },
		{ label: 'Sponsor on GitHub', url: sponsorUrl },
		{ label: 'Buy Me A Coffee', url: coffeeUrl },
	];
	const maintainerLinks = [
		{ label: 'Follow @nuhmanpk on GitHub', url: maintainerSite },
		{ label: 'Sponsor via GitHub Sponsors', url: sponsorUrl },
		{ label: 'Send feedback on GitHub Issues', url: `${repositoryUrl}/issues` },
	];
	const quickLinksHtml = quickLinks.map(link => `<a class="pill" href="${link.url}" target="_blank" rel="noreferrer noopener">${link.label}</a>`).join('');
	const useCasesHtml = useCases.map(item => `<li>${item}</li>`).join('');
	const languagesHtml = languages.map(lang => `<span class="chip">${lang}</span>`).join('');
	const maintainerLinksHtml = maintainerLinks.map(link => `<li><a href="${link.url}" target="_blank" rel="noreferrer noopener">${link.label}</a></li>`).join('');

	return /* html */`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Welcome to SuperLogger</title>
		<style>
			:root {
				color-scheme: light dark;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
			}
			body {
				margin: 0;
				padding: 32px;
				background: radial-gradient(circle at 10% 20%, rgba(42,182,230,0.18), transparent 50%), radial-gradient(circle at 80% 0%, rgba(244,114,182,0.18), transparent 55%), var(--vscode-editor-background);
				color: var(--vscode-editor-foreground);
			}
			h1, h2, h3, p {
				margin: 0;
			}
			.hero {
				display: grid;
				grid-template-columns: auto 1fr;
				gap: 20px;
				align-items: center;
				margin-bottom: 32px;
				padding: 24px;
				border-radius: 18px;
				background: rgba(0,0,0,0.2);
				backdrop-filter: blur(8px);
			}
			.hero img {
				width: 84px;
				height: 84px;
				filter: drop-shadow(0 8px 24px rgba(0,0,0,0.35));
			}
			.tagline {
				font-size: 1.15rem;
				color: var(--vscode-descriptionForeground);
				margin-top: 6px;
			}
			.cards {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
				gap: 16px;
				margin-bottom: 32px;
			}
			.card {
				border: 1px solid var(--vscode-editorHoverWidget-border);
				padding: 16px;
				border-radius: 14px;
				background: rgba(20,20,20,0.35);
				box-shadow: 0 12px 40px rgba(0,0,0,0.25);
			}
			.card .label {
				font-size: 0.85rem;
				color: var(--vscode-descriptionForeground);
			}
		.card .value {
			font-size: 1.2rem;
			font-weight: 600;
		}
			.pills {
				display: flex;
				flex-wrap: wrap;
				gap: 12px;
				margin: 16px 0 32px;
			}
			.pill {
				text-decoration: none;
				padding: 10px 18px;
				border-radius: 999px;
				border: 1px solid rgba(255,255,255,0.2);
				background: rgba(255,255,255,0.05);
				color: inherit;
				font-weight: 600;
				box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
			}
			section + section {
				margin-top: 36px;
			}
			section h2 {
				margin-bottom: 12px;
				font-size: 1.2rem;
			}
			.list {
				margin: 12px 0 0 20px;
				padding: 0;
			}
			.list li {
				margin-bottom: 6px;
			}
			.chips {
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
			}
			.chip {
				padding: 6px 12px;
				border-radius: 999px;
				background: rgba(255,255,255,0.08);
				border: 1px solid rgba(255,255,255,0.1);
				font-size: 0.85rem;
			}
			.thankyou {
				border-left: 4px solid rgba(255,255,255,0.4);
				padding-left: 16px;
				color: var(--vscode-descriptionForeground);
				font-style: italic;
			}
			.link-list {
				margin: 8px 0 0 18px;
			}
			.link-list li {
				margin-bottom: 4px;
			}
			.link-list a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			footer {
				margin-top: 40px;
				font-size: 0.85rem;
				color: var(--vscode-descriptionForeground);
				text-align: center;
			}
			code {
				background: rgba(255,255,255,0.08);
				padding: 2px 6px;
				border-radius: 4px;
				border: 1px solid rgba(255,255,255,0.12);
			}
		</style>
</head>
<body>
	<header class="hero">
		<img src="${logoUri}" alt="SuperLogger logo" />
		<div>
			<h1>Welcome to SuperLogger</h1>
			<p class="tagline">Turbo Console Log for every language—one shortcut for every codebase.</p>
		</div>
	</header>

	<section class="cards">
		<div class="card">
			<div class="label">Latest Release</div>
			<div class="value">v${version}</div>
		</div>
		<div class="card">
			<div class="label">Status</div>
			<div class="value">Open Source · MIT</div>
			<p>Actively maintained on GitHub.</p>
		</div>
		<div class="card">
			<div class="label">Coverage</div>
			<div class="value">20+ languages</div>
			<p>Python, JS/TS, Java, Go, Swift, and more.</p>
		</div>
	</section>

	<section>
		<h2>Quick Links</h2>
		<div class="pills">${quickLinksHtml}</div>
	</section>

	<section>
		<h2>Getting Started</h2>
		<ol class="list">
			<li>Select any variable, press <code>Ctrl/Cmd + Alt + P</code> to drop a contextual log.</li>
			<li>Use <code>Ctrl/Cmd + Alt + K</code> inside Node/JS files for quick emoji-less logs.</li>
			<li>Customize emoji, metadata, and welcome behavior under <strong>Settings → Extensions → SuperLogger</strong>.</li>
		</ol>
	</section>

	<section>
		<h2>Popular Use Cases</h2>
		<ul class="list">${useCasesHtml}</ul>
	</section>

	<section>
		<h2>Supported Languages</h2>
		<div class="chips">${languagesHtml}</div>
	</section>

	<section>
		<h2>Maintainer Links</h2>
		<ul class="link-list">${maintainerLinksHtml}</ul>
	</section>

	<section>
		<h2>Thank You</h2>
		<p class="thankyou">Thanks for trusting SuperLogger on your projects. Your stars, issues, and sponsorships keep the roadmap moving and help me pour more creativity into delightful debugging experiences.</p>
	</section>

	<footer>Built with ❤️ by Nuhman • Enjoy faster debugging!</footer>
</body>
</html>`;
}

function sanitizeLink(url: string): string {
	return url.replace(/^git\+/, '').replace(/\.git$/, '');
}

let cachedPackageMetadata: { version?: string; repository?: { url?: string } } | undefined;
function getPackageMetadata(context: vscode.ExtensionContext) {
	if (!cachedPackageMetadata) {
		try {
			const buffer = readFileSync(context.asAbsolutePath('package.json'), 'utf8');
			cachedPackageMetadata = JSON.parse(buffer);
		} catch (error) {
			console.error('Unable to read package metadata', error);
			cachedPackageMetadata = {};
		}
	}
	return cachedPackageMetadata;
}
