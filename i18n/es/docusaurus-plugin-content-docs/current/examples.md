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

printf("Suma: $suma\n")
printf("Producto: $producto\n")
```

## Calculadora de Factorial

```minilux
#!/usr/bin/minilux
# Calcular el factorial de un número

$n = 5
$resultado = 1
$original = $n

while ($n > 0) {
    $resultado = $resultado * $n
    dec $n - 1
}

printf("El factorial de $original es $resultado\n")
```

## Temporizador de Cuenta Atrás

```minilux
#!/usr/bin/minilux
# Cuenta atrás de 10 a 1

$cuenta = 10
while ($cuenta > 0) {
    printf("$cuenta...\n")
    sleep(1)
    dec $cuenta - 1
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
    printf("  $i: $frutas[$i]\n")
    inc $i + 1
}

# Añadir una fruta
push $frutas, "uva"
printf("\nDespués de añadir uva: ", len($frutas), " frutas\n")

# Eliminar la primera fruta
shift $frutas
printf("Después de eliminar la primera: ", len($frutas), " frutas\n")

# Imprimir la lista final
printf("\nFrutas finales:\n")
$i = 0
while ($i < len($frutas)) {
    printf("  $frutas[$i]\n")
    inc $i + 1
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
        printf("$i\n")
    }
    
    inc $i + 1
}
```

## Encontrar el Valor Máximo

```minilux
#!/usr/bin/minilux
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

printf("Valor máximo: $max\n")
```

## Integración con Shell

```minilux
#!/usr/bin/minilux
# Ejecutar comandos del sistema

printf("=== Información del Sistema ===")

$usuario = shell("whoami")
$hostname = shell("hostname")
$os = shell("uname -s")
$fecha = shell("date")

printf("Usuario: $usuario")
printf("Hostname: $hostname")
printf("SO: $os")
printf("Fecha: $fecha")
```

## Funciones Definidas por el Usuario

```minilux
#!/usr/bin/minilux
# Definir y usar funciones personalizadas

func saludar {
    printf("¡Hola desde una función personalizada!")
}

func calcular {
    $x = 10
    $y = 20
    $resultado = $x + $y
    printf("Resultado del cálculo: $resultado")
}

# Llamar a las funciones
saludar
calcular
```

## Barra de Progreso

```minilux
#!/usr/bin/minilux
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
#!/usr/bin/minilux
# main.mi - Utiliza la librería

include "lib.mi"

imprimirSeparador
decirHola
imprimirSeparador
```

## Ejemplo de Socket TCP

```minilux
#!/usr/bin/minilux
# Solicitud HTTP simple

sockopen("web", "example.com", 80)
sockwrite("web", "GET / HTTP/1.0\r\nHost: example.com\r\n\r\n")
sockread("web", $respuesta)
sockclose("web")

printf("Respuesta:\n",$respuesta)
```

## Suma de Números

```minilux
#!/usr/bin/minilux
# Calcular la suma de números del 1 al N

$n = 100
$i = 1
$suma = 0

while ($i <= $n) {
    $suma = $suma + $i
    inc $i + 1
}

printf("Suma de 1 a $n: $suma")
```
