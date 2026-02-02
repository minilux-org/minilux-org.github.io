---
sidebar_position: 2
---

# Operadores

Minilux soporta varios operadores para operaciones aritméticas, de comparación y lógicas.

## Operadores Aritméticos

Realizan operaciones matemáticas en enteros:

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `+` | Suma | `$resultado = 5 + 3` → 8 |
| `-` | Resta | `$resultado = 10 - 4` → 6 |
| `*` | Multiplicación | `$resultado = 6 * 7` → 42 |
| `/` | División | `$resultado = 20 / 4` → 5 |
| `%` | Módulo | `$resultado = 17 % 5` → 2 |

### Ejemplos

```minilux
$a = 10
$b = 3

$suma = $a + $b          # 13
$resta = $a - $b         # 7
$producto = $a * $b      # 30
$cociente = $a / $b     # 3
$resto = $a % $b    # 1

# Usando paréntesis para la precedencia
$resultado = (10 + 5) * 2  # 30
$calc = 1 + (4 / 2)     # 3
```

## Operadores de Comparación

Comparan valores y devuelven verdadero (1) o falso (0):

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `==` | Igual a | `$a == $b` |
| `!=` | No igual a | `$a != $b` |
| `>` | Mayor que | `$a > $b` |
| `<` | Menor que | `$a < $b` |
| `>=` | Mayor o igual que | `$a >= $b` |
| `<=` | Menor o igual que | `$a <= $b` |

### Ejemplos

```minilux
$edad = 25

if ($edad >= 18) {
    printf("Eres un adulto")
}

if ($edad < 65) {
    printf("No eres una persona mayor")
}

if ($edad == 25) {
    printf("Tienes exactamente 25 años")
}
```

## Operadores Lógicos

Combinan condiciones booleanas:

| Operador | Alternativa | Descripción | Ejemplo |
|----------|-------------|-------------|---------|
| `AND` | `&&` | Y lógico | `($a > 0) AND ($b > 0)` |
| `OR` | `||` | O lógico | `($a == 1) OR ($b == 1)` |

### Importante: Se Requieren Dobles Paréntesis

Cuando uses los operadores `AND` u `OR`, **debes usar dobles paréntesis**:

```minilux
# ✅ CORRECTO - Dobles paréntesis
if (($edad >= 18) AND ($edad <= 65)) {
    printf("Edad laboral")
}

if (($puntuacion < 60) OR ($nota == "F")) {
    printf("Necesitas mejorar")
}

# ❌ INCORRECTO - Un solo paréntesis causará errores de análisis
if ($edad >= 18 AND $edad <= 65) {
    # ¡Esto no funcionará!
}
```

### Combinación de Condiciones

```minilux
$edad = 25
$tieneLicencia = 1
$tieneSeguro = 1

# Múltiples condiciones AND
if ((($edad >= 18) AND ($tieneLicencia == 1)) AND ($tieneSeguro == 1)) {
    printf("¡Puedes conducir!")
}

# Mezclando AND y OR
if ((($edad < 18) OR ($edad > 65)) AND ($tieneDescuento == 1)) {
    printf("Descuento especial disponible")
}
```

### Condiciones Simples

Las condiciones simples sin operadores lógicos usan un solo paréntesis:

```minilux
if ($edad >= 18) {
    printf("Adulto)
}

if ($puntuacion > 90) {
    printf("¡Excelente!")
}
```

## Precedencia de Operadores

Las operaciones se evalúan en este orden (de mayor a menor):

1. Paréntesis `()`
2. Multiplicación `*`, División `/`, Módulo `%`
3. Suma `+`, Resta `-`
4. Comparación `==`, `!=`, `<`, `>`, `<=`, `>=`
5. Lógicas `AND`, `OR`

### Ejemplos

```minilux
$resultado = 10 + 5 * 2        # 20, no 30 (* tiene mayor precedencia)
$resultado = (10 + 5) * 2      # 30 (los paréntesis anulan la precedencia)

$x = 5
$y = 10
if (($x > 0) AND ($y < 20)) {
    # Ambas condiciones se evalúan, luego se aplica el AND
    printf("Ambas condiciones son verdaderas")
}
```
