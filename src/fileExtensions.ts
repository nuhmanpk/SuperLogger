import { getRandomEmoji, getRandomJoke } from './utlis';

export const fileExtensions=(filePath : string , fileExtension : string,selectedText : string)=> {
    const language : any = 
        {
            'js': {
            language: 'JavaScript',
            defaultSyntax: `console.log("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'ts': {
                language: 'TypeScript',
                defaultSyntax: `console.log("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'tsx': {
                language: 'TypeScript',
                defaultSyntax: `console.log("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'jsx': {
                language: 'TypeScript',
                defaultSyntax: `console.log("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'vue': {
                language: 'TypeScript',
                defaultSyntax: `console.log("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'svelte': {
                language: 'TypeScript',
                defaultSyntax: `console.log("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'py': {
                language: 'Python',
                defaultSyntax: `print("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'java': {
                language: 'Java',
                defaultSyntax: `System.out.println("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}" + (${selectedText ? selectedText : `"${getRandomJoke()}"`}));`,
            },
            'c': {
                language: 'C',
                defaultSyntax: `printf("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}n");`,
            },
            'cpp': {
                language: 'C++',
                defaultSyntax: `std::cout << "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}" << (${selectedText ? selectedText : `"${getRandomJoke()}"`}) << std::endl;`,
            },
            'csharp': {
                language: 'C#',
                defaultSyntax: `Console.WriteLine("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}: " + (${selectedText ? selectedText : `"${getRandomJoke()}"`}));`,
            },
            'ruby': {
                language: 'Ruby',
                defaultSyntax: `puts "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}" + (${selectedText ? selectedText : `"${getRandomJoke()}"`});`,
            },
            'php': {
                language: 'PHP',
                defaultSyntax: `echo "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}" . (${selectedText ? selectedText : `"${getRandomJoke()}"`});`,
            },
            'go': {
                language: 'Go',
                defaultSyntax: `fmt.Println("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'swift': {
                language: 'Swift',
                defaultSyntax: `print("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'kotlin': {
                language: 'Kotlin',
                defaultSyntax: `println("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'rust': {
                language: 'Rust',
                defaultSyntax: `println!("{} ~ ${filePath} ~ ${selectedText}: {}", "${getRandomEmoji()}", ${selectedText ? selectedText : `"${getRandomJoke()}"`});`,
            },
            'perl': {
                language: 'Perl',
                defaultSyntax: `print "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}" . (${selectedText ? selectedText : `"${getRandomJoke()}"`});`,
            },
            'r': {
                language: 'R',
                defaultSyntax: `cat("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'dart': {
                language: 'Dart',
                defaultSyntax: `print("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText}", ${selectedText ? selectedText : `"${getRandomJoke()}"`});`,
            },
            'scala': {
                language: 'Scala',
                defaultSyntax: `println("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`});`,
            },
            'lua': {
                language: 'Lua',
                defaultSyntax: `print("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'perl6': {
                language: 'Perl 6',
                defaultSyntax: `say "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`};`,
            },
            'haskell': {
                language: 'Haskell',
                defaultSyntax: `putStrLn "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'racket': {
                language: 'Racket',
                defaultSyntax: `(displayln (format "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})))`,
            },
            'elixir': {
                language: 'Elixir',
                defaultSyntax: `IO.puts("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'julia': {
                language: 'Julia',
                defaultSyntax: `println("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'groovy': {
                language: 'Groovy',
                defaultSyntax: `println("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'cobol': {
                language: 'COBOL',
                defaultSyntax: `DISPLAY "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`}"`,
            },
            'fortran': {
                language: 'Fortran',
                defaultSyntax: `WRITE(*,*) "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`}"`,
            },
            'vhdl': {
                language: 'VHDL',
                defaultSyntax: `report "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'verilog': {
                language: 'Verilog',
                defaultSyntax: `$display("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            },
            'pascal': {
                language: 'Pascal',
                defaultSyntax: `WriteLn("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`});`,
            },
            'ada': {
                language: 'Ada',
                defaultSyntax: `Put_Line("${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`}));`,
            },
            'sql': {
                language: 'SQL',
                defaultSyntax: `PRINT "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`}));`,
            },
            'lisp': {
                language: 'Lisp',
                defaultSyntax: `(format t "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})))`,
            },
            'scheme': {
                language: 'Scheme',
                defaultSyntax: `(display (format "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})))`,
            },
            'powershell': {
                language: 'PowerShell',
                defaultSyntax: `Write-Host "${getRandomEmoji()} ~ ${filePath} ~ ${selectedText ? selectedText : `"${getRandomJoke()}"`})`,
            }
    };

    return language[fileExtension].defaultSyntax;

};

