---
sidebar_position: 2
---

# Installation

To build Minilux from source, you need the **Rust toolchain** (cargo + rustc).

### Install Rust on Debian/GoldenDog/Ubuntu

```bash
sudo apt install cargo
```

### Fedora

```bash
sudo dnf install rust cargo
```

### macOS (via homebrew)

```bash
brew install rust
```

### Other Systems

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

### Build

```bash
make
```

### Install

To install Minilux system-wide (to `/usr/bin`):

```bash
make install # requires sudo, but do not use sudo make install, instead change the permissions of the binary in target/
```

**Note for macOS users:** You may need to edit the `Makefile` and change the installation path to `/usr/local/bin` if `/usr/bin` is protected.

### Rebuild

To completely rebuild, remove the target directory and clean build artifacts:

```bash
rm -rf target/
make uninstall; make clean; make
```

### Uninstall

```bash
sudo make uninstall
```

## Running Scripts

### Direct Execution

```bash
./minilux script.mi
```

### With Shebang

Add this line at the top of your script:

```minilux
#!/usr/bin/minilux

$name = "World"
printf("Hello ", $name)
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
> printf("x = ", $x)
x = 10
> 
```

## VS Code Extension

For syntax highlighting and snippets:
- [Minilux for VS Code](https://marketplace.visualstudio.com/items?itemName=minilux.minilux)
- [Minilux for Antigravity (Open VSX)](https://open-vsx.org/extension/minilux/minilux)
