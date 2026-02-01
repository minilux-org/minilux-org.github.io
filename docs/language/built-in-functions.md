---
sidebar_position: 4
---

# Built-in Functions

Minilux provides several built-in functions for common operations.

## printf() / print()

Print text and variables to standard output.

### Syntax

```minilux
printf(arg1, arg2, arg3, ...)
print(arg1, arg2, arg3, ...)
```

### Description

`printf()` concatenates all arguments and prints them. `print()` is an identical alias. Both functions automatically add a newline at the end if one is missing.

Strings also support **variable interpolation**:
```minilux
$name = "Alexia"
printf("Hello, $name!\n")
```

### Escape Sequences

Supported escape sequences in strings:
- `\n` - Newline
- `\t` - Tab

### Examples

```minilux
# Print simple text
printf("Hello, World!\n")

# Print variables by interpolation
$name = "Alexia"
printf("Hello, $name!\n")

# Mix multiple values as arguments
$a = 10
$b = 20
printf("Sum of ", $a, " and ", $b, " is ", $a + $b)
```

## read()

Read a line from standard input and store it in a variable.

### Syntax

```minilux
read($variable)
```

### Examples

```minilux
printf("What is your name? ")
read($name)
printf("Hello, $name!\n")
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
printf("Array has ", len($numbers), " elements")

# String length
$text = "Hello"
printf("String has ", len($text), " characters")
```

## number()

Convert a string or an existing integer into a numeric value for arithmetic.

### Syntax

```minilux
number(expression)
```

### Examples

```minilux
read($input)
$value = number($input)
printf("Twice is ", $value * 2)
```
**Note:** If the input cannot be parsed as a number, it returns `0`.

## lower() / upper()

Normalize string casing.

### Syntax

```minilux
lower(string)
upper(string)
```

### Examples

```minilux
$answer = "YeS"
if (lower($answer) == "yes") {
    printf("Confirmed\n")
}

printf("Shouting: ", upper("minilux"))
```

## shell()

Execute a system command and return its output.

### Syntax

```minilux
$output = shell("command")
```

### Description

Returns the standard output with the trailing newline removed.

### Examples

```minilux
$user = shell("whoami")
$date = shell("date +%Y-%m-%d")
printf("User: $user on $date\n")
```

## inc / dec

Increment or decrement a variable. Note that these are **statements** and do not use parentheses.

### Syntax

```minilux
inc $variable + amount
dec $variable - amount
```

### Examples

```minilux
$counter = 0
inc $counter + 1   # counter is 1
inc $counter + 5   # counter is 6
dec $counter - 2   # counter is 4
```

## Array Operations

These operations modify an array in place. They are called like statements without parentheses.

- `push $array, value` - Add element to end
- `pop $array` - Remove element from end
- `shift $array` - Remove element from beginning
- `unshift $array, value` - Add element to beginning

### Examples

```minilux
$list = [1, 2, 3]
push $list, 4        # [1, 2, 3, 4]
pop $list            # [1, 2, 3]
shift $list          # [2, 3]
unshift $list, 0     # [0, 2, 3]
```

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
```

## sockopen() / sockwrite() / sockread() / sockclose()

TCP socket operations for network programming.

- `sockopen("name", "host", port)` - Open a connection
- `sockwrite("name", "data")` - Send data
- `sockread("name", $var)` - Read data into variable
- `sockclose("name")` - Close connection

### Example

```minilux
sockopen("web", "example.com", 80)
sockwrite("web", "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
sockread("web", $response)
printf($response)
sockclose("web")
```
