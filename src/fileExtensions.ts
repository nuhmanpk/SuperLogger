import { getRandomEmoji, getRandomJoke } from './utlis';


export const fileExtensions = (fileExtension: string, filePath?: string, selectedText?: string) => {
    const defaultPrintStatement = `"${getRandomEmoji()} ~ ${filePath} -> ${selectedText}: ",  ${selectedText ? selectedText : `"${getRandomJoke()}"`}`;
    const language: any =
    {
        'js': {
            language: 'JavaScript',
            printSyntax: `console.log(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'ts': {
            language: 'TypeScript',
            printSyntax: `console.log(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'tsx': {
            language: 'TypeScript (JSX)',
            printSyntax: `console.log(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'jsx': {
            language: 'JavaScript (JSX)',
            printSyntax: `console.log(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'vue': {
            language: 'Vue.js',
            printSyntax: `console.log(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'svelte': {
            language: 'Svelte',
            printSyntax: `console.log(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'py': {
            language: 'Python',
            printSyntax: `print(${defaultPrintStatement})`,
            commentSyntax: "#",
        },
        'java': {
            language: 'Java',
            printSyntax: `System.out.println(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'c': {
            language: 'C',
            printSyntax: `printf(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'cpp': {
            language: 'C++',
            printSyntax: `std::cout << ${defaultPrintStatement} << std::endl;`,
            commentSyntax: "//",
        },
        'c#': {
            language: 'C#',
            printSyntax: `Console.WriteLine(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'rb': {
            language: 'Ruby',
            printSyntax: `puts ${defaultPrintStatement};`,
            commentSyntax: "#",
        },
        'php': {
            language: 'PHP',
            printSyntax: `echo (${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'go': {
            language: 'Go',
            printSyntax: `fmt.Println(${defaultPrintStatement})`,
            commentSyntax: "//",
        },
        'swift': {
            language: 'Swift',
            printSyntax: `print(${defaultPrintStatement})`,
            commentSyntax: "//",
        },
        'kotlin': {
            language: 'Kotlin',
            printSyntax: `println(${defaultPrintStatement})`,
            commentSyntax: "//",
        },
        'rust': {
            language: 'Rust',
            printSyntax: `println!(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'perl': {
            language: 'Perl',
            printSyntax: `print ${defaultPrintStatement};`,
            commentSyntax: "#",
        },
        'r': {
            language: 'R',
            printSyntax: `cat(${defaultPrintStatement})`,
            commentSyntax: "#",
        },
        'dart': {
            language: 'Dart',
            printSyntax: `print(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'scala': {
            language: 'Scala',
            printSyntax: `println(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'lua': {
            language: 'Lua',
            printSyntax: `print(${defaultPrintStatement})`,
            commentSyntax: "--",
        },
        'perl6': {
            language: 'Perl 6',
            printSyntax: `say ${defaultPrintStatement};`,
            commentSyntax: "#",
        },
        'haskell': {
            language: 'Haskell',
            printSyntax: `putStrLn ${defaultPrintStatement}`,
            commentSyntax: "--",
        },
        'racket': {
            language: 'Racket',
            printSyntax: `(displayln (format ${defaultPrintStatement}))`,
            commentSyntax: ";",
        },
        'elixir': {
            language: 'Elixir',
            printSyntax: `IO.puts(${defaultPrintStatement})`,
            commentSyntax: "#",
        },
        'julia': {
            language: 'Julia',
            printSyntax: `println(${defaultPrintStatement})`,
            commentSyntax: "#",
        },
        'groovy': {
            language: 'Groovy',
            printSyntax: `println(${defaultPrintStatement})`,
            commentSyntax: "//",
        },
        'cobol': {
            language: 'COBOL',
            printSyntax: `DISPLAY ${defaultPrintStatement}"`,
            commentSyntax: "*>",
        },
        'fortran': {
            language: 'Fortran',
            printSyntax: `WRITE(*,*) ${defaultPrintStatement}"`,
            commentSyntax: "!",
        },
        'vhdl': {
            language: 'VHDL',
            printSyntax: `report ${defaultPrintStatement}`,
            commentSyntax: "--",
        },
        'verilog': {
            language: 'Verilog',
            printSyntax: `$display(${defaultPrintStatement})`,
            commentSyntax: "//",
        },
        'pascal': {
            language: 'Pascal',
            printSyntax: `WriteLn(${defaultPrintStatement});`,
            commentSyntax: "//",
        },
        'ada': {
            language: 'Ada',
            printSyntax: `Put_Line(${defaultPrintStatement});`,
            commentSyntax: "--",
        },
        'sql': {
            language: 'SQL',
            printSyntax: `PRINT ${defaultPrintStatement};`,
            commentSyntax: "--",
        },
        'lisp': {
            language: 'Lisp',
            printSyntax: `(format t ${defaultPrintStatement})`,
            commentSyntax: ";;",
        },
        'scheme': {
            language: 'Scheme',
            printSyntax: `(display (format ${defaultPrintStatement}))`,
            commentSyntax: ";",
        },
        'powershell': {
            language: 'PowerShell',
            printSyntax: `Write-Host ${defaultPrintStatement})`,
            commentSyntax: "#",
        },
    };

    try {
        return language[fileExtension];
    } catch (error) {
        console.log(error);
    }

};