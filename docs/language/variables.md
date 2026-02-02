---
sidebar_position: 1
---

# Variables

Variables in Minilux start with a `$` sign and can hold integers, strings, or arrays. The language uses dynamic typing, so variables can change types at runtime.

## Variable Declaration and Assignment

Variables are declared simply by assigning a value to them:

```minilux
$name = "Alexia"
$age = 42
$pi = 3
$isActive = 1
```

## Data Types

### Integers

Minilux supports integer values:

```minilux
$count = 100
$negative = -50
$zero = 0
```

### Strings

Strings are enclosed in double quotes `"` or single quotes `'`:

```minilux
$greeting = "Hello, World!"
$name = 'Alexia'
$message = "Line 1\nLine 2\tTabbed"
```

### String Interpolation

Minilux supports variable interpolation inside double-quoted strings:

```minilux
$name = "Alexia"
$age = 42
printf("My name is ", $name, " and I am ", $age, " years old")
```

### Escape Sequences

Supported escape sequences:
- `\n` - newline
- `\t` - tab
- `\\` - backslash
- `\"` - double quote
- `\'` - single quote

### Arrays

Arrays can hold multiple values of any type:

```minilux
$numbers = [1, 2, 3, 4, 5]
$mixed = [1, "hello", 42]
$empty = []
```

## String Indexing

Access individual characters in a string using array-like syntax:

```minilux
$text = "Hello"
printf("First character: ", $text[0])   # prints "H"
printf("Third character: ", $text[2])   # prints "l"
```

## Array Indexing

Access array elements by index (0-based):

```minilux
$fruits = ["apple", "banana", "orange"]
printf("First fruit: ", $fruits[0])     # prints "apple"
printf("Second fruit: ", $fruits[1])    # prints "banana"

# Assign to array elements
$fruits[0] = "mango"
printf("New first fruit: ", $fruits[0]) # prints "mango"
```

## Variable Reassignment

Variables can be reassigned to different types:

```minilux
$x = 10
printf("x is: ", $x)  # prints "x is: 10"

$x = "now a string"
printf("x is: ", $x)  # prints "x is: now a string"

$x = [1, 2, 3]
printf("x is now an array with ", len($x), " elements")
```

## Naming Rules

Variable names:
- Must start with `$`
- Can contain letters, numbers, and underscores
- Are case-sensitive

Valid variable names:
```minilux
$myVar
$my_var
$myVar123
$_private
$CONSTANT_VALUE
```

## Scope

All variables in Minilux currently share global scope. Variables declared inside functions or control structures are accessible everywhere in the program.

```minilux
if (1 == 1) {
    $x = 100
}

printf("x = ", $x)  # x is accessible here
```
