# mini bites — landing page

Landing page de una sola página para mini bites, un emprendimiento de cake pops artesanales, construida en
HTML con Tailwind CSS precompilado (sin frameworks), publicada con GitHub Pages.

🔗 **Sitio publicado:** https://sberrcamacho.github.io/mini-bites/

## Estructura

```
index.html                Página principal (JS inline)
src/styles.css             Fuente de estilos (Tailwind + estilos propios)
assets/css/styles.css      CSS compilado que carga la página (se versiona)
tailwind.config.js         Paleta, tipografías y sombras de Tailwind
404.html                   Página de error 404
assets/images/             Fotos optimizadas (JPG + WebP)
assets/favicon.svg, ...    Favicon e íconos
robots.txt, sitemap.xml    SEO técnico
design_handoff_cake_pops_landing/   Especificación de diseño anterior (referencia histórica)
```

## Contenido y diseño

La dirección visual se generó con AIDesigner y se adaptó a mano con el contenido real del negocio.
Tipografía `Fredoka` (títulos) + `DM Sans` (texto), paleta crema `#FDF8F5`, café `#3E2723`,
mantequilla `#FEE180` y rosa `#FFD3E0`, definida en `tailwind.config.js`.
Secciones: portada, menú de sabores (Red Velvet, Oreo, Vainilla), cómo pedir (WhatsApp + Nequi),
socios y cierre con llamado a WhatsApp.

Requiere conexión a internet para cargar las fuentes de Google y los íconos de Phosphor.

## Desarrollo local

Si cambias clases de Tailwind en el HTML o `src/styles.css`, recompila el CSS:

```bash
npm install
npm run build:css   # o npm run watch:css mientras editas
```

Para previsualizar con rutas relativas correctas:

```bash
python3 -m http.server 8000
```

Y abrir `http://localhost:8000/`.

## Despliegue

El sitio se sirve directamente desde la rama `main` (raíz) vía GitHub Pages. El CSS compilado
(`assets/css/styles.css`) se sube al repo, así que corre `npm run build:css` antes de hacer commit. Cualquier cambio en `main` se refleja automáticamente en la URL publicada.
