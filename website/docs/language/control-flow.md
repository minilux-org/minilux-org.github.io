---
sidebar_position: 3
---

# Control Flow

Minilux provides conditional statements and loops for controlling program flow.

## if / elseif / else

### Basic if Statement

```minilux
if ($age >= 18) {
    printf("You are an adult\n")
}
```

### if-else

```minilux
if ($score >= 60) {
    printf("Passed!\n")
} else {
    printf("Failed\n")
}
```

### if-elseif-else

```minilux
if ($score >= 90) {
    printf("Grade: A\n")
} elseif ($score >= 80) {
    printf("Grade: B\n")
} elseif ($score >= 70) {
    printf("Grade: C\n")
} elseif ($score >= 60) {
    printf("Grade: D\n")
} else {
    printf("Grade: F\n")
}
```

### Compound Conditions

**Important**: When using `AND` or `OR` in conditions, use **double parentheses**:

```minilux
# ✅ CORRECT - Double parentheses for compound conditions
if (($age >= 18) AND ($hasID == 1)) {
    printf("Access granted\n")
}

if (($isWeekend == 1) OR ($isHoliday == 1)) {
    printf("Day off!\n")
}

# ✅ CORRECT - Simple conditions use single parentheses
if ($age >= 18) {
    printf("Adult\n")
}
```

### Nested if Statements

```minilux
if ($age >= 18) {
    if ($hasLicense == 1) {
        printf("You can drive\n")
    } else {
        printf("You need a license\n")
    }
} else {
    printf("Too young to drive\n")
}
```

## while Loop

Execute code repeatedly while a condition is true:

### Basic Loop

```minilux
$i = 1
while ($i <= 5) {
    printf("Count: ", $i, "\n")
    inc($i, 1)
}
```

Output:
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

### Countdown Loop

```minilux
$countdown = 10
while ($countdown > 0) {
    printf($countdown, "...\n")
    dec($countdown, 1)
}
printf("Blast off!\n")
```

### Loop with Compound Condition

```minilux
$counter = 0
$max = 100

while (($counter < $max) AND ($counter < 10)) {
    printf("Counter: ", $counter, "\n")
    inc($counter, 1)
}
```

### Infinite Loop Prevention

Always ensure your loop condition will eventually become false:

```minilux
# ❌ WARNING: Infinite loop!
$x = 1
while ($x > 0) {
    printf("This will never stop!\n")
    # Forgot to modify $x
}

# ✅ CORRECT: Loop will terminate
$x = 10
while ($x > 0) {
    printf("x = ", $x, "\n")
    dec($x, 1)  # Modify the loop variable
}
```

## Pattern Examples

### Factorial Calculation

```minilux
$n = 5
$result = 1

while ($n > 0) {
    $result = $result * $n
    dec($n, 1)
}

printf("Factorial: ", $result, "\n")  # prints 120
```

### Sum of Numbers

```minilux
$i = 1
$sum = 0

while ($i <= 10) {
    $sum = $sum + $i
    inc($i, 1)
}

printf("Sum of 1 to 10: ", $sum, "\n")  # prints 55
```

### Array Iteration

```minilux
$fruits = ["apple", "banana", "orange"]
$i = 0

while ($i < len($fruits)) {
    printf("Fruit ", $i, ": ", $fruits[$i], "\n")
    inc($i, 1)
}
```

### Finding Maximum

```minilux
$numbers = [5, 12, 3, 99, 42, 7]
$max = $numbers[0]
$i = 1

while ($i < len($numbers)) {
    if ($numbers[$i] > $max) {
        $max = $numbers[$i]
    }
    inc($i, 1)
}

printf("Maximum value: ", $max, "\n")  # prints 99
```

## Control Flow Best Practices

1. **Always modify loop variables** to avoid infinite loops
2. **Use double parentheses** with AND/OR operators
3. **Keep conditions simple** when possible
4. **Indent code blocks** for better readability
5. **Comment complex logic** to explain your intentions

```minilux
# Good example with comments
$score = 85

# Check if student passed with honors
if (($score >= 90) AND ($attendance >= 90)) {
    printf("Passed with honors\n")
} elseif ($score >= 70) {
    printf("Passed\n")
} else {
    printf("Need to improve\n")
}
```
