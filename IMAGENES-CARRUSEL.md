# 📸 Guía de Imágenes para Carrusel de Proyectos

## 🎯 Nueva Estructura con Carrusel

Cada proyecto ahora tiene **3 imágenes** que se muestran en un carrusel automático.

### 📁 Imágenes Requeridas

#### OM Tecnología (3 imágenes)

```
/images/projects/om-tecnologia.webp        → Página principal/Hero
/images/projects/om-tecnologia-2.webp      → Sección de servicios
/images/projects/om-tecnologia-3.webp      → Panel de seguimiento
```

#### Ecommerce Paola Lencería (3 imágenes)

```
/images/projects/ecommerce-paola.webp      → Home/Catálogo principal
/images/projects/ecommerce-paola-2.webp    → Página de producto
/images/projects/ecommerce-paola-3.webp    → Carrito de compras
```

#### Tienduca (3 imágenes)

```
/images/projects/tienduca-home.webp        → Página principal
/images/projects/tienduca-catalog.webp     → Catálogo por categorías
/images/projects/tienduca-detail.webp      → Detalle de emprendedor
```

#### Bodega Mendocina (3 imágenes)

```
/images/projects/bodega-mendocina.webp     → Hero con viñedos
/images/projects/bodega-mendocina-2.webp   → Sección de vinos
/images/projects/bodega-mendocina-3.webp   → Galería/Contacto
```

---

## ✨ Características del Carrusel

- ✅ **Autoplay**: Cambia automáticamente cada 3 segundos
- ✅ **Navegación**: Flechas izquierda/derecha (aparecen al hacer hover)
- ✅ **Paginación**: Puntos indicadores en la parte inferior
- ✅ **Loop**: Vuelve al inicio después de la última imagen
- ✅ **Pausa**: Se pausa al pasar el mouse
- ✅ **Contador**: Muestra "1/3", "2/3", "3/3" en cada imagen
- ✅ **Fallback**: Si una imagen no existe, muestra placeholder automático

---

## 📐 Especificaciones de las Imágenes

### Formato y Tamaño

- **Formato**: WebP (recomendado) o JPG
- **Dimensiones**: 1200x800px (ratio 3:2)
- **Peso**: < 200KB por imagen
- **Altura en pantalla**: 256px (h-64)

### Contenido Sugerido por Imagen

#### Primera imagen (Principal)

- Hero section o página de inicio
- Vista general del proyecto
- La más impactante visualmente

#### Segunda imagen (Funcionalidad)

- Sección importante del sitio
- Catálogo de productos
- Dashboard o panel de control
- Funcionalidad clave

#### Tercera imagen (Detalle)

- Página de producto/servicio
- Formulario de contacto
- Carrito de compras
- Sección "Sobre Nosotros"
- Vista mobile (opcional)

---

## 🎨 Tipos de Capturas Recomendadas

### Landing Pages

1. Hero completo (con CTA)
2. Sección de servicios/características
3. Formulario de contacto

### E-commerce

1. Página principal con productos destacados
2. Página de producto individual
3. Carrito o checkout

### Web Apps

1. Dashboard/Vista principal
2. Funcionalidad clave en acción
3. Configuraciones o perfil

---

## 🛠️ Cómo Capturar las Imágenes

### Opción 1: Screenshots Completos

```bash
1. Abre Chrome DevTools (F12)
2. Cmd/Ctrl + Shift + P
3. Escribe "Capture full size screenshot"
4. Guarda la imagen
```

### Opción 2: Extensiones de Chrome

- **Full Page Screen Capture** - Captura completa
- **Awesome Screenshot** - Edición incluida
- **GoFullPage** - Screenshots largos

### Opción 3: Herramientas Online

- [Screely.com](https://screely.com) - Agrega marcos profesionales
- [Screenshot.rocks](https://screenshot.rocks) - Mockups con navegador

---

## 🔧 Optimización Rápida

### Usando Squoosh.app

1. Ve a [squoosh.app](https://squoosh.app/)
2. Arrastra tu imagen
3. Selecciona **WebP** en la derecha
4. Ajusta calidad al **85%**
5. Resize a **1200px** de ancho
6. Descarga (debería ser < 200KB)

### Batch (múltiples imágenes)

- **ImageOptim** (Mac)
- **FileOptimizer** (Windows)
- **cwebp** (terminal): `cwebp -q 85 input.jpg -o output.webp`

---

## 📋 Checklist Completo

### OM Tecnología

- [ ] om-tecnologia.webp (Home)
- [ ] om-tecnologia-2.webp (Servicios)
- [ ] om-tecnologia-3.webp (Panel)

### Ecommerce Paola

- [ ] ecommerce-paola.webp (Catálogo)
- [ ] ecommerce-paola-2.webp (Producto)
- [ ] ecommerce-paola-3.webp (Carrito)

### Tienduca

- [ ] tienduca-home.webp (Principal)
- [ ] tienduca-catalog.webp (Categorías)
- [ ] tienduca-detail.webp (Detalle)

### Bodega Mendocina

- [ ] bodega-mendocina.webp (Hero)
- [ ] bodega-mendocina-2.webp (Vinos)
- [ ] bodega-mendocina-3.webp (Galería)

**Total**: 12 imágenes

---

## 💡 Tips Profesionales

1. **Consistencia**: Todas las imágenes del mismo proyecto con zoom similar
2. **Calidad**: Capturas en alta resolución (después optimizar)
3. **Limpieza**: Sin popups, cookies banners, o errores visibles
4. **Datos reales**: Si es posible, usa contenido real (difumina info sensible)
5. **Mobile**: Considera agregar 1 captura mobile por proyecto
6. **Navegadores**: Usa Chrome en modo incógnito para capturas limpias

---

## 🚀 Resultado Final

Cada proyecto mostrará un carrusel elegante con:

```
┌─────────────────────────────────┐
│  ← [IMAGEN 1/3] →              │ ← Flechas al hacer hover
│                                 │
│                          [1/3]  │ ← Contador
│        • • •                    │ ← Paginación
└─────────────────────────────────┘
  Título del Proyecto
  Descripción...
  [React] [Tailwind] [Firebase]
  🔗 Ver Proyecto
```

¡Las imágenes se cambiarán automáticamente cada 3 segundos! ✨
