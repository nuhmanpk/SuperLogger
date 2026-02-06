type TemplateDefinition = {
    language: string;
    commentSyntax: string;
    withSelection: (label: string, sanitizedSelection: string, rawSelection: string) => string;
    withoutSelection: (label: string) => string;
};

const describeSelection = (label: string, sanitizedSelection: string) => `${label} -> ${sanitizedSelection}: `;

const templates: Record<string, TemplateDefinition> = {
    js: {
        language: 'JavaScript',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `console.log('${describeSelection(label, sanitizedSelection)}', ${rawSelection});`,
        withoutSelection: (label) => `console.log('${label}');`,
    },
    ts: {
        language: 'TypeScript',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `console.log('${describeSelection(label, sanitizedSelection)}', ${rawSelection});`,
        withoutSelection: (label) => `console.log('${label}');`,
    },
    mjs: {
        language: 'JavaScript (mjs)',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `console.log('${describeSelection(label, sanitizedSelection)}', ${rawSelection});`,
        withoutSelection: (label) => `console.log('${label}');`,
    },
    jsx: {
        language: 'JavaScript React (JSX)',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `console.log('${describeSelection(label, sanitizedSelection)}', ${rawSelection});`,
        withoutSelection: (label) => `console.log('${label}');`,
    },
    tsx: {
        language: 'TypeScript React (TSX)',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `console.log('${describeSelection(label, sanitizedSelection)}', ${rawSelection});`,
        withoutSelection: (label) => `console.log('${label}');`,
    },
    py: {
        language: 'Python',
        commentSyntax: '#',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `print('${describeSelection(label, sanitizedSelection)}', ${rawSelection})`,
        withoutSelection: (label) => `print('${label}')`,
    },
    ipynb: {
        language: 'Python',
        commentSyntax: '#',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `print('${describeSelection(label, sanitizedSelection)}', ${rawSelection})`,
        withoutSelection: (label) => `print('${label}')`,
    },
    java: {
        language: 'Java',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `System.out.println("${describeSelection(label, sanitizedSelection)}" + ${rawSelection});`,
        withoutSelection: (label) => `System.out.println("${label}");`,
    },
    c: {
        language: 'C',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `printf("${describeSelection(label, sanitizedSelection)}%s\\n", ${rawSelection});`,
        withoutSelection: (label) => `printf("${label}\\n");`,
    },
    cpp: {
        language: 'C++',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `std::cout << "${describeSelection(label, sanitizedSelection)}" << ${rawSelection} << std::endl;`,
        withoutSelection: (label) => `std::cout << "${label}" << std::endl;`,
    },
    cs: {
        language: 'C#',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `Console.WriteLine("${describeSelection(label, sanitizedSelection)}" + ${rawSelection});`,
        withoutSelection: (label) => `Console.WriteLine("${label}");`,
    },
    rb: {
        language: 'Ruby',
        commentSyntax: '#',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `puts "${describeSelection(label, sanitizedSelection)}#{${rawSelection}}"`,
        withoutSelection: (label) => `puts "${label}"`,
    },
    php: {
        language: 'PHP',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `echo "${describeSelection(label, sanitizedSelection)}" . $${rawSelection} . "\\n";`,
        withoutSelection: (label) => `echo "${label}\\n";`,
    },
    go: {
        language: 'Go',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `fmt.Println("${describeSelection(label, sanitizedSelection)}", ${rawSelection})`,
        withoutSelection: (label) => `fmt.Println("${label}")`,
    },
    swift: {
        language: 'Swift',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `print("${describeSelection(label, sanitizedSelection)}\\(${rawSelection})")`,
        withoutSelection: (label) => `print("${label}")`,
    },
    kotlin: {
        language: 'Kotlin',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `println("${describeSelection(label, sanitizedSelection)}$${rawSelection}")`,
        withoutSelection: (label) => `println("${label}")`,
    },
    rs: {
        language: 'Rust',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `println!("${describeSelection(label, sanitizedSelection)} {:?}", ${rawSelection});`,
        withoutSelection: (label) => `println!("${label}");`,
    },
    dart: {
        language: 'Dart',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `print("${describeSelection(label, sanitizedSelection)}$${rawSelection}");`,
        withoutSelection: (label) => `print("${label}");`,
    },
    scala: {
        language: 'Scala',
        commentSyntax: '//',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `println(s"${describeSelection(label, sanitizedSelection)}$${rawSelection}")`,
        withoutSelection: (label) => `println("${label}")`,
    },
    lua: {
        language: 'Lua',
        commentSyntax: '--',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `print('${describeSelection(label, sanitizedSelection)}' .. tostring(${rawSelection}))`,
        withoutSelection: (label) => `print('${label}')`,
    },
    elixir: {
        language: 'Elixir',
        commentSyntax: '#',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `IO.puts("${describeSelection(label, sanitizedSelection)}#{${rawSelection}}")`,
        withoutSelection: (label) => `IO.puts("${label}")`,
    },
    julia: {
        language: 'Julia',
        commentSyntax: '#',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `println("${describeSelection(label, sanitizedSelection)}", ${rawSelection})`,
        withoutSelection: (label) => `println("${label}")`,
    },
    hs: {
        language: 'Haskell',
        commentSyntax: '--',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `putStrLn ("${describeSelection(label, sanitizedSelection)}" ++ show ${rawSelection})`,
        withoutSelection: (label) => `putStrLn "${label}"`,
    },
    sh: {
        language: 'Shell',
        commentSyntax: '#',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `echo "${describeSelection(label, sanitizedSelection)}${rawSelection}"`,
        withoutSelection: (label) => `echo "${label}"`,
    },
    bash: {
        language: 'Bash',
        commentSyntax: '#',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `echo "${describeSelection(label, sanitizedSelection)}${rawSelection}"`,
        withoutSelection: (label) => `echo "${label}"`,
    },
    ps1: {
        language: 'PowerShell',
        commentSyntax: '#',
        withSelection: (label, sanitizedSelection, rawSelection) =>
            `Write-Host "${describeSelection(label, sanitizedSelection)}$${rawSelection}"`,
        withoutSelection: (label) => `Write-Host "${label}"`,
    },
};

export const fileExtensions = (
    fileExtension: string,
    label: string,
    sanitizedSelection?: string,
    rawSelection?: string,
) => {
    const template = templates[fileExtension];
    if (!template) {
        return undefined;
    }

    if (sanitizedSelection && rawSelection) {
        return {
            language: template.language,
            commentSyntax: template.commentSyntax,
            printSyntax: template.withSelection(label, sanitizedSelection, rawSelection),
        };
    }

    return {
        language: template.language,
        commentSyntax: template.commentSyntax,
        printSyntax: template.withoutSelection(label),
    };
};
