---
sidebar_position: 2
---

# Installation

## Prerequisites

To build Minilux from source, you need the Rust toolchain (cargo + rustc).

### Install Rust on Debian/Ubuntu

```bash
sudo apt install cargo
```

### Install Rust on Other Systems

Use rustup for the latest version:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Building from Source

Clone the repository:

```bash
git clone https://github.com/minilux-org/minilux.git
cd minilux
```

Build the project:

```bash
make
```

Or use Cargo directly:

```bash
cargo build --release
```

The compiled binary will be at `./target/release/minilux`.

## System Installation

To install Minilux system-wide (to `/usr/bin`):

```bash
make install
```

This allows you to:
- Run `minilux` from anywhere
- Use shebang (`#!/usr/bin/minilux`) in scripts

## Running Scripts

### Direct Execution

```bash
./minilux script.mi
```

Or if installed:

```bash
minilux script.mi
```

### With Shebang

Add this line at the top of your script:

```minilux
#!/usr/bin/minilux

$name = "World"
printf("Hello, ", $name, "!\n")
```

Make it executable and run:

```bash
chmod +x script.mi
./script.mi
```

## REPL Mode

Run minilux without arguments to enter the interactive REPL:

```bash
$ minilux
Minilux Interpreter Console (REPL)
Version 0.1.0 on linux/x86_64 -- [Rust]

> $x = 10
> printf("x = ", $x, "\n")
x = 10
> 
```

## VS Code Extension

For syntax highlighting in Visual Studio Code:

```bash
cd vscode-minilux
npm install -g @vscode/vsce
vsce package
code --install-extension minilux-0.1.0.vsix
```

Or manually install from the Extensions panel.
