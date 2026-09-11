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

El logo se recreó en SVG a partir de la imagen entregada (isotipo naranjo + wordmark "sati" + tagline "Transportes y Maquinaria"), ya que no se recibió el archivo vectorial original. Si cuentas con el archivo fuente (AI/EPS/SVG/PNG en alta resolución), reemplaza `assets/img/logo.svg` y `assets/img/logo-mark.svg` para usar la versión exacta de la marca.

## Formulario de contacto

El formulario de cotización no tiene backend: al enviarlo arma un mensaje y abre WhatsApp con el número configurado. Para recibir cotizaciones también por correo, se puede conectar a un servicio de formularios (Formspree, Web3Forms, etc.) o a un backend propio.
