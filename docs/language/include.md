---
sidebar_position: 6
---

# Include

The `include` statement allows you to divide your Minilux program into multiple files and reuse code across different scripts.

## Usage

Use `include` followed by the filename (as a string) to execute the contents of another Minilux file within the current context.

### Syntax

```minilux
include "filename.mi"
```

## Description

When `include` is called:
1. Minilux searches for the specified file.
2. It executes all the code in that file.
3. Variables and functions defined in the included file become available in the main script.

## Examples

**lib.mi**
```minilux
$app_name = "System Tool"

func show_banner {
    printf("--- $app_name ---")
}
```

**main.mi**
```minilux
include "lib.mi"

show_banner
printf("Welcome to $app_name")
```

## Best Practices

- Use `include` to create libraries of reusable functions.
- Keep configuration variables in a separate file (e.g., `config.mi`).
- Ensure that included files are in the same directory or provide the correct relative path.
