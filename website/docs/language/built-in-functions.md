---
sidebar_position: 4
---

# Built-in Functions

Minilux provides several built-in functions for common operations.

## printf()

Print text and variables to standard output.

### Syntax

```minilux
printf(arg1, arg2, arg3, ...)
```

### Description

`printf()` concatenates all arguments and prints them. It automatically adds a newline at the end if missing.

### Escape Sequences

Supported escape sequences in strings:
- `\n` - Newline
- `\t` - Tab

### Examples

```minilux
# Print simple text
printf("Hello, World!\n")

# Print variables
$name = "Alexia"
printf("Hello, ", $name, "!\n")

# Print numbers
$age = 42
printf("Age: ", $age, "\n")

# Mix multiple values
$a = 10
$b = 20
printf("Sum of ", $a, " and ", $b, " is ", $a + $b, "\n")
```

## len()

Get the length of an array or string.

### Syntax

```minilux
len($variable)
```

### Examples

```minilux
# Array length
$numbers = [1, 2, 3, 4, 5]
printf("Array has ", len($numbers), " elements\n")  # prints 5

# String length
$text = "Hello"
printf("String has ", len($text), " characters\n")  # prints 5

# Empty array
$empty = []
printf("Empty array length: ", len($empty), "\n")  # prints 0
```

## inc()

Increment a variable by a specified amount.

### Syntax

```minilux
inc($variable, amount)
```

### Examples

```minilux
$counter = 0

inc($counter, 1)   # counter is now 1
inc($counter, 5)   # counter is now 6
inc($counter, 10)  # counter is now 16

printf("Counter: ", $counter, "\n")  # prints 16

# In loops
$i = 0
while ($i < 5) {
    printf("i = ", $i, "\n")
    inc($i, 1)
}
```

## dec()

Decrement a variable by a specified amount.

### Syntax

```minilux
dec($variable, amount)
```

### Examples

```minilux
$countdown = 10

dec($countdown, 1)  # countdown is now 9
dec($countdown, 3)  # countdown is now 6

printf("Countdown: ", $countdown, "\n")  # prints 6

# Countdown loop
$timer = 5
while ($timer > 0) {
    printf($timer, "...\n")
    dec($timer, 1)
}
printf("Go!\n")
```

## push()

Add an element to the end of an array.

### Syntax

```minilux
push($array, value)
```

### Examples

```minilux
$fruits = ["apple", "banana"]
push($fruits, "orange")
push($fruits, "grape")

# $fruits is now ["apple", "banana", "orange", "grape"]

$i = 0
while ($i < len($fruits)) {
    printf("Fruit: ", $fruits[$i], "\n")
    inc($i, 1)
}
```

## pop()

Remove and return the last element from an array.

### Syntax

```minilux
pop($array)
```

### Examples

```minilux
$stack = [1, 2, 3, 4, 5]

pop($stack)  # Removes 5
pop($stack)  # Removes 4

# $stack is now [1, 2, 3]

printf("Remaining elements: ", len($stack), "\n")  # prints 3
```

## shift()

Remove and return the first element from an array.

### Syntax

```minilux
shift($array)
```

### Examples

```minilux
$queue = ["first", "second", "third"]

shift($queue)  # Removes "first"
shift($queue)  # Removes "second"

# $queue is now ["third"]

printf("Remaining: ", len($queue), "\n")  # prints 1
```

## unshift()

Add an element to the beginning of an array.

### Syntax

```minilux
unshift($array, value)
```

### Examples

```minilux
$list = [2, 3, 4]

unshift($list, 1)
unshift($list, 0)

# $list is now [0, 1, 2, 3, 4]

$i = 0
while ($i < len($list)) {
    printf($list[$i], " ")
    inc($i, 1)
}
printf("\n")
```

## shell()

Execute a system command and return its output.

### Syntax

```minilux
$output = shell("command")
```

### Description

Executes a shell command using `/bin/sh -c` on Unix systems or `cmd /C` on Windows. Returns the standard output with the trailing newline removed.

### Examples

```minilux
# Get current user
$user = shell("whoami")
printf("Current user: ", $user, "\n")

# Get current date
$date = shell("date")
printf("Date: ", $date, "\n")

# List files
$files = shell("ls -l")
printf($files, "\n")

# Get system info
$os = shell("uname -s")
printf("Operating System: ", $os, "\n")
```

### Security Warning

⚠️ **Be careful with shell()** - executing untrusted commands can be dangerous. Never pass user input directly to `shell()` without validation.

## sleep()

Pause execution for a specified number of seconds.

### Syntax

```minilux
sleep(seconds)
```

### Examples

```minilux
printf("Starting...\n")
sleep(2)
printf("2 seconds later\n")

# Countdown with delays
$count = 5
while ($count > 0) {
    printf($count, "...\n")
    sleep(1)
    dec($count, 1)
}
printf("Done!\n")

# Progress simulation
printf("Processing")
$i = 0
while ($i < 5) {
    printf(".")
    sleep(1)
    inc($i, 1)
}
printf(" Complete!\n")
```

## Array Function Examples

### Stack Implementation

```minilux
# Push elements onto stack
$stack = []
push($stack, 10)
push($stack, 20)
push($stack, 30)

# Pop elements off stack (LIFO)
while (len($stack) > 0) {
    pop($stack)
    printf("Popped, remaining: ", len($stack), "\n")
}
```

### Queue Implementation

```minilux
# Add to queue
$queue = []
push($queue, "Task 1")
push($queue, "Task 2")
push($queue, "Task 3")

# Process queue (FIFO)
while (len($queue) > 0) {
    shift($queue)
    printf("Processed, remaining: ", len($queue), "\n")
}
```

### Building Arrays

```minilux
$numbers = []
$i = 1

while ($i <= 10) {
    push($numbers, $i)
    inc($i, 1)
}

printf("Generated ", len($numbers), " numbers\n")
```
