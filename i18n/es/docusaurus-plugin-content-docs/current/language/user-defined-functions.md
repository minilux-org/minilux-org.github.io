---
sidebar_position: 5
---

# Funciones Definidas por el Usuario

Minilux te permite definir tus propias funciones reutilizables utilizando la palabra clave `func`.

## Definir una Función

Las funciones se definen con un nombre seguido de un bloque de código entre llaves `{}`.

### Sintaxis

```minilux
func nombre_de_la_funcion {
    # código a ejecutar
}
```

### Ejemplos

```minilux
# Una función de saludo simple
func saludar {
    printf("¡Hola desde una función personalizada!\n")
}

# Una función que usa variables globales
$version_app = "0.1.0"
func mostrar_version {
    printf("Versión de Minilux: $version_app\n")
}
```

## Llamar a una Función

Para ejecutar una función, simplemente usa su nombre como una sentencia. Ten en cuenta que actualmente, las funciones definidas por el usuario en Minilux no toman argumentos ni devuelven valores de la manera tradicional; operan utilizando el alcance global.

### Ejemplos

```minilux
saludar
mostrar_version
```

## Alcance (Scope)

Las funciones en Minilux tienen acceso a todas las variables globales. Las variables definidas o modificadas dentro de una función afectan al estado global.

```minilux
$contador = 0

func incrementar_global {
    inc $contador + 1
}

incrementar_global
printf("El contador ahora es: $contador\n") # imprime 1
```

## Código Modular

Puedes combinar funciones con la sentencia `include` para organizar tu código en múltiples archivos.
