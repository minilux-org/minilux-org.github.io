---
sidebar_position: 2
---

# Operators

Minilux supports various operators for arithmetic, comparison, and logical operations.

## Arithmetic Operators

Perform mathematical operations on integers:

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `$result = 5 + 3` → 8 |
| `-` | Subtraction | `$result = 10 - 4` → 6 |
| `*` | Multiplication | `$result = 6 * 7` → 42 |
| `/` | Division | `$result = 20 / 4` → 5 |
| `%` | Modulo | `$result = 17 % 5` → 2 |

### Examples

```minilux
$a = 10
$b = 3

$sum = $a + $b          # 13
$diff = $a - $b         # 7
$product = $a * $b      # 30
$quotient = $a / $b     # 3
$remainder = $a % $b    # 1

# Using parentheses for precedence
$result = (10 + 5) * 2  # 30
$calc = 1 + (4 / 2)     # 3
```

## Comparison Operators

Compare values and return true (1) or false (0):

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to | `$a == $b` |
| `!=` | Not equal to | `$a != $b` |
| `>` | Greater than | `$a > $b` |
| `<` | Less than | `$a < $b` |
| `>=` | Greater than or equal | `$a >= $b` |
| `<=` | Less than or equal | `$a <= $b` |

### Examples

```minilux
$age = 25

if ($age >= 18) {
    printf("You are an adult")
}

if ($age < 65) {
    printf("Not a senior citizen")
}

if ($age == 25) {
    printf("You are exactly 25")
}
```

## Logical Operators

Combine boolean conditions:

| Operator | Alternative | Description | Example |
|----------|-------------|-------------|---------|
| `AND` | `&&` | Logical AND | `($a > 0) AND ($b > 0)` |
| `OR` | `||` | Logical OR | `($a == 1) OR ($b == 1)` |

### Important: Double Parentheses Required

When using `AND` or `OR` operators, **you must use double parentheses**:

```minilux
# ✅ CORRECT - Double parentheses
if (($age >= 18) AND ($age <= 65)) {
    printf("Working age")
}

if (($score < 60) OR ($grade == "F")) {
    printf("Need to improve")
}

# ❌ WRONG - Single parentheses will cause parse errors
if ($age >= 18 AND $age <= 65) {
    # This won't work!
}
```

### Combining Conditions

```minilux
$age = 25
$hasLicense = 1
$hasInsurance = 1

# Multiple AND conditions
if ((($age >= 18) AND ($hasLicense == 1)) AND ($hasInsurance == 1)) {
    printf("You can drive!")
}

# Mixing AND and OR
if ((($age < 18) OR ($age > 65)) AND ($hasDiscount == 1)) {
    printf("Special discount available")
}
```

### Simple Conditions

Simple conditions without logical operators use single parentheses:

```minilux
if ($age >= 18) {
    printf("Adult")
}

if ($score > 90) {
    printf("Excellent!")
}
```

## Operator Precedence

Operations are evaluated in this order (highest to lowest):

1. Parentheses `()`
2. Multiplication `*`, Division `/`, Modulo `%`
3. Addition `+`, Subtraction `-`
4. Comparison `==`, `!=`, `<`, `>`, `<=`, `>=`
5. Logical `AND`, `OR`

### Examples

```minilux
$result = 10 + 5 * 2        # 20, not 30 (* has higher precedence)
$result = (10 + 5) * 2      # 30 (parentheses override precedence)

$x = 5
$y = 10
if (($x > 0) AND ($y < 20)) {
    # Both conditions evaluated, then AND applied
    printf("Both conditions are true")
}
```
