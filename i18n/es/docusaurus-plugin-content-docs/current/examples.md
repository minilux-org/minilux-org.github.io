---
sidebar_position: 3
---

# Ejemplos

## Hola Mundo

```minilux
#!/usr/bin/minilux
printf("¡Hola, Mundo!\n")
```

## Variables y Matemáticas

```minilux
# Aritmética básica
$a = 10
$b = 20
$suma = $a + $b
$producto = $a * $b

printf("Suma: ", $suma, "\n")
printf("Producto: ", $producto, "\n")
```

## Calculadora de Factorial

```minilux
#!/usr/bin/minilux
# Calcula el factorial de un número

$n = 5
$resultado = 1
$original = $n

while ($n > 0) {
    $resultado = $resultado * $n
    dec($n, 1)
}

printf("El factorial de ", $original, " es ", $resultado, "\n")
```

## Temporizador de Cuenta Regresiva

```minilux
#!/usr/bin/minilux
# Cuenta regresiva de 10 a 1

$cuenta = 10
while ($cuenta > 0) {
    printf($cuenta, "...\n")
    sleep(1)
    dec($cuenta, 1)
}
printf("¡Despegue!\n")
```

## Manipulación de Arrays

```minilux
#!/usr/bin/minilux
# Trabajando con arrays

$frutas = ["manzana", "platano", "naranja"]

printf("Frutas iniciales:\n")
$i = 0
while ($i < len($frutas)) {
    printf("  ", $i, ": ", $frutas[$i], "\n")
    inc($i, 1)
}

# Añadir una fruta
push($frutas, "uva")
printf("\nDespués de añadir uva: ", len($frutas), " frutas\n")

# Eliminar la primera fruta
shift($frutas)
printf("Después de eliminar la primera: ", len($frutas), " frutas\n")

# Imprimir lista final
printf("\nFrutas finales:\n")
$i = 0
while ($i < len($frutas)) {
    printf("  ", $frutas[$i], "\n")
    inc($i, 1)
}
```

## FizzBuzz

```minilux
#!/usr/bin/minilux
# FizzBuzz del 1 al 20

$i = 1
while ($i <= 20) {
    $mod3 = $i % 3
    $mod5 = $i % 5
    
    if ((($mod3 == 0) AND ($mod5 == 0))) {
        printf("FizzBuzz\n")
    } elseif ($mod3 == 0) {
        printf("Fizz\n")
    } elseif ($mod5 == 0) {
        printf("Buzz\n")
    } else {
        printf($i, "\n")
    }
    
    inc($i, 1)
}
```

## Encontrar el Valor Máximo

```minilux
#!/usr/bin/minilux
# Encuentra el valor máximo en un array

$numeros = [23, 45, 12, 67, 34, 89, 15]
$max = $numeros[0]
$i = 1

while ($i < len($numeros)) {
    if ($numeros[$i] > $max) {
        $max = $numeros[$i]
    }
    inc($i, 1)
}

printf("Valor máximo: ", $max, "\n")
```

## Integración con Shell

```minilux
#!/usr/bin/minilux
# Ejecuta comandos del sistema

printf("=== Información del Sistema ===\n")

$usuario = shell("whoami")
printf("Usuario: ", $usuario, "\n")

$nombre_host = shell("hostname")
printf("Nombre de host: ", $nombre_host, "\n")

$so = shell("uname -s")
printf("SO: ", $so, "\n")

$fecha = shell("date")
printf("Fecha: ", $fecha, "\n")
```

## Funciones Definidas por el Usuario

```minilux
#!/usr/bin/minilux
# Define y usa funciones personalizadas

func saludar {
    printf("¡Hola desde una función personalizada!\n")
}

func calcular {
    $x = 10
    $y = 20
    $resultado = $x + $y
    printf("Resultado del cálculo: ", $resultado, "\n")
}

# Llamar a las funciones
saludar()
calcular()
```

## Barra de Progreso

```minilux
#!/usr/bin/minilux
# Simula una barra de progreso

printf("Cargando")
$i = 0
while ($i < 10) {
    printf(".")
    sleep(1)
    inc($i, 1)
}
printf(" ¡Completado!\n")
```

## Lógica de Adivinar Números

```minilux
#!/usr/bin/minilux
# Comprobación de números (lógica de adivinanza simulada)

$secreto = 42
$intento = 35

if ($intento == $secreto) {
    printf("¡Correcto!\n")
} elseif ($intento < $secreto) {
    printf("¡Demasiado bajo!\n")
} else {
    printf("¡Demasiado alto!\n")
}
```

## Inclusión de Otros Scripts

Crea un archivo de biblioteca `lib.mi`:

```minilux
# lib.mi - Funciones de ayuda

func decirHola {
    printf("¡Hola desde la biblioteca!\n")
}

func imprimirSeparador {
    printf("==================\n")
}
```

Script principal `main.mi`:

```minilux
#!/usr/bin/minilux
# main.mi - Usa la biblioteca

include "lib.mi"

imprimirSeparador()
decirHola()
imprimirSeparador()
```

## Ejemplo de Sockets TCP

```minilux
#!/usr/bin/minilux
# Simple petición HTTP

sockopen($sock, "example.com", 80)
sockwrite($sock, "GET / HTTP/1.0\r\nHost: example.com\r\n\r\n")
sockread($sock, $respuesta)
sockclose($sock)

printf("Respuesta:\n", $respuesta, "\n")
```

## Suma de Números

```minilux
#!/usr/bin/minilux
# Calcula la suma de números del 1 al N

$n = 100
$i = 1
$suma = 0

while ($i <= $n) {
    $suma = $suma + $i
    inc($i, 1)
}

printf("Suma de 1 a ", $n, ": ", $suma, "\n")
```

## Operaciones con Cadenas

```minilux
#!/usr/bin/minilux
# Trabajando con cadenas (strings)

$texto = "Hola"

printf("Cadena: ", $texto, "\n")
printf("Longitud: ", len($texto), "\n")

# Imprimir cada carácter
$i = 0
while ($i < len($texto)) {
    printf("Carácter ", $i, ": ", $texto[$i], "\n")
    inc($i, 1)
}
```
