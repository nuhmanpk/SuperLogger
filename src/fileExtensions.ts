import { getRandomEmoji, getRandomJoke } from './utils';

export const fileExtensions = (fileExtension: string, filePath?: string, selectedText?: string) => {
    const defaultPrintStatement = `${getRandomEmoji()} ~ ${filePath || 'Unknown file'} -> ${selectedText || getRandomJoke()}`;
    
    const dartPrintStatement = selectedText
        ? selectedText.includes(".")
            ? `${getRandomEmoji()} ${filePath || 'Unknown file'} -> ${selectedText}: \$\{${selectedText}\}`
            : `${getRandomEmoji()} ${filePath || 'Unknown file'} -> ${selectedText}: \$${selectedText}`
        : `${getRandomEmoji()} ${filePath || 'Unknown file'}`;

    const language: Record<string, { language: string; printSyntax: string; commentSyntax: string }> = {
        'js': {
            language: 'JavaScript',
            printSyntax: `console.log('${defaultPrintStatement}');`,
            commentSyntax: "//",
        },
        'ts': {
            language: 'TypeScript',
            printSyntax: `console.log('${defaultPrintStatement}');`,
            commentSyntax: "//",
        },
        'tsx': {
            language: 'TypeScript (JSX)',
            printSyntax: `console.log('${defaultPrintStatement}');`,
            commentSyntax: "//",
        },
        'jsx': {
            language: 'JavaScript (JSX)',
            printSyntax: `console.log('${defaultPrintStatement}');`,
            commentSyntax: "//",
        },
        'vue': {
            language: 'Vue.js',
            printSyntax: `console.log("${defaultPrintStatement}");`,
            commentSyntax: "//",
        },
        'svelte': {
            language: 'Svelte',
            printSyntax: `console.log("${defaultPrintStatement}");`,
            commentSyntax: "//",
        },
        'py': {
            language: 'Python',
            printSyntax: `print("${defaultPrintStatement}")`,
            commentSyntax: "#",
        },
        'ipynb': {
            language: 'Jupyter Notebook',
            printSyntax: `print("${defaultPrintStatement}")`,
            commentSyntax: "#",
        },
        'java': {
            language: 'Java',
            printSyntax: `System.out.println("${defaultPrintStatement}");`,
            commentSyntax: "//",
        },
        'c': {
            language: 'C',
            printSyntax: `printf("${defaultPrintStatement}\\n");`,
            commentSyntax: "//",
        },
        'cpp': {
            language: 'C++',
            printSyntax: `std::cout << "${defaultPrintStatement}" << std::endl;`,
            commentSyntax: "//",
        },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'c#': {
            language: 'C#',
            printSyntax: `Console.WriteLine("${defaultPrintStatement}");`,
            commentSyntax: "//",
        },
        'rb': {
            language: 'Ruby',
            printSyntax: `puts "${defaultPrintStatement}"`,
            commentSyntax: "#",
        },
        'php': {
            language: 'PHP',
            printSyntax: `echo "${getRandomEmoji()} ~ ${filePath} -> \$${selectedText}: " . (${selectedText ? `print_r(${selectedText}, true)` : `"${getRandomJoke()}"`});`,
            commentSyntax: "//",
        },
        'go': {
            language: 'Go',
            printSyntax: `fmt.Println("${defaultPrintStatement}")`,
            commentSyntax: "//",
        },
        'swift': {
            language: 'Swift',
            printSyntax: `print("${defaultPrintStatement}")`,
            commentSyntax: "//",
        },
        'kotlin': {
            language: 'Kotlin',
            printSyntax: `println("${defaultPrintStatement}")`,
            commentSyntax: "//",
        },
        'rust': {
            language: 'Rust',
            printSyntax: `println!("${defaultPrintStatement}");`,
            commentSyntax: "//",
        },
        'perl': {
            language: 'Perl',
            printSyntax: `print "${defaultPrintStatement}";`,
            commentSyntax: "#",
        },
        'r': {
            language: 'R',
            printSyntax: `cat("${defaultPrintStatement}\\n")`,
            commentSyntax: "#",
        },
        'dart': {
            language: 'Dart',
            printSyntax: `print("${dartPrintStatement}");`,
            commentSyntax: "//",
        },
        'scala': {
            language: 'Scala',
            printSyntax: `println("${defaultPrintStatement}")`,
            commentSyntax: "//",
        },
        'lua': {
            language: 'Lua',
            printSyntax: `print("${defaultPrintStatement}")`,
            commentSyntax: "--",
        },
        'elixir': {
            language: 'Elixir',
            printSyntax: `IO.puts("${defaultPrintStatement}")`,
            commentSyntax: "#",
        },
        'julia': {
            language: 'Julia',
            printSyntax: `println("${defaultPrintStatement}")`,
            commentSyntax: "#",
        },
    };

    if (!language[fileExtension]) {
        console.error(`Unsupported file extension: ${fileExtension}`);
        return null;
    }

    return language[fileExtension];
};
