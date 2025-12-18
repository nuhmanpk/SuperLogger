import { getRandomEmoji } from './utils';

export const fileExtensions = (fileExtension: string, filePath?: string, selectedText?: string) => {
    const sanitizedFilePath = filePath;
    const language: Record<string, { language: string; printSyntax: string; commentSyntax: string; }> = {
        js: {
            language: 'JavaScript',
            printSyntax: selectedText
                ? `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ', ${selectedText});`
                : `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath}');`,
            commentSyntax: '//',
        },
        ts: {
            language: 'TypeScript',
            printSyntax: selectedText
                ? `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ', ${selectedText});`
                : `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath}');`,
            commentSyntax: '//',
        },
        mjs: {
            language: 'JavaScript (mjs)',
            printSyntax: selectedText
                ? `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ', ${selectedText});`
                : `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath}');`,
            commentSyntax: '//',
        },
        jsx: {
            language: 'JavaScript React (JSX)',
            printSyntax: selectedText
                ? `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ', ${selectedText});`
                : `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath}');`,
            commentSyntax: '//',
        },
        tsx: {
            language: 'TypeScript React (TSX)',
            printSyntax: selectedText
                ? `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ', ${selectedText});`
                : `console.log('${getRandomEmoji()} ~ ${sanitizedFilePath}');`,
            commentSyntax: '//',
        },
        py: {
            language: 'Python',
            printSyntax: selectedText
                ? `print('${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ', ${selectedText})`
                : `print('${getRandomEmoji()} ~ ${sanitizedFilePath}')`,
            commentSyntax: '#',
        },
        ipynb: {
            language: 'Python',
            printSyntax: selectedText
                ? `print('${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ', ${selectedText})`
                : `print('${getRandomEmoji()} ~ ${sanitizedFilePath}')`,
            commentSyntax: '#',
        },
        java: {
            language: 'Java',
            printSyntax: selectedText
                ? `System.out.println("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: " + ${selectedText});`
                : `System.out.println("${getRandomEmoji()} ~ ${sanitizedFilePath}");`,
            commentSyntax: '//',
        },
        c: {
            language: 'C',
            printSyntax: selectedText
                ? `printf("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: %s\\n", ${selectedText});`
                : `printf("${getRandomEmoji()} ~ ${sanitizedFilePath}\\n");`,
            commentSyntax: '//',
        },
        cpp: {
            language: 'C++',
            printSyntax: selectedText
                ? `std::cout << "${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: " << ${selectedText} << std::endl;`
                : `std::cout << "${getRandomEmoji()} ~ ${sanitizedFilePath}" << std::endl;`,
            commentSyntax: '//',
        },
        cs: {
            language: 'C#',
            printSyntax: selectedText
                ? `Console.WriteLine("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: " + ${selectedText});`
                : `Console.WriteLine("${getRandomEmoji()} ~ ${sanitizedFilePath}");`,
            commentSyntax: '//',
        },
        rb: {
            language: 'Ruby',
            printSyntax: selectedText
                ? `puts "${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: #{${selectedText}}"`
                : `puts "${getRandomEmoji()} ~ ${sanitizedFilePath}"`,
            commentSyntax: '#',
        },
        php: {
            language: 'PHP',
            printSyntax: selectedText
                ? `echo "${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: " . $${selectedText} . "\\n";`
                : `echo "${getRandomEmoji()} ~ ${sanitizedFilePath}\\n";`,
            commentSyntax: '//',
        },
        go: {
            language: 'Go',
            printSyntax: selectedText
                ? `fmt.Println("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}:", ${selectedText})`
                : `fmt.Println("${getRandomEmoji()} ~ ${sanitizedFilePath}")`,
            commentSyntax: '//',
        },
        swift: {
            language: 'Swift',
            printSyntax: selectedText
                ? `print("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: \\(${selectedText})")`
                : `print("${getRandomEmoji()} ~ ${sanitizedFilePath}")`,
            commentSyntax: '//',
        },
        kotlin: {
            language: 'Kotlin',
            printSyntax: selectedText
                ? `println("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: $${selectedText}")`
                : `println("${getRandomEmoji()} ~ ${sanitizedFilePath}")`,
            commentSyntax: '//',
        },
        rs: {
            language: 'Rust',
            printSyntax: selectedText
                ? `println!("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: {:?}", ${selectedText});`
                : `println!("${getRandomEmoji()} ~ ${sanitizedFilePath}");`,
            commentSyntax: '//',
        },
        dart: {
            language: 'Dart',
            printSyntax: selectedText
                ? `print("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: $${selectedText}");`
                : `print("${getRandomEmoji()} ~ ${sanitizedFilePath}");`,
            commentSyntax: '//',
        },
        scala: {
            language: 'Scala',
            printSyntax: selectedText
                ? `println(s"${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: $${selectedText}")`
                : `println("${getRandomEmoji()} ~ ${sanitizedFilePath}")`,
            commentSyntax: '//',
        },
        lua: {
            language: 'Lua',
            printSyntax: selectedText
                ? `print('${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ' .. tostring(${selectedText}))`
                : `print('${getRandomEmoji()} ~ ${sanitizedFilePath}')`,
            commentSyntax: '--',
        },
        elixir: {
            language: 'Elixir',
            printSyntax: selectedText
                ? `IO.puts("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: #{${selectedText}}")`
                : `IO.puts("${getRandomEmoji()} ~ ${sanitizedFilePath}")`,
            commentSyntax: '#',
        },
        julia: {
            language: 'Julia',
            printSyntax: selectedText
                ? `println("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ", ${selectedText})`
                : `println("${getRandomEmoji()} ~ ${sanitizedFilePath}")`,
            commentSyntax: '#',
        },
        hs: {
            language: 'Haskell',
            printSyntax: selectedText
                ? `putStrLn ("${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: " ++ show ${selectedText})`
                : `putStrLn "${getRandomEmoji()} ~ ${sanitizedFilePath}"`,
            commentSyntax: '--',
        },
        sh: {
            language: 'Shell',
            printSyntax: selectedText
                ? `echo "${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ${selectedText}"`
                : `echo "${getRandomEmoji()} ~ ${sanitizedFilePath}"`,
            commentSyntax: '#',
        },
        bash: {
            language: 'Bash',
            printSyntax: selectedText
                ? `echo "${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: ${selectedText}"`
                : `echo "${getRandomEmoji()} ~ ${sanitizedFilePath}"`,
            commentSyntax: '#',
        },
        ps1: {
            language: 'PowerShell',
            printSyntax: selectedText
                ? `Write-Host "${getRandomEmoji()} ~ ${sanitizedFilePath} -> ${selectedText}: $${selectedText}"`
                : `Write-Host "${getRandomEmoji()} ~ ${sanitizedFilePath}"`,
            commentSyntax: '#',
        },
    };
    return language[fileExtension];
};
