---
sidebar_position: 3
---

# Examples

## Hello World

```minilux
#!/usr/bin/minilux
printf("Hello, World!\n")
```

## Variables and Math

```minilux
# Basic arithmetic
$a = 10
$b = 20
$sum = $a + $b
$product = $a * $b

printf("Sum: ", $sum)
printf("Product: ", $product)
```

## Factorial Calculator

```minilux
#!/usr/bin/minilux
# Calculate factorial of a number

$n = 5
$result = 1
$original = $n

while ($n > 0) {
    $result = $result * $n
    dec $n - 1
}

printf("Factorial of ", $original, " is ", $result)
```

## Countdown Timer

```minilux
#!/usr/bin/minilux
# Countdown from 10 to 1

$count = 10
while ($count > 0) {
    printf("$count...")
    sleep(1)
    dec $count - 1
}
printf("Blast off!")
```

## Array Manipulation

```minilux
#!/usr/bin/minilux
# Working with arrays

$fruits = ["apple", "banana", "orange"]

printf("Initial fruits:\n")
$i = 0
while ($i < len($fruits)) {
    printf("  $i: $fruits[$i]")
    inc $i + 1
}

# Add a fruit
push $fruits, "grape"
printf("\nAfter adding grape: ", len($fruits), " fruits")

# Remove first fruit
shift $fruits
printf("After removing first: ", len($fruits), " fruits")

# Print final list
printf("\nFinal fruits:")
$i = 0
while ($i < len($fruits)) {
    printf("  $fruits[$i]")
    inc $i + 1
}
```

## FizzBuzz

```minilux
#!/usr/bin/minilux
# FizzBuzz from 1 to 20

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

## Find Maximum Value

```minilux
#!/usr/bin/minilux
# Find the maximum value in an array

$numbers = [23, 45, 12, 67, 34, 89, 15]
$max = $numbers[0]
$i = 1

while ($i < len($numbers)) {
    if ($numbers[$i] > $max) {
        $max = $numbers[$i]
    }
    inc $i + 1
}

printf("Maximum value: ", $max)
```

## Shell Integration

```minilux
#!/usr/bin/minilux
# Execute system commands

printf("=== System Information ===")

$user = shell("whoami")
$hostname = shell("hostname")
$os = shell("uname -s")
$date = shell("date")

printf("User: $user")
printf("Hostname: $hostname")
printf("OS: $os")
printf("Date: $date")
```

## User-Defined Functions

```minilux
#!/usr/bin/minilux
# Define and use custom functions

func greet {
    printf("Hello from a custom function!")
}

func calculate {
    $x = 10
    $y = 20
    $result = $x + $y
    printf("Calculation result: ", $result)
}

# Call the functions
greet
calculate
```

## Progress Bar

```minilux
#!/usr/bin/minilux
# Simulate a progress bar

printf("Loading")
$i = 0
while ($i < 10) {
    printf(".")
    sleep(1)
    inc $i + 1
}
printf("Complete!")
```

## Including Other Scripts

Create a library file `lib.mi`:

```minilux
# lib.mi - Helper functions

func sayHello {
    printf("Hello from library!")
}

func printSeparator {
    printf("==================")
}
```

Main script `main.mi`:

```minilux
#!/usr/bin/minilux
# main.mi - Uses the library

include "lib.mi"

printSeparator
sayHello
printSeparator
```

## TCP Socket Example

```minilux
#!/usr/bin/minilux
# Simple HTTP request

sockopen("web", "example.com", 80)
sockwrite("web", "GET / HTTP/1.0\r\nHost: example.com\r\n\r\n")
sockread("web", $response)
sockclose("web")

printf("Response:", $response)
```

## Sum of Numbers

```minilux
#!/usr/bin/minilux
# Calculate sum of numbers from 1 to N

$n = 100
$i = 1
$sum = 0

while ($i <= $n) {
    $sum = $sum + $i
    inc $i + 1
}

printf("Sum of 1 to", $n, ":", $sum)
```
