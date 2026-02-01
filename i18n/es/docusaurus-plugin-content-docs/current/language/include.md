---
sidebar_position: 6
---

# Include

La sentencia `include` te permite dividir tu programa Minilux en varios archivos y reutilizar código en diferentes scripts.

## Uso

Usa `include` seguido del nombre del archivo (como una cadena) para ejecutar el contenido de otro archivo Minilux dentro del contexto actual.

### Sintaxis

```minilux
include "archivo.mi"
```

## Descripción

Cuando se llama a `include`:
1. Minilux busca el archivo especificado.
2. Ejecuta todo el código de ese archivo.
3. Las variables y funciones definidas en el archivo incluido pasan a estar disponibles en el script principal.

## Ejemplos

**lib.mi**
```minilux
$nombre_app = "Herramienta de Sistema"

func mostrar_banner {
    printf("--- $nombre_app ---\n")
}
```

**main.mi**
```minilux
include "lib.mi"

mostrar_banner
printf("Bienvenido a $nombre_app\n")
```

## Buenas Prácticas

- Usa `include` para crear librerías de funciones reutilizables.
- Mantén las variables de configuración en un archivo separado (ej: `config.mi`).
- Asegúrate de que los archivos incluidos estén en el mismo directorio o proporciona la ruta relativa correcta.
