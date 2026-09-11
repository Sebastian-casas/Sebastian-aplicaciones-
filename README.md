# SATI — Transportes y Maquinaria

Landing page estática para SATI (transporte de carga menor y mayor por carretera, y servicios de izaje).

## Estructura

```
index.html          Página principal (todas las secciones)
css/styles.css       Estilos (paleta, layout, responsive)
js/main.js           Menú móvil, scroll, contador animado, formulario -> WhatsApp
assets/img/logo.png      Logo real de SATI (isotipo + wordmark), provisto por el cliente
assets/img/logo-mark.svg Isotipo recreado en SVG, se usa solo como favicon
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

`assets/img/logo.png` es el logo real de SATI (subido por el cliente, con fondo transparente), usado en el header y el footer.

El favicon (`assets/img/logo-mark.svg`) sigue siendo una recreación vectorial simplificada solo del ícono — se mantiene en SVG porque un favicon necesita verse nítido a tamaños muy pequeños (16-32px), algo que un recorte de PNG no garantiza. Si prefieres usar un recorte cuadrado del logo real como favicon, súbelo como `assets/img/favicon.png` y actualiza el `<link rel="icon">` en el `<head>` de `index.html`.

## Fotografías reales

El sitio usa fotos reales de maniobras de SATI en terreno (subidas directamente al repositorio):

| Archivo | Dónde se usa |
|---|---|
| `assets/img/fotos/hero.jpg` | Imagen principal del inicio (hero) — maniobra de izaje con el brazo extendido |
| `assets/img/fotos/trabajo-01.jpg` | Sección "Trabajos en terreno" — posicionamiento del camión pluma en faena |
| `assets/img/fotos/trabajo-02.jpg` | Sección "Trabajos en terreno" — izaje de equipos en faena industrial |

`hero.jpg` y `trabajo-02.jpg` usan la misma fotografía (es la más representativa que tenemos por ahora) mostrada con un recorte distinto en cada sección. Para variar esto, o sumar más fotos a la galería, súbelas al repo con un nombre nuevo (por ejemplo `trabajo-03.jpg`) en `assets/img/fotos/` y agrega su bloque `<figure class="gallery-item">` en `index.html` (sección `id="galeria"`), o reemplaza cualquiera de los tres archivos existentes manteniendo el mismo nombre.

Si en algún momento faltara alguno de estos archivos, esos espacios se ven como un panel oscuro liso en vez de romper el diseño.

## Formulario de contacto

El formulario de cotización no tiene backend: al enviarlo arma un mensaje y abre WhatsApp con el número configurado. Para recibir cotizaciones también por correo, se puede conectar a un servicio de formularios (Formspree, Web3Forms, etc.) o a un backend propio.
