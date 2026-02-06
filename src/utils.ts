import * as vscode from 'vscode';
import { data } from './misc';
import { fileExtensions } from './fileExtensions';

export interface LoggerPreferences {
    includeEmoji: boolean;
    includeFileMetadata: boolean;
    insertJokeComment: boolean;
}

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

export function sanitizeForMessage(value: string): string {
    return value
        .replace(/\\/g, '\\\\')
        .replace(/\r/g, '\\r')
        .replace(/\n/g, '\\n')
        .replace(/"/g, '\\"')
        .replace(/'/g, '\\\'');
}

// Function to trim the file and include line number , return the file language
export function formatFile(filePath: string, lineNumber: number, selectedText: string | undefined, preferences: LoggerPreferences): any {
    const parts = filePath.split(/[\\/]/);
    const fileName = parts[parts.length - 1];
    const fileExtension = fileName.split('.').pop();

    if (!fileExtension) {
        return null;
    }

    const labelSegments: string[] = [];
    if (preferences.includeEmoji) {
        labelSegments.push(getRandomEmoji());
    }
    if (preferences.includeFileMetadata) {
        labelSegments.push(`${fileName}:${lineNumber}`);
    }

    const baseLabel = labelSegments.length ? labelSegments.join(' ~ ') : 'SuperLogger';
    const sanitizedLabel = sanitizeForMessage(baseLabel);
    const sanitizedSelection = selectedText ? sanitizeForMessage(selectedText) : undefined;
    const printStatement = fileExtensions(fileExtension, sanitizedLabel, sanitizedSelection, selectedText);

    if (!printStatement) {
        return null;
    }

    if (preferences.insertJokeComment) {
        return {
            ...printStatement,
            jokeComment: getRandomJoke(),
        };
    }

    return printStatement;
}

export function calculateIndentation(editor: vscode.TextEditor, lineNumber: number): string {
    try {
        const document = editor.document;
        if (document.lineCount === 0) {
            return '';
        }

        const zeroBasedLine = Math.min(Math.max(lineNumber - 1, 0), document.lineCount - 1);

        const indentUnit =
            editor.options.insertSpaces === false
                ? '\t'
                : ' '.repeat(Math.max(1, Number(editor.options.tabSize) || 4));

        // Walk upwards to find the nearest non-empty line to anchor indentation.
        let referenceIndex = zeroBasedLine;
        let referenceText = document.lineAt(referenceIndex).text;
        while (referenceIndex > 0 && referenceText.trim().length === 0) {
            referenceIndex -= 1;
            referenceText = document.lineAt(referenceIndex).text;
        }

        const referenceIndent = referenceText.match(/^\s*/)?.[0] || '';
        const trimmedReference = referenceText.trim();

        // If the reference line opens a new block (Python ':' or braces), indent once more.
        const opensBlock = /[:{\[]\s*$/.test(trimmedReference);
        if (opensBlock) {
            return referenceIndent + indentUnit;
        }

        return referenceIndent;
    } catch (error) {
        console.error('Error calculating indentation:', error);
        return '';
    }
}

export function getSelectionTarget(document: vscode.TextDocument, selection: vscode.Selection): string | undefined {
    const directSelection = document.getText(selection);
    if (directSelection && directSelection.trim().length > 0) {
        return directSelection;
    }

    const wordRange = document.getWordRangeAtPosition(selection.active);
    if (wordRange) {
        const word = document.getText(wordRange);
        return word.trim().length > 0 ? word : undefined;
    }

    return undefined;
}
