const languageOptions = [
    { label: "abap", value: "abap" },
    { label: "abnf", value: "abnf" },
    { label: "actionscript", value: "actionscript" },
    { label: "ada", value: "ada" },
    { label: "agda", value: "agda" },
    { label: "al", value: "al" },
    { label: "antlr4", value: "antlr4" },
    { label: "apacheconf", value: "apacheconf" },
    { label: "apex", value: "apex" },
    { label: "apl", value: "apl" },
    { label: "applescript", value: "applescript" },
    { label: "aql", value: "aql" },
    { label: "arduino", value: "arduino" },
    { label: "arff", value: "arff" },
    { label: "asciidoc", value: "asciidoc" },
    { label: "asm6502", value: "asm6502" },
    { label: "asmatmel", value: "asmatmel" },
    { label: "aspnet", value: "aspnet" },
    { label: "autohotkey", value: "autohotkey" },
    { label: "autoit", value: "autoit" },
    { label: "avisynth", value: "avisynth" },
    { label: "avro-idl", value: "avro-idl" },
    { label: "bash", value: "bash" },
    { label: "basic", value: "basic" },
    { label: "batch", value: "batch" },
    { label: "bbcode", value: "bbcode" },
    { label: "bicep", value: "bicep" },
    { label: "birb", value: "birb" },
    { label: "bison", value: "bison" },
    { label: "bnf", value: "bnf" },
    { label: "brainfuck", value: "brainfuck" },
    { label: "brightscript", value: "brightscript" },
    { label: "bro", value: "bro" },
    { label: "bsl", value: "bsl" },
    { label: "c", value: "c" },
    { label: "cfscript", value: "cfscript" },
    { label: "chaiscript", value: "chaiscript" },
    { label: "cil", value: "cil" },
    { label: "clike", value: "clike" },
    { label: "clojure", value: "clojure" },
    { label: "cmake", value: "cmake" },
    { label: "cobol", value: "cobol" },
    { label: "coffeescript", value: "coffeescript" },
    { label: "concurnas", value: "concurnas" },
    { label: "coq", value: "coq" },
    { label: "cpp", value: "cpp" },
    { label: "crystal", value: "crystal" },
    { label: "csharp", value: "csharp" },
    { label: "cshtml", value: "cshtml" },
    { label: "csp", value: "csp" },
    { label: "css-extras", value: "css-extras" },
    { label: "css", value: "css" },
    { label: "csv", value: "csv" },
    { label: "cypher", value: "cypher" },
    { label: "d", value: "d" },
    { label: "dart", value: "dart" },
    { label: "dataweave", value: "dataweave" },
    { label: "dax", value: "dax" },
    { label: "dhall", value: "dhall" },
    { label: "diff", value: "diff" },
    { label: "django", value: "django" },
    { label: "dns-zone-file", value: "dns-zone-file" },
    { label: "docker", value: "docker" },
    { label: "dot", value: "dot" },
    { label: "ebnf", value: "ebnf" },
    { label: "editorconfig", value: "editorconfig" },
    { label: "eiffel", value: "eiffel" },
    { label: "ejs", value: "ejs" },
    { label: "elixir", value: "elixir" },
    { label: "elm", value: "elm" },
    { label: "erb", value: "erb" },
    { label: "erlang", value: "erlang" },
    { label: "etlua", value: "etlua" },
    { label: "excel-formula", value: "excel-formula" },
    { label: "factor", value: "factor" },
    { label: "false", value: "false" },
    { label: "firestore-security-rules", value: "firestore-security-rules" },
    { label: "flow", value: "flow" },
    { label: "fortran", value: "fortran" },
    { label: "fsharp", value: "fsharp" },
    { label: "ftl", value: "ftl" },
    { label: "gap", value: "gap" },
    { label: "gcode", value: "gcode" },
    { label: "gdscript", value: "gdscript" },
    { label: "gedcom", value: "gedcom" },
    { label: "gherkin", value: "gherkin" },
    { label: "git", value: "git" },
    { label: "glsl", value: "glsl" },
    { label: "gml", value: "gml" },
    { label: "gn", value: "gn" },
    { label: "go-module", value: "go-module" },
    { label: "go", value: "go" },
    { label: "graphql", value: "graphql" },
    { label: "groovy", value: "groovy" },
    { label: "haml", value: "haml" },
    { label: "handlebars", value: "handlebars" },
    { label: "haskell", value: "haskell" },
    { label: "haxe", value: "haxe" },
    { label: "hcl", value: "hcl" },
    { label: "hlsl", value: "hlsl" },
    { label: "hoon", value: "hoon" },
    { label: "hpkp", value: "hpkp" },
    { label: "hsts", value: "hsts" },
    { label: "http", value: "http" },
    { label: "ichigojam", value: "ichigojam" },
    { label: "icon", value: "icon" },
    { label: "icu-message-format", value: "icu-message-format" },
    { label: "idris", value: "idris" },
    { label: "iecst", value: "iecst" },
    { label: "ignore", value: "ignore" },
    { label: "inform7", value: "inform7" },
    { label: "ini", value: "ini" },
    { label: "io", value: "io" },
    { label: "j", value: "j" },
    { label: "java", value: "java" },
    { label: "javadoc", value: "javadoc" },
    { label: "javadoclike", value: "javadoclike" },
    { label: "javascript", value: "javascript" },
    { label: "javastacktrace", value: "javastacktrace" },
    { label: "jexl", value: "jexl" },
    { label: "jolie", value: "jolie" },
    { label: "jq", value: "jq" },
    { label: "js-extras", value: "js-extras" },
    { label: "js-templates", value: "js-templates" },
    { label: "jsdoc", value: "jsdoc" },
    { label: "json", value: "json" },
    { label: "json5", value: "json5" },
    { label: "jsonp", value: "jsonp" },
    { label: "jsstacktrace", value: "jsstacktrace" },
    { label: "jsx", value: "jsx" },
    { label: "julia", value: "julia" },
    { label: "keepalived", value: "keepalived" },
    { label: "keyman", value: "keyman" },
    { label: "kotlin", value: "kotlin" },
    { label: "kumir", value: "kumir" },
    { label: "kusto", value: "kusto" },
    { label: "latex", value: "latex" },
    { label: "latte", value: "latte" },
    { label: "less", value: "less" },
    { label: "lilypond", value: "lilypond" },
    { label: "liquid", value: "liquid" },
    { label: "lisp", value: "lisp" },
    { label: "livescript", value: "livescript" },
    { label: "llvm", value: "llvm" },
    { label: "log", value: "log" },
    { label: "lolcode", value: "lolcode" },
    { label: "lua", value: "lua" },
    { label: "magma", value: "magma" },
    { label: "makefile", value: "makefile" },
    { label: "markdown", value: "markdown" },
    { label: "markup-templating", value: "markup-templating" },
    { label: "markup", value: "markup" },
    { label: "matlab", value: "matlab" },
    { label: "maxscript", value: "maxscript" },
    { label: "mel", value: "mel" },
    { label: "mermaid", value: "mermaid" },
    { label: "mizar", value: "mizar" },
    { label: "mongodb", value: "mongodb" },
    { label: "monkey", value: "monkey" },
    { label: "moonscript", value: "moonscript" },
    { label: "n1ql", value: "n1ql" },
    { label: "n4js", value: "n4js" },
    { label: "nand2tetris-hdl", value: "nand2tetris-hdl" },
    { label: "naniscript", value: "naniscript" },
    { label: "nasm", value: "nasm" },
    { label: "neon", value: "neon" },
    { label: "nevod", value: "nevod" },
    { label: "nginx", value: "nginx" },
    { label: "nim", value: "nim" },
    { label: "nix", value: "nix" },
    { label: "nsis", value: "nsis" },
    { label: "objectivec", value: "objectivec" },
    { label: "ocaml", value: "ocaml" },
    { label: "opencl", value: "opencl" },
    { label: "openqasm", value: "openqasm" },
    { label: "oz", value: "oz" },
    { label: "parigp", value: "parigp" },
    { label: "parser", value: "parser" },
    { label: "pascal", value: "pascal" },
    { label: "pascaligo", value: "pascaligo" },
    { label: "pcaxis", value: "pcaxis" },
    { label: "peoplecode", value: "peoplecode" },
    { label: "perl", value: "perl" },
    { label: "php-extras", value: "php-extras" },
    { label: "php", value: "php" },
    { label: "phpdoc", value: "phpdoc" },
    { label: "plsql", value: "plsql" },
    { label: "powerquery", value: "powerquery" },
    { label: "powershell", value: "powershell" },
    { label: "processing", value: "processing" },
    { label: "prolog", value: "prolog" },
    { label: "promql", value: "promql" },
    { label: "properties", value: "properties" },
    { label: "protobuf", value: "protobuf" },
    { label: "psl", value: "psl" },
    { label: "pug", value: "pug" },
    { label: "puppet", value: "puppet" },
    { label: "pure", value: "pure" },
    { label: "purebasic", value: "purebasic" },
    { label: "purescript", value: "purescript" },
    { label: "python", value: "python" },
    { label: "q", value: "q" },
    { label: "qml", value: "qml" },
    { label: "qore", value: "qore" },
    { label: "qsharp", value: "qsharp" },
    { label: "r", value: "r" },
    { label: "racket", value: "racket" },
    { label: "reason", value: "reason" },
    { label: "regex", value: "regex" },
    { label: "rego", value: "rego" },
    { label: "renpy", value: "renpy" },
    { label: "rest", value: "rest" },
    { label: "rip", value: "rip" },
    { label: "roboconf", value: "roboconf" },
    { label: "robotframework", value: "robotframework" },
    { label: "ruby", value: "ruby" },
    { label: "rust", value: "rust" },
    { label: "sas", value: "sas" },
    { label: "sass", value: "sass" },
    { label: "scala", value: "scala" },
    { label: "scheme", value: "scheme" },
    { label: "scss", value: "scss" },
    { label: "shell-session", value: "shell-session" },
    { label: "smali", value: "smali" },
    { label: "smalltalk", value: "smalltalk" },
    { label: "smarty", value: "smarty" },
    { label: "sml", value: "sml" },
    { label: "solidity", value: "solidity" },
    { label: "solution-file", value: "solution-file" },
    { label: "soy", value: "soy" },
    { label: "sparql", value: "sparql" },
    { label: "splunk-spl", value: "splunk-spl" },
    { label: "sqf", value: "sqf" },
    { label: "sql", value: "sql" },
    { label: "squirrel", value: "squirrel" },
    { label: "stan", value: "stan" },
    { label: "stylus", value: "stylus" },
    { label: "swift", value: "swift" },
    { label: "systemd", value: "systemd" },
    { label: "t4-cs", value: "t4-cs" },
    { label: "t4-templating", value: "t4-templating" },
    { label: "t4-vb", value: "t4-vb" },
    { label: "tap", value: "tap" },
    { label: "tcl", value: "tcl" },
    { label: "textile", value: "textile" },
    { label: "toml", value: "toml" },
    { label: "tremor", value: "tremor" },
    { label: "tsx", value: "tsx" },
    { label: "tt2", value: "tt2" },
    { label: "turtle", value: "turtle" },
    { label: "twig", value: "twig" },
    { label: "typescript", value: "typescript" },
    { label: "typoscript", value: "typoscript" },
    { label: "unrealscript", value: "unrealscript" },
    { label: "uorazor", value: "uorazor" },
    { label: "uri", value: "uri" },
    { label: "v", value: "v" },
    { label: "vala", value: "vala" },
    { label: "vbnet", value: "vbnet" },
    { label: "velocity", value: "velocity" },
    { label: "verilog", value: "verilog" },
    { label: "vhdl", value: "vhdl" },
    { label: "vim", value: "vim" },
    { label: "visual-basic", value: "visual-basic" },
    { label: "warpscript", value: "warpscript" },
    { label: "wasm", value: "wasm" },
    { label: "web-idl", value: "web-idl" },
    { label: "wiki", value: "wiki" },
    { label: "wolfram", value: "wolfram" },
    { label: "wren", value: "wren" },
    { label: "xeora", value: "xeora" },
    { label: "xml-doc", value: "xml-doc" },
    { label: "xojo", value: "xojo" },
    { label: "xquery", value: "xquery" },
    { label: "yaml", value: "yaml" },
    { label: "yang", value: "yang" },
    { label: "zig", value: "zig" },
  ];
  
  export default languageOptions;
  