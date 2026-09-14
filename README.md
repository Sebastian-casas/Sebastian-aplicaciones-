# SATI — Transportes y Maquinaria

Landing page estática para SATI (transporte de carga menor y mayor por carretera, y servicios de izaje).

## Estructura

```
index.html          Página principal (todas las secciones)
css/styles.css       Estilos (paleta, layout, responsive)
js/main.js           Menú móvil, scroll, formulario -> correo
assets/img/logo.png      Logo real de SATI (isotipo + wordmark), usado en header y footer
assets/img/logo-mark.svg Isotipo recreado en SVG, se usa solo como favicon
```

## Cómo verla localmente

Solo abre `index.html` en el navegador, o levanta un servidor simple:

```bash
python3 -m http.server 8080
```

y visita `http://localhost:8080`.

## Datos de contacto

- Teléfono / WhatsApp: `+56 9 9139 5424` — real, confirmado por el cliente. Aparece en `index.html` (botón "Llámanos ahora", enlaces de WhatsApp) y en `js/main.js` como `WHATSAPP_NUMBER`.
- Correo para cotizaciones: `administracion@satichile.cl` — real, confirmado por el cliente. Aparece en la sección de contacto (enlace `mailto:`) y en `js/main.js` como `QUOTE_EMAIL`; es el destino del formulario de cotización.
- Dirección: **no se muestra** — SATI opera sin oficina física de atención al público (dirección virtual), así que se quitó la tarjeta de dirección y el mapa embebido de la sección de contacto.
- Redes sociales: **no se muestran** — se quitaron los íconos de Facebook/Instagram/LinkedIn del footer (eran enlaces `#` de ejemplo, sin URLs reales). Si en el futuro quieres agregarlos, hay que sumar de nuevo el bloque `.footer-social` con los enlaces reales.

## Logo

- `assets/img/logo.png`: logo completo real de SATI (isotipo + wordmark "sati"), usado tanto en el header como en el footer. En el footer se invierte a blanco vía CSS (`filter: brightness(0) invert(1)`) para que se lea sobre el fondo oscuro.
- `assets/img/logo-mark.svg`: favicon — sigue siendo una recreación vectorial simplificada del ícono (no el archivo real), porque un favicon necesita verse nítido a tamaños muy pequeños (16-32px), algo que un recorte de PNG no garantiza. Si prefieres usar el ícono real ahí también, súbelo como `assets/img/favicon.png` y actualiza el `<link rel="icon">` en el `<head>` de `index.html`.

## Fotografías reales

El sitio usa fotos reales de maniobras de SATI en terreno (subidas directamente al repositorio):

| Archivo | Dónde se usa |
|---|---|
| `assets/img/fotos/hero.jpg` | Imagen principal del inicio (hero) — maniobra de izaje con el brazo extendido |
| `assets/img/fotos/trabajo-01.jpg` | Sección "Trabajos en terreno" — posicionamiento del camión pluma en faena |
| `assets/img/fotos/trabajo-02.jpg` | Sección "Por qué elegirnos" — izaje de equipos en faena industrial |

`hero.jpg` y `trabajo-02.jpg` usan la misma fotografía (es la más representativa que tenemos por ahora) mostrada con un recorte distinto en cada sección. Para variar esto, o sumar más fotos, súbelas al repo con un nombre nuevo (por ejemplo `trabajo-03.jpg`) en `assets/img/fotos/` y agrega su bloque `<figure class="gallery-item">` en `index.html` (dentro de `.gallery-grid`, sección `id="nosotros"`), o reemplaza cualquiera de los archivos existentes manteniendo el mismo nombre.

Si en algún momento faltara alguno de estos archivos, esos espacios se ven como un panel oscuro liso en vez de romper el diseño.

## Formulario de contacto

El formulario de cotización no tiene backend: al enviarlo arma un enlace `mailto:` (asunto + cuerpo con los datos del formulario) y abre el programa de correo del visitante, dirigido a `administracion@satichile.cl`. Esto depende de que el visitante tenga un cliente de correo configurado en su dispositivo/navegador; si prefieres que el envío ocurra directamente desde el servidor sin depender de eso, se puede conectar a un servicio de formularios (Formspree, Web3Forms, etc.) o a un backend propio.
