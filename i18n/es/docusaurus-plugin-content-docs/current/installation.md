---
sidebar_position: 2
---

# Instalación

Para compilar Minilux desde el código fuente, necesitas el **toolchain de Rust** (cargo + rustc).

### Instalar Rust en Debian/GoldenDog/Ubuntu

```bash
sudo apt install cargo
```

### Fedora

```bash
sudo dnf install rust cargo
```

### macOS (vía homebrew)

```bash
brew install rust
```

### Otros Sistemas

Usa rustup para obtener la versión más reciente:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Compilación desde el Código Fuente

Clona el repositorio:

```bash
git clone https://github.com/minilux-org/minilux.git
cd minilux
```

### Compilar

```bash
make
```

### Instalar

Por defecto, minilux se instala en /usr/bin/ (Linux) 

```bash
make install #requiere sudo, pero no usar sudo make install, sino le cambia los permisos al binario en target/
```

**Nota para usuarios de macOS:** Es posible que necesites editar el `Makefile` y cambiar la ruta de instalación a `/usr/local/bin` si `/usr/bin` está protegido por el sistema.

### Recompilar

Para recompilar completamente, elimina el directorio target y limpia los artefactos de construcción:

```bash
rm -rf target/
make uninstall; make clean; make
```

### Desinstalar

```bash
sudo make uninstall
```

## Ejecución de Scripts

### Ejecución Directa

```bash
./minilux script.mi
```

### Con Shebang

Añade esta línea en la parte superior de tu script:

```minilux
#!/usr/bin/minilux

$nombre = "Mundo"
printf("¡Hola ", $nombre, "!")
```

Hazlo ejecutable y ejecútalo:

```bash
chmod +x script.mi
./script.mi
```

## Modo REPL

Ejecuta minilux sin argumentos para entrar en la consola interactiva (REPL):

```bash
$ minilux
Minilux Interpreter Console (REPL)
Version 0.1.0 on linux/x86_64 -- [Rust]

> $x = 10
> printf("x = ", $x)
x = 10
> 
```

## Extensión para VS Code

Para resaltado de sintaxis y snippets:
- [Minilux para VS Code](https://marketplace.visualstudio.com/items?itemName=minilux.minilux)
- [Minilux para Antigravity (Open VSX)](https://open-vsx.org/extension/minilux/minilux)
