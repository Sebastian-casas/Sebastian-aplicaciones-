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
