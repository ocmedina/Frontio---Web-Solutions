# 🎯 Guía Rápida - Imágenes de Proyectos

## ✅ Lo que ya está hecho

- ✅ Carpeta `public/images/projects/` creada
- ✅ Rutas en `Projects.tsx` actualizadas
- ✅ Estructura organizada

## 📝 Próximos Pasos

### 1. Conseguí tus imágenes

**Capturas de pantalla que necesitás:**

- `om-tecnologia.webp` - Screenshot del sitio OM Tecnología
- `ecommerce-paola.webp` - Screenshot del e-commerce de lencería
- `tienduca-home.webp` - Screenshot de Tienduca
- `bodega-mendocina.webp` - Screenshot de la bodega

### 2. Optimizá las imágenes

Antes de agregar, optimizá en [Squoosh.app](https://squoosh.app/):

**Configuración recomendada:**

- Formato: **WebP**
- Calidad: **85%**
- Resize: **1200px** de ancho (mantener proporción)
- Objetivo: **< 200KB** por imagen

### 3. Agregá las imágenes

Copiá las imágenes optimizadas en:

```
d:\Om-page\list\Frontio---Web-Solutions\public\images\projects\
```

### 4. Verificá

Ejecutá el proyecto y revisá que se vean:

```bash
npm run dev
```

Navegá a la sección "Proyectos" y verificá que las imágenes carguen.

---

## 🆘 Si no tenés las imágenes aún

### Opción A: Placeholders temporales

Creá archivos con estos nombres vacíos y el proyecto usará fallbacks.

### Opción B: Usar las imágenes actuales

Si ya tenés `om-tec.webp`, `PaolaLenceria.webp`, etc. en `public/`:

```bash
# Mover las imágenes existentes a la nueva ubicación
mv public/om-tec.webp public/images/projects/om-tecnologia.webp
mv public/PaolaLenceria.webp public/images/projects/ecommerce-paola.webp
mv public/Tienduca.webp public/images/projects/tienduca-home.webp
mv public/bodega-mendocina.webp public/images/projects/bodega-mendocina.webp
```

---

## 📊 Imágenes Requeridas

| Nombre archivo          | Proyecto         | Estado       |
| ----------------------- | ---------------- | ------------ |
| `om-tecnologia.webp`    | OM Tecnología    | ⏳ Pendiente |
| `ecommerce-paola.webp`  | Paola Lencería   | ⏳ Pendiente |
| `tienduca-home.webp`    | Tienduca         | ⏳ Pendiente |
| `bodega-mendocina.webp` | Bodega Mendocina | ⏳ Pendiente |

---

## 💡 Tips de Capturas

**Para mejores screenshots:**

1. Abrí el sitio en modo incógnito (sin cookies/popups)
2. Zoom al 100%
3. Capturá desde el inicio de la página
4. Incluí el hero/sección principal
5. Si hay animaciones, esperá a que carguen

**Herramientas recomendadas:**

- [Screely](https://screely.com) - Agrega marcos profesionales
- [Screenshot.rocks](https://screenshot.rocks) - Mockups con navegador
- Chrome DevTools → Cmd/Ctrl + Shift + P → "Capture full size screenshot"
