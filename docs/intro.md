---
sidebar_position: 1
---

# Welcome to Minilux

<div style={{textAlign: 'center'}}>
  <img src="/img/minilux-icon.png" alt="Minilux logo" width="200"/>
</div>

**Minilux** is a minimal programming language designed for simplicity. Written in Rust, it provides an easy-to-understand syntax perfect for educational purposes or everyday tasks.

## Features

- 🚀 **Simple Syntax** - Easy to learn, PHP-like variable syntax with `$`
- 📦 **Dynamic Typing** - Support for integers, strings, and arrays
- 🔄 **Control Flow** - if/elseif/else statements and while loops
- ⚡ **Built-in Functions** - printf, array manipulation, sockets, and more
- 🔌 **Shell Integration** - Execute system commands directly
- 🌐 **Network Support** - Built-in TCP socket operations
- 🛠️ **User-Defined Functions** - Create your own functions
- ⏱️ **Sleep Function** - Add delays to your scripts

## Quick Example

```minilux
# Simple greeting script
$name = "World"
printf("Hello, ", $name, "!\n")

# Calculate factorial
$n = 5
$result = 1

while ($n > 0) {
    $result = $result * $n
    dec($n, 1)
}

printf("Factorial of 5 is: ", $result, "\n")
```

## Why Minilux?

Minilux was created as a learning project to understand:
- Language design and implementation
- Lexical analysis and parsing
- Interpreter construction
- Rust programming

It's perfect for:
- 📚 Learning about programming language design
- 🎓 Teaching basic programming concepts
- ⚙️ Simple automation scripts
- 🧪 Experimental projects

## Next Steps

- [**Installation**](installation) - Get Minilux running on your system
- [**Language Reference**](language/variables) - Learn the complete language syntax
- [**Examples**](examples) - See Minilux in action

---

**Author**: Alexia Michelle &lt;alexia@goldendoglinux.org&gt;  
**License**: MIT  
**Repository**: [github.com/minilux-org/minilux](https://github.com/minilux-org/minilux)
