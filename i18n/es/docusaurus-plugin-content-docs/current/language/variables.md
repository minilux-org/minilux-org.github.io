---
sidebar_position: 1
---

# Variables

Las variables en Minilux comienzan con el signo `$` y pueden contener enteros, cadenas (strings) o arrays. El lenguaje utiliza tipado dinámico, por lo que las variables pueden cambiar de tipo en tiempo de ejecución.

## Declaración y Asignación de Variables

Las variables se declaran simplemente asignándoles un valor:

```minilux
$nombre = "Alexia"
$edad = 42
$pi = 3
$estaActivo = 1
```

## Tipos de Datos

### Enteros

Minilux soporta valores enteros:

```minilux
$cuenta = 100
$negativo = -50
$cero = 0
```

### Cadenas (Strings)

Las cadenas se encierran entre comillas dobles `"` o comillas simples `'`:

```minilux
$saludo = "¡Hola, Mundo!"
$nombre = 'Alexia'
$mensaje = "Línea 1\nLínea 2\tTabulado"
```

### Interpolación de Cadenas

Minilux admite la interpolación de variables dentro de cadenas entre comillas dobles:

```minilux
$nombre = "Alexia"
$edad = 42
printf("Mi nombre es ", $nombre, " y tengo ", $edad, " años.")
```

### Secuencias de Escape

Secuencias de escape soportadas:
- `\n` - nueva línea
- `\t` - tabulador
- `\\` - barra invertida
- `\"` - comilla doble
- `\'` - comilla simple

### Arrays

Los arrays pueden contener múltiples valores de cualquier tipo:

```minilux
$numeros = [1, 2, 3, 4, 5]
$mezclado = [1, "hola", 42]
$vacio = []
```

## Indexación de Cadenas

Accede a caracteres individuales en una cadena usando la sintaxis similar a un array:

```minilux
$texto = "Hola"
printf("Primer carácter: ", $texto[0])   # imprime "H"
printf("Tercer carácter: ", $texto[2])   # imprime "l"
```

## Indexación de Arrays

Accede a los elementos del array por índice (empezando por 0):

```minilux
$frutas = ["manzana", "platano", "naranja"]
printf("Primera fruta: ", $frutas[0])     # imprime "manzana"
printf("Segunda fruta: ", $frutas[1])    # imprime "platano"

# Asignar a elementos de un array
$frutas[0] = "mango"
printf("Nueva primera fruta: ", $frutas[0]) # imprime "mango"
```

## Reasignación de Variables

A las variables se les puede reasignar diferentes tipos:

```minilux
$x = 10
printf("x es: ", $x)  # imprime "x es: 10"

$x = "ahora una cadena"
printf("x es: ", $x)  # imprime "x es: ahora una cadena"

$x = [1, 2, 3]
printf("x ahora es un array con ", len($x), " elementos")
```

## Reglas de Nomenclatura

Nombres de variables:
- Deben empezar con `$`
- Pueden contener letras, números y guiones bajos `_`
- Permite Mayúsculas y minúsculas (son case-sensitive)

Nombres de variables válidos:
```minilux
$miVar
$mi_var
$miVar123
$_privada
$VALOR_CONSTANTE
```

## Ámbito (Scope)

Todas las variables en Minilux comparten actualmente un ámbito global. Las variables declaradas dentro de funciones o estructuras de control son accesibles en cualquier parte del programa.

```minilux
if (1 == 1) {
    $x = 100
}

printf("x = ", $x)  # x es accesible aquí
```
