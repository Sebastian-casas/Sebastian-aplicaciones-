# SATI — Transportes y Maquinaria

Landing page estática para SATI (transporte de carga menor y mayor por carretera, y servicios de izaje).

## Estructura

```
index.html          Página principal (todas las secciones)
css/styles.css       Estilos (paleta, layout, responsive)
js/main.js           Menú móvil, scroll, contador animado, formulario -> WhatsApp
assets/img/logo.png        Logo real de SATI (isotipo + wordmark), usado en el header
assets/img/logo-footer.png Isotipo real (solo la flecha, sin fondo), usado en el footer
assets/img/logo-mark.svg   Isotipo recreado en SVG, se usa solo como favicon
```

## Cómo verla localmente

Solo abre `index.html` en el navegador, o levanta un servidor simple:

```bash
python3 -m http.server 8080
```

y visita `http://localhost:8080`.

## Datos de contacto

- Teléfono / WhatsApp: `+56 9 9139 5424` — real, confirmado por el cliente. Aparece en `index.html` (botón "Llámanos ahora", enlaces de WhatsApp, sección de contacto) y en `js/main.js` como `WHATSAPP_NUMBER`. El formulario de cotización arma el mensaje y lo envía por WhatsApp a este número.
- Correo para cotizaciones: `administracion@satichile.cl` — real, confirmado por el cliente (enlace `mailto:` en la sección de contacto).
- Dirección: **no se muestra** — SATI opera sin oficina física de atención al público (dirección virtual), así que se quitó la tarjeta de dirección, el mapa embebido y la mención en el footer. En su lugar la sección de contacto muestra horario y cobertura (todo Chile, atención remota).
- Redes sociales: enlaces `#` en el header y footer — placeholder, faltan las URLs reales.

## Logo

- `assets/img/logo.png`: logo completo real de SATI (isotipo + wordmark "sati"), usado en el header.
- `assets/img/logo-footer.png`: recorte real del isotipo (solo la flecha naranja, sin el cuadrado de fondo), usado en el footer sobre el fondo oscuro.
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

El formulario de cotización no tiene backend: al enviarlo arma un mensaje y abre WhatsApp con el número configurado. Para recibir cotizaciones también por correo, se puede conectar a un servicio de formularios (Formspree, Web3Forms, etc.) o a un backend propio.
