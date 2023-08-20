import { getRandomEmoji, getRandomJoke } from './utlis';


export const fileExtensions=(filePath : string , fileExtension : string,selectedText : string)=> {
    const defaultPrintStatement = `"${getRandomEmoji()} ~ ${filePath} -> ${selectedText}: ",  ${selectedText ? selectedText : `"${getRandomJoke()}"`}`;
    const language : any = 
        {
            'js': {
            language: 'JavaScript',
            defaultSyntax: `console.log(${defaultPrintStatement})`,
            },
            'ts': {
                language: 'TypeScript',
                defaultSyntax: `console.log(${defaultPrintStatement})`,
            },
            'tsx': {
                language: 'TypeScript',
                defaultSyntax: `console.log(${defaultPrintStatement})`,
            },
            'jsx': {
                language: 'TypeScript',
                defaultSyntax: `console.log(${defaultPrintStatement})`,
            },
            'vue': {
                language: 'TypeScript',
                defaultSyntax: `console.log(${defaultPrintStatement})`,
            },
            'svelte': {
                language: 'TypeScript',
                defaultSyntax: `console.log(${defaultPrintStatement})`,
            },
            'py': {
                language: 'Python',
                defaultSyntax: `print(${defaultPrintStatement})`,
            },
            'java': {
                language: 'Java',
                defaultSyntax: `System.out.println(${defaultPrintStatement});`,
            },
            'c': {
                language: 'C',
                defaultSyntax: `printf(${defaultPrintStatement});`,
            },
            'cpp': {
                language: 'C++',
                defaultSyntax: `std::cout << ${defaultPrintStatement}) << std::endl;`,
            },
            'csharp': {
                language: 'C#',
                defaultSyntax: `Console.WriteLine(${defaultPrintStatement});`,
            },
            'ruby': {
                language: 'Ruby',
                defaultSyntax: `puts ${defaultPrintStatement});`,
            },
            'php': {
                language: 'PHP',
                defaultSyntax: `echo ${defaultPrintStatement});`,
            },
            'go': {
                language: 'Go',
                defaultSyntax: `fmt.Println(${defaultPrintStatement})`,
            },
            'swift': {
                language: 'Swift',
                defaultSyntax: `print(${defaultPrintStatement})`,
            },
            'kotlin': {
                language: 'Kotlin',
                defaultSyntax: `println(${defaultPrintStatement})`,
            },
            'rust': {
                language: 'Rust',
                defaultSyntax: `println!(${defaultPrintStatement});`,
            },
            'perl': {
                language: 'Perl',
                defaultSyntax: `print ${defaultPrintStatement});`,
            },
            'r': {
                language: 'R',
                defaultSyntax: `cat(${defaultPrintStatement})`,
            },
            'dart': {
                language: 'Dart',
                defaultSyntax: `print(${defaultPrintStatement});`,
            },
            'scala': {
                language: 'Scala',
                defaultSyntax: `println(${defaultPrintStatement});`,
            },
            'lua': {
                language: 'Lua',
                defaultSyntax: `print(${defaultPrintStatement})`,
            },
            'perl6': {
                language: 'Perl 6',
                defaultSyntax: `say ${defaultPrintStatement};`,
            },
            'haskell': {
                language: 'Haskell',
                defaultSyntax: `putStrLn ${defaultPrintStatement})`,
            },
            'racket': {
                language: 'Racket',
                defaultSyntax: `(displayln (format ${defaultPrintStatement}))`,
            },
            'elixir': {
                language: 'Elixir',
                defaultSyntax: `IO.puts(${defaultPrintStatement})`,
            },
            'julia': {
                language: 'Julia',
                defaultSyntax: `println(${defaultPrintStatement})`,
            },
            'groovy': {
                language: 'Groovy',
                defaultSyntax: `println(${defaultPrintStatement})`,
            },
            'cobol': {
                language: 'COBOL',
                defaultSyntax: `DISPLAY ${defaultPrintStatement}"`,
            },
            'fortran': {
                language: 'Fortran',
                defaultSyntax: `WRITE(*,*) ${defaultPrintStatement}"`,
            },
            'vhdl': {
                language: 'VHDL',
                defaultSyntax: `report ${defaultPrintStatement})`,
            },
            'verilog': {
                language: 'Verilog',
                defaultSyntax: `$display(${defaultPrintStatement})`,
            },
            'pascal': {
                language: 'Pascal',
                defaultSyntax: `WriteLn(${defaultPrintStatement});`,
            },
            'ada': {
                language: 'Ada',
                defaultSyntax: `Put_Line(${defaultPrintStatement});`,
            },
            'sql': {
                language: 'SQL',
                defaultSyntax: `PRINT ${defaultPrintStatement};`,
            },
            'lisp': {
                language: 'Lisp',
                defaultSyntax: `(format t ${defaultPrintStatement})`,
            },
            'scheme': {
                language: 'Scheme',
                defaultSyntax: `(display (format ${defaultPrintStatement}))`,
            },
            'powershell': {
                language: 'PowerShell',
                defaultSyntax: `Write-Host ${defaultPrintStatement})`,
            }
    };

    try {
        return language[fileExtension].defaultSyntax;
    } catch (error) {
        console.log(error);
    }

};