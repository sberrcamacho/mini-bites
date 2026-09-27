# mini bites — landing page

Landing page de una sola página para mini bites, un emprendimiento de cake pops artesanales, construida en
HTML con Tailwind CSS por CDN (sin frameworks ni paso de build), publicada con GitHub Pages.

🔗 **Sitio publicado:** https://sberrcamacho.github.io/mini-bites/

## Estructura

```
index.html                Página principal (estilos con Tailwind CDN y JS inline)
404.html                   Página de error 404
assets/images/             Fotos optimizadas (JPG + WebP)
assets/favicon.svg, ...    Favicon e íconos
robots.txt, sitemap.xml    SEO técnico
design_handoff_cake_pops_landing/   Especificación de diseño anterior (referencia histórica)
```

## Contenido y diseño

La dirección visual se generó con AIDesigner y se adaptó a mano con el contenido real del negocio.
Tipografía `Fredoka` (títulos) + `DM Sans` (texto), paleta crema `#FDF8F5`, café `#3E2723`,
mantequilla `#FEE180` y rosa `#FFD3E0`, definida en el `tailwind.config` inline de `index.html`.
Secciones: portada, menú de sabores (Red Velvet, Oreo, Vainilla), cómo pedir (WhatsApp + Nequi),
socios y cierre con llamado a WhatsApp.

Requiere conexión a internet para cargar Tailwind, las fuentes de Google y los íconos de Phosphor.

## Desarrollo local

No requiere instalación. Para previsualizar con rutas relativas correctas:

```bash
python3 -m http.server 8000
```

Y abrir `http://localhost:8000/`.

## Despliegue

El sitio se sirve directamente desde la rama `main` (raíz) vía GitHub Pages — no hay paso de
build. Cualquier cambio en `main` se refleja automáticamente en la URL publicada.
