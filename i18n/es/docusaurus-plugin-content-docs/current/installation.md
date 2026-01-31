---
sidebar_position: 2
---

# Instalación

## Prerrequisitos

Para compilar Minilux desde el código fuente, necesitas el conjunto de herramientas de Rust (cargo + rustc).

### Instalar Rust en Debian/Ubuntu

```bash
sudo apt install cargo
```

### Instalar Rust en Otros Sistemas

Usa rustup para obtener la última versión:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Compilación desde el Código Fuente

Clona el repositorio:

```bash
git clone https://github.com/minilux-org/minilux.git
cd minilux
```

Compila el proyecto:

```bash
make
```

O usa Cargo directamente:

```bash
cargo build --release
```

El binario compilado estará en `./target/release/minilux`.

## Instalación en el Sistema

Para instalar Minilux en todo el sistema (en `/usr/bin`):

```bash
make install
```

Esto te permite:
- Ejecutar `minilux` desde cualquier lugar
- Usar shebang (`#!/usr/bin/minilux`) en tus scripts

## Ejecución de Scripts

### Ejecución Directa

```bash
./minilux script.mi
```

O si está instalado:

```bash
minilux script.mi
```

### Con Shebang

Añade esta línea al principio de tu script:

```minilux
#!/usr/bin/minilux

$nombre = "Mundo"
printf("Hola, ", $nombre, "!\n")
```

Hazlo ejecutable y ejecútalo:

```bash
chmod +x script.mi
./script.mi
```

## Modo REPL

Ejecuta minilux sin argumentos para entrar en el REPL interactivo:

```bash
$ minilux
Minilux Interpreter Console (REPL)
Version 0.1.0 on linux/x86_64 -- [Rust]

> $x = 10
> printf("x = ", $x, "\n")
x = 10
> 
```

## Extensión para VS Code

Para el resaltado de sintaxis en Visual Studio Code:

```bash
cd vscode-minilux
npm install -g @vscode/vsce
vsce package
code --install-extension minilux-0.1.0.vsix
```

O instálalo manualmente desde el panel de Extensiones.
