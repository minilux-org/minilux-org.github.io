---
sidebar_position: 5
---

# User-Defined Functions

Minilux allows you to define your own reusable functions using the `func` keyword.

## Defining a Function

Functions are defined with a name followed by a block of code enclosed in curly braces `{}`.

### Syntax

```minilux
func function_name {
    # code to execute
}
```

### Examples

```minilux
# A simple greeting function
func greet {
    printf("Hello from a custom function!")
}

# A function using global variables
$app_version = "0.1.0"
func show_version {
    printf("Minilux Version: ",$app_version)
}
```

## Calling a Function

To execute a function, simply use its name as a statement. Note that currently, User-Defined Functions in Minilux do not take arguments or return values in the traditional sense; they operate using global scope.

### Examples

```minilux
greet
show_version
```

## Scope

Functions in Minilux have access to all global variables. Variables defined or modified inside a function affect the global state.

```minilux
$counter = 0

func increment_global {
    inc $counter + 1
}

increment_global
printf("Counter is now: ",$counter) # prints 1
```

## Modular Code

You can combine functions with the `include` statement to organize your code across multiple files.
