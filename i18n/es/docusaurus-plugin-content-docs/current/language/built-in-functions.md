---
sidebar_position: 4
---

# Funciones Incorporadas

Minilux proporciona varias funciones incorporadas para operaciones comunes.

## printf()

Imprime texto y variables en la salida estándar.

### Sintaxis

```minilux
printf(arg1, arg2, arg3, ...)
```

### Descripción

`printf()` concatena todos los argumentos y los imprime. Añade automáticamente una nueva línea al final si esta falta.

### Secuencias de Escape

Secuencias de escape soportadas en las cadenas:
- `\n` - Nueva línea
- `\t` - Tabulador

### Ejemplos

```minilux
# Imprimir texto simple
printf("¡Hola, Mundo!\n")

# Imprimir variables
$nombre = "Alexia"
printf("Hola, ", $nombre, "!\n")

# Imprimir números
$edad = 42
printf("Edad: ", $edad, "\n")

# Mezclar múltiples valores
$a = 10
$b = 20
printf("La suma de ", $a, " y ", $b, " es ", $a + $b, "\n")
```

## len()

Obtiene la longitud de un array o una cadena (string).

### Sintaxis

```minilux
len($variable)
```

### Ejemplos

```minilux
# Longitud de un array
$numeros = [1, 2, 3, 4, 5]
printf("El array tiene ", len($numeros), " elementos\n")  # imprime 5

# Longitud de una cadena
$texto = "Hola"
printf("La cadena tiene ", len($texto), " caracteres\n")  # imprime 4

# Array vacío
$vacio = []
printf("Longitud del array vacío: ", len($vacio), "\n")  # imprime 0
```

## inc()

Incrementa una variable según una cantidad especificada.

### Sintaxis

```minilux
inc($variable, cantidad)
```

### Ejemplos

```minilux
$contador = 0

inc($contador, 1)   # contador ahora es 1
inc($contador, 5)   # contador ahora es 6
inc($contador, 10)  # contador ahora es 16

printf("Contador: ", $contador, "\n")  # imprime 16

# En bucles
$i = 0
while ($i < 5) {
    printf("i = ", $i, "\n")
    inc($i, 1)
}
```

## dec()

Decrementa una variable según una cantidad especificada.

### Sintaxis

```minilux
dec($variable, cantidad)
```

### Ejemplos

```minilux
$cuentaRegresiva = 10

dec($cuentaRegresiva, 1)  # cuentaRegresiva ahora es 9
dec($cuentaRegresiva, 3)  # cuentaRegresiva ahora es 6

printf("Cuenta regresiva: ", $cuentaRegresiva, "\n")  # imprime 6

# Bucle de cuenta regresiva
$temporizador = 5
while ($temporizador > 0) {
    printf($temporizador, "...\n")
    dec($temporizador, 1)
}
printf("¡Ya!\n")
```

## push()

Añade un elemento al final de un array.

### Sintaxis

```minilux
push($array, valor)
```

### Ejemplos

```minilux
$frutas = ["manzana", "platano"]
push($frutas, "naranja")
push($frutas, "uva")

# $frutas es ahora ["manzana", "platano", "naranja", "uva"]

$i = 0
while ($i < len($frutas)) {
    printf("Fruta: ", $frutas[$i], "\n")
    inc($i, 1)
}
```

## pop()

Elimina y devuelve el último elemento de un array.

### Sintaxis

```minilux
pop($array)
```

### Ejemplos

```minilux
$pila = [1, 2, 3, 4, 5]

pop($pila)  # Elimina 5
pop($pila)  # Elimina 4

# $pila es ahora [1, 2, 3]

printf("Elementos restantes: ", len($pila), "\n")  # imprime 3
```

## shift()

Elimina y devuelve el primer elemento de un array.

### Sintaxis

```minilux
shift($array)
```

### Ejemplos

```minilux
$cola = ["primero", "segundo", "tercero"]

shift($cola)  # Elimina "primero"
shift($cola)  # Elimina "segundo"

# $cola es ahora ["tercero"]

printf("Restantes: ", len($cola), "\n")  # imprime 1
```

## unshift()

Añade un elemento al principio de un array.

### Sintaxis

```minilux
unshift($array, valor)
```

### Ejemplos

```minilux
$lista = [2, 3, 4]

unshift($lista, 1)
unshift($lista, 0)

# $lista es ahora [0, 1, 2, 3, 4]

$i = 0
while ($i < len($lista)) {
    printf($lista[$i], " ")
    inc($i, 1)
}
printf("\n")
```

## shell()

Ejecuta un comando del sistema y devuelve su salida (stdout).

### Sintaxis

```minilux
$salida = shell("comando")
```

### Descripción

Ejecuta un comando del shell usando `/bin/sh -c` en sistemas Unix o `cmd /C` en Windows. Devuelve la salida estándar sin el carácter de nueva línea final.

### Ejemplos

```minilux
# Obtener el usuario actual
$usuario = shell("whoami")
printf("Usuario actual: ", $usuario, "\n")

# Obtener la fecha actual
$fecha = shell("date")
printf("Fecha: ", $fecha, "\n")

# Listar archivos
$archivos = shell("ls -l")
printf($archivos, "\n")

# Obtener info del sistema
$so = shell("uname -s")
printf("Sistema Operativo: ", $so, "\n")
```

### Advertencia de Seguridad

⚠️ **Ten cuidado con shell()** - ejecutar comandos no confiables puede ser peligroso. Nunca pases la entrada del usuario directamente a `shell()` sin validación.

## sleep()

Detiene la ejecución durante un número específico de segundos.

### Sintaxis

```minilux
sleep(segundos)
```

### Ejemplos

```minilux
printf("Iniciando...\n")
sleep(2)
printf("2 segundos después\n")

# Cuenta regresiva con pausas
$cuenta = 5
while ($count > 0) {
    printf($cuenta, "...\n")
    sleep(1)
    dec($cuenta, 1)
}
printf("¡Hecho!\n")

# Simulación de progreso
printf("Procesando")
$i = 0
while ($i < 5) {
    printf(".")
    sleep(1)
    inc($i, 1)
}
printf(" ¡Completado!\n")
```

## Ejemplos de Funciones para Arrays

### Implementación de Pila (Stack)

```minilux
# Añadir elementos a la pila
$pila = []
push($pila, 10)
push($pila, 20)
push($pila, 30)

# Sacar elementos de la pila (LIFO)
while (len($pila) > 0) {
    pop($pila)
    printf("Sacado, quedan: ", len($pila), "\n")
}
```

### Implementación de Cola (Queue)

```minilux
# Añadir a la cola
$cola = []
push($cola, "Tarea 1")
push($cola, "Tarea 2")
push($cola, "Tarea 3")

# Procesar cola (FIFO)
while (len($cola) > 0) {
    shift($cola)
    printf("Procesada, quedan: ", len($cola), "\n")
}
```

### Creación de Arrays

```minilux
$numeros = []
$i = 1

while ($i <= 10) {
    push($numbers, $i)
    inc($i, 1)
}

printf("Generados ", len($numbers), " números\n")
```
