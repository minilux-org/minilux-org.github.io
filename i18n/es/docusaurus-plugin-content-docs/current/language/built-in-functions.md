---
sidebar_position: 4
---

# Funciones Incorporadas

Minilux proporciona varias funciones incorporadas para operaciones comunes.

## printf() / print()

Imprime texto y variables en la salida estándar.

### Sintaxis

```minilux
printf(arg1, arg2, arg3, ...)
print(arg1, arg2, arg3, ...)
```

### Descripción

`printf()` concatena todos los argumentos y los imprime. `print()` es un alias idéntico. Ambas funciones añaden automáticamente un salto de línea al final si falta uno.

Las cadenas también admiten **interpolación de variables**:
```minilux
$nombre = "Alexia"
printf("Hola, $nombre!")
```

### Secuencias de Escape

Secuencias de escape soportadas en cadenas:
- `\n` - Nueva línea
- `\t` - Tabulador

### Ejemplos

```minilux
# Imprimir texto simple
printf("¡Hola, Mundo!")

# Imprimir variables por interpolación
$nombre = "Alexia"
printf("Hola, $nombre!")

# Mezclar múltiples valores como argumentos
$a = 10
$b = 20
printf("La suma de ", $a, " y ", $b, " es ", $a + $b)
```

## read()

Lee una línea de la entrada estándar y la almacena en una variable.

### Sintaxis

```minilux
read($variable)
```

### Ejemplos

```minilux
printf("¿Cuál es tu nombre? ")
read($nombre)
printf("Hola ", $nombre, "!")
```

## len()

Obtiene la longitud de un array o cadena.
** Nota: ** También se puede utilizar la funcion strlen()

### Sintaxis

```minilux
len($variable)
```

### Ejemplos

```minilux
# Longitud de un array
$numeros = [1, 2, 3, 4, 5]
printf("El array tiene ", len($numeros), " elementos")

# Longitud de una cadena
$texto = "Hola"
printf("La cadena tiene ", len($texto), " caracteres")
```

## number()

Convierte una cadena (o un entero existente) en un valor numérico para aritmética.

### Sintaxis

```minilux
number(expresion)
```

### Ejemplos

```minilux
read($entrada)
$valor = number($entrada)
printf("El doble es ", $valor * 2)
```
**Nota:** Si la entrada no se puede procesar como un número, devuelve `0`.

## lower() / upper()

Normaliza el uso de mayúsculas/minúsculas en cadenas.

### Sintaxis

```minilux
lower(cadena)
upper(cadena)
```

### Ejemplos

```minilux
$respuesta = "Sí"
if (lower($respuesta) == "sí") {
    printf("Confirmado")
}

printf("Gritando: ", upper("minilux"))
```

## shell()

Ejecuta un comando del sistema y devuelve su salida.

### Sintaxis

```minilux
$salida = shell("comando")
```

### Descripción

Devuelve la salida estándar con el salto de línea final eliminado.

### Ejemplos

```minilux
$usuario = shell("whoami")
$fecha = shell("date +%Y-%m-%d")
printf("Usuario: ", $usuario, "en", $fecha)
```

## inc / dec

Incrementa o decrementa una variable. Ten en cuenta que estas son **sentencias** y no utilizan paréntesis.

### Sintaxis

```minilux
inc $variable + cantidad
dec $variable - cantidad
```

### Ejemplos

```minilux
$contador = 0
inc $contador + 1   # contador es 1
inc $contador + 5   # contador es 6
dec $contador - 2   # contador es 4
```

## Operaciones de Array

Estas operaciones modifican un array directamente. Se llaman como sentencias sin paréntesis.

- `push $array, valor` - Añade un elemento al final
- `pop $array` - Elimina el elemento del final
- `shift $array` - Elimina el elemento del principio
- `unshift $array, valor` - Añade un elemento al principio

### Ejemplos

```minilux
$lista = [1, 2, 3]
push $lista, 4        # [1, 2, 3, 4]
pop $lista            # [1, 2, 3]
shift $lista          # [2, 3]
unshift $lista, 0     # [0, 2, 3]
```

## sleep()

Pausa la ejecución durante un número específico de segundos.

### Sintaxis

```minilux
sleep(segundos)
```

### Ejemplos

```minilux
printf("Empezando...")
sleep(2)
printf("2 segundos después")
```

## sockopen() / sockwrite() / sockread() / sockclose()

Operaciones de sockets TCP para programación de red.

- `sockopen("nombre", "host", puerto)` - Abre una conexión
- `sockwrite("nombre", "datos")` - Envía datos
- `sockread("nombre", $var)` - Lee datos en una variable
- `sockclose("nombre")` - Cierra la conexión

### Ejemplo

```minilux
sockopen("web", "example.com", 80)
sockwrite("web", "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
sockread("web", $respuesta)
printf($respuesta)
sockclose("web")
```
