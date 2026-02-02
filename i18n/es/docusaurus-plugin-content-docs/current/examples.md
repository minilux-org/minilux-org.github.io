---
sidebar_position: 3
---

# Ejemplos

## Hola Mundo

```minilux
#!/usr/bin/env minilux
printf("¡Hola, Mundo!")
```

## Variables y Matemáticas
```minilux
# Aritmética básica
$a = 10
$b = 20
$suma = $a + $b
$producto = $a * $b

printf("Suma: ", $suma)
printf("Producto: ", $producto)
```

## Calculadora de Factorial

```minilux
#!/usr/bin/env minilux
# Calcular el factorial de un número

$n = 5
$resultado = 1
$original = $n

while ($n > 0) {
    $resultado = $resultado * $n
    dec $n - 1
}

printf("El factorial de ", $original, " es ", $resultado)
```

## Temporizador de Cuenta Regresiva

```minilux
#!/usr/bin/env minilux
# Cuenta atrás de 10 a 1

$cuenta = 10
while ($cuenta > 0) {
    printf($cuenta, " ...")
    sleep(1)
    dec $cuenta - 1
}
printf("¡Despegue!")
```

## Manipulación de Arrays

```minilux
#!/usr/bin/env minilux 
# Trabajando con arrays

$frutas = ["manzana", "platano", "naranja"]

printf("Frutas iniciales:")
$i = 0
while ($i < len($frutas)) {
    printf($i, ": ", $frutas[$i])
    inc $i + 1
}

# Añadir una fruta
push $frutas, "uva"
printf("Después de añadir uva: ", len($frutas), " frutas")

# Eliminar la primera fruta
shift $frutas
printf("Después de eliminar la primera: ", len($frutas), " frutas")

# Imprimir la lista final
printf("Frutas finales:")
$i = 0
while ($i < len($frutas)) {
    printf($i, ": ", $frutas[$i])
    inc $i + 1
}
```

## FizzBuzz

```minilux
#!/usr/bin/env minilux
# FizzBuzz del 1 al 20

$i = 1
while ($i <= 20) {
    $mod3 = $i % 3
    $mod5 = $i % 5
    
    if ((($mod3 == 0) AND ($mod5 == 0))) {
        printf("FizzBuzz")
    } elseif ($mod3 == 0) {
        printf("Fizz")
    } elseif ($mod5 == 0) {
        printf("Buzz")
    } else {
        printf($i)
    }
    
    inc $i + 1
}
```

## Encontrar el Valor Máximo

```minilux
#!/usr/bin/env minilux
# Encontrar el valor máximo en un array

$numeros = [23, 45, 12, 67, 34, 89, 15]
$max = $numeros[0]
$i = 1

while ($i < len($numeros)) {
    if ($numeros[$i] > $max) {
        $max = $numeros[$i]
    }
    inc $i + 1
}

printf("Valor máximo: ", $max)
```

## Ejecutar programas del sistema

```minilux
#!/usr/bin/env minilux
# Ejecutar comandos del sistema

printf("=== Información del Sistema ===")

$usuario = shell("whoami")
$hostname = shell("hostname")
$os = shell("uname -s")
$fecha = shell("date")

printf("Usuario: ", $usuario)
printf("Hostname: ", $hostname)
printf("SO: ", $os)
printf("Fecha: ", $fecha)
```

## Funciones Definidas por el Usuario

```minilux
#!/usr/bin/env minilux
# Definir y usar funciones personalizadas

func saludar {
    printf("¡Hola desde una función personalizada!")
}

func calcular {
    $x = 10
    $y = 20
    $resultado = $x + $y
    printf("Resultado del cálculo: ", $resultado)
}

# Llamar a las funciones
saludar
calcular
```

## Barra de Progreso

```minilux
#!/usr/bin/env minilux
# Simular una barra de progreso

printf("Cargando")
$i = 0
while ($i < 10) {
    printf(".")
    sleep(1)
    inc $i + 1
}
printf(" ¡Completado!")
```

## Incluir Otros Scripts

Crea un archivo de librería `lib.mi`:

```minilux
# lib.mi - Funciones de ayuda

func decirHola {
    printf("¡Hola desde la librería!")
}

func imprimirSeparador {
    printf("==================")
}
```

Script principal `main.mi`:

```minilux
#!/usr/bin/env minilux
# main.mi - Utiliza la librería

include "lib.mi"

imprimirSeparador
decirHola
imprimirSeparador
```

## Ejemplo de Socket TCP

```minilux
#!/usr/bin/env minilux
# Solicitud HTTP simple

sockopen("web", "example.com", 80)
sockwrite("web", "GET / HTTP/1.0\r\nHost: example.com\r\n\r\n")
sockread("web", $respuesta)
sockclose("web")

printf("Respuesta: ", $respuesta)
```

## Suma de Números

```minilux
#!/usr/bin/env minilux
# Calcular la suma de números del 1 al N

$n = 100
$i = 1
$suma = 0

while ($i <= $n) {
    $suma = $suma + $i
    inc $i + 1
}

printf("Suma de 1 a ", $n, ": ", $suma)
```
