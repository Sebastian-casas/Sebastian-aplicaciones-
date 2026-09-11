# SATI — Transportes y Maquinaria

Landing page estática para SATI (transporte de carga menor y mayor por carretera, y servicios de izaje).

## Estructura

```
index.html          Página principal (todas las secciones)
css/styles.css       Estilos (paleta, layout, responsive)
js/main.js           Menú móvil, scroll, contador animado, formulario -> WhatsApp
assets/img/logo.svg      Isotipo + wordmark SATI
assets/img/logo-mark.svg Isotipo solo (favicon)
```

## Cómo verla localmente

Solo abre `index.html` en el navegador, o levanta un servidor simple:

```bash
python3 -m http.server 8080
```

y visita `http://localhost:8080`.

## Datos de contacto (placeholder — reemplazar antes de publicar)

El sitio usa datos de ejemplo que deben actualizarse con la información real de SATI:

- Teléfono / WhatsApp: `+56 9 1234 5678` (aparece en `index.html` y `js/main.js`, variable `WHATSAPP_NUMBER`)
- Correo: `contacto@sati.cl`
- Dirección: `Camino Industrial 1234, Santiago, Chile` (también usada en el mapa embebido)
- Redes sociales: enlaces `#` en el header y footer

## Logo

El logo se recreó en SVG a partir de la imagen entregada (isotipo naranjo + wordmark "sati" + tagline "Transportes y Maquinaria"). Es una aproximación cuidada (ícono redibujado, tipografía redondeada tipo "Baloo 2" en negro/naranjo), pero **no es un calco pixel a pixel** porque no recibí el archivo vectorial original — solo pude ver la imagen dentro del chat, sin poder descargarla a este entorno.

Si cuentas con el archivo fuente (AI, EPS, SVG o un PNG en alta resolución con fondo transparente), reemplázalo así para tener la marca exacta:

1. Sube el archivo al repo en `assets/img/logo.svg` (logo completo con wordmark) y `assets/img/logo-mark.svg` (solo el ícono, se usa como favicon).
2. Si es PNG/JPG en vez de SVG, cambia también la referencia en `index.html` (busca `assets/img/logo.svg`) por la extensión correspondiente.

## Fotografías reales

El sitio ya está preparado para mostrar fotos reales de las maniobras de SATI (en el hero y en la sección "Trabajos en terreno"), pero **las fotos no pudieron incorporarse automáticamente**: cuando se comparten imágenes directamente en el chat, este entorno solo puede "verlas" para dar una respuesta — no quedan guardadas como archivo, así que no hay forma de copiarlas al repositorio desde aquí.

Para que las fotos aparezcan, súbelas directamente al repositorio (por la web de GitHub, arrastrando el archivo a la carpeta, o hicerá `git add`) con **estos nombres exactos**, dentro de `assets/img/fotos/`:

| Archivo | Dónde se usa | Recomendación |
|---|---|---|
| `assets/img/fotos/hero.jpg` | Imagen principal del inicio (hero) | Foto horizontal, idealmente la maniobra con el brazo extendido, mínimo 1200×900px |
| `assets/img/fotos/trabajo-01.jpg` | Sección "Trabajos en terreno", primera foto | Foto de posicionamiento/llegada a faena |
| `assets/img/fotos/trabajo-02.jpg` | Sección "Trabajos en terreno", segunda foto | Foto de la maniobra de izaje en curso |

Mientras esos archivos no existan, esos espacios se ven como un panel oscuro liso (no se rompe el diseño), y se completan solos apenas subas las fotos con esos nombres — no hace falta tocar el código de nuevo.

Si prefieres, también puedes enviarme las fotos por otra vía en una próxima conversación (Google Drive, Gmail) y las incorporo yo directamente.

## Formulario de contacto

El formulario de cotización no tiene backend: al enviarlo arma un mensaje y abre WhatsApp con el número configurado. Para recibir cotizaciones también por correo, se puede conectar a un servicio de formularios (Formspree, Web3Forms, etc.) o a un backend propio.
