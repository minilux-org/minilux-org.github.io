---
sidebar_position: 1
---

# Bienvenido a Minilux

![minilux-icon](/img/minilux-icon.png)

**Minilux** es un lenguaje de programación mínimo diseñado para la simplicidad. Escrito en Rust, proporciona una sintaxis fácil de entender perfecta para propósitos educativos o tareas cotidianas.

## Características

- 🚀 **Sintaxis Simple** - Fácil de aprender, sintaxis de variables similar a PHP con `$`
- 📦 **Tipado Dinámico** - Soporte para enteros, cadenas y arrays
- 🔄 **Flujo de Control** - Sentencias if/elseif/else y bucles while
- ⚡ **Funciones Incorporadas** - printf, manipulación de arrays, sockets y más
- 🔌 **Integración con Shell** - Ejecuta comandos del sistema directamente
- 🌐 **Soporte de Red** - Operaciones de sockets TCP incorporadas
- 🛠️ **Funciones Definidas por el Usuario** - Crea tus propias funciones
- ⏱️ **Función Sleep** - Añade pausas a tus scripts

## Ejemplo Rápido

```minilux
#!/usr/bin/env minilux
# Script de saludo simple
$nombre = "Mundo"
printf("¡Hola ", $nombre)

# Calcular factorial
$n = 5
$resultado = 1

while ($n > 0) {
    $resultado = $resultado * $n
    dec $n - 1
}

printf("Factorial: ", $resultado)
```

## ¿Por qué Minilux?

Minilux fue creado como un proyecto de aprendizaje para entender:
- Diseño e implementación de lenguajes
- Análisis léxico y parsing
- Construcción de intérpretes
- Programación en Rust

Es perfecto para:
- 📚 Aprender sobre diseño de lenguajes de programación
- 🎓 Enseñar conceptos básicos de programación
- ⚙️ Scripts de automatización simples
- 🧪 Proyectos experimentales

## Próximos Pasos

- [**Instalación**](installation) - Ejecuta Minilux en tu sistema
- [**Referencia del Lenguaje**](language/variables) - Aprende la sintaxis completa
- [**Ejemplos**](examples) - Ve Minilux en acción

---

**Autora**: Alexia Michelle &lt;alexia@minilux.org&gt;  
**Licencia**: MPL 2.0  
**Repositorio**: [github.com/minilux-org/minilux](https://github.com/minilux-org/minilux)
