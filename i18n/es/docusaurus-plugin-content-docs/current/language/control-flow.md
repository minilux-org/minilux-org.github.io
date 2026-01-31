---
sidebar_position: 3
---

# Flujo de Control

Minilux proporciona sentencias condicionales y bucles para controlar el flujo del programa.

## if / elseif / else

### Sentencia if Básica

```minilux
if ($edad >= 18) {
    printf("Eres un adulto\n")
}
```

### if-else

```minilux
if ($puntuacion >= 60) {
    printf("¡Aprobado!\n")
} else {
    printf("Suspendido\n")
}
```

### if-elseif-else

```minilux
if ($puntuacion >= 90) {
    printf("Nota: A\n")
} elseif ($puntuacion >= 80) {
    printf("Nota: B\n")
} elseif ($puntuacion >= 70) {
    printf("Nota: C\n")
} elseif ($puntuacion >= 60) {
    printf("Nota: D\n")
} else {
    printf("Nota: F\n")
}
```

### Condiciones Compuestas

**Importante**: Al usar `AND` u `OR` en las condiciones, utiliza **dobles paréntesis**:

```minilux
# ✅ CORRECTO - Dobles paréntesis para condiciones compuestas
if (($edad >= 18) AND ($tieneID == 1)) {
    printf("Acceso concedido\n")
}

if (($esFinDeSemana == 1) OR ($esFestivo == 1)) {
    printf("¡Día libre!\n")
}

# ✅ CORRECTO - Las condiciones simples usan un solo paréntesis
if ($edad >= 18) {
    printf("Adulto\n")
}
```

### Sentencias if Anidadas

```minilux
if ($edad >= 18) {
    if ($tieneLicencia == 1) {
        printf("Puedes conducir\n")
    } else {
        printf("Necesitas una licencia\n")
    }
} else {
    printf("Demasiado joven para conducir\n")
}
```

## Bucle while

Ejecuta código repetidamente mientras una condición sea verdadera:

### Bucle Básico

```minilux
$i = 1
while ($i <= 5) {
    printf("Cuenta: ", $i, "\n")
    inc($i, 1)
}
```

Salida:
```
Cuenta: 1
Cuenta: 2
Cuenta: 3
Cuenta: 4
Cuenta: 5
```

### Bucle de Cuenta Regresiva

```minilux
$cuentaRegresiva = 10
while ($cuentaRegresiva > 0) {
    printf($cuentaRegresiva, "...\n")
    dec($cuentaRegresiva, 1)
}
printf("¡Despegue!\n")
```

### Bucle con Condición Compuesta

```minilux
$contador = 0
$max = 100

while (($contador < $max) AND ($contador < 10)) {
    printf("Contador: ", $contador, "\n")
    inc($contador, 1)
}
```

### Prevención de Bucles Infinitos

Asegúrate siempre de que la condición de tu bucle eventualmente se vuelva falsa:

```minilux
# ❌ ADVERTENCIA: ¡Bucle infinito!
$x = 1
while ($x > 0) {
    printf("¡Esto nunca se detendrá!\n")
    # Olvidé modificar $x
}

# ✅ CORRECTO: El bucle terminará
$x = 10
while ($x > 0) {
    printf("x = ", $x, "\n")
    dec($x, 1)  # Modifica la variable del bucle
}
```

## Ejemplos de Patrones

### Cálculo de Factorial

```minilux
$n = 5
$resultado = 1

while ($n > 0) {
    $resultado = $resultado * $n
    dec($n, 1)
}

printf("Factorial: ", $resultado, "\n")  # imprime 120
```

### Suma de Números

```minilux
$i = 1
$suma = 0

while ($i <= 10) {
    $suma = $suma + $i
    inc($i, 1)
}

printf("Suma del 1 al 10: ", $suma, "\n")  # imprime 55
```

### Iteración de Arrays

```minilux
$frutas = ["manzana", "platano", "naranja"]
$i = 0

while ($i < len($frutas)) {
    printf("Fruta ", $i, ": ", $frutas[$i], "\n")
    inc($i, 1)
}
```

### Encontrar el Máximo

```minilux
$numeros = [5, 12, 3, 99, 42, 7]
$max = $numeros[0]
$i = 1

while ($i < len($numeros)) {
    if ($numeros[$i] > $max) {
        $max = $numbers[$i]
    }
    inc($i, 1)
}

printf("Valor máximo: ", $max, "\n")  # imprime 99
```

## Mejores Prácticas de Flujo de Control

1. **Modifica siempre las variables del bucle** para evitar bucles infinitos.
2. **Usa dobles paréntesis** con los operadores AND/OR.
3. **Mantén las condiciones simples** cuando sea posible.
4. **Indenta los bloques de código** para una mejor legibilidad.
5. **Comenta la lógica compleja** para explicar tus intenciones.

```minilux
# Buen ejemplo con comentarios
$puntuacion = 85

# Comprueba si el estudiante aprobó con honores
if (($puntuacion >= 90) AND ($asistencia >= 90)) {
    printf("Aprobado con honores\n")
} elseif ($puntuacion >= 70) {
    printf("Aprobado\n")
} else {
    printf("Necesitas mejorar\n")
}
```
