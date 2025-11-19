# 📁 Carpeta de Imágenes de Proyectos

## 📸 Estructura Recomendada

Agregá tus imágenes de proyectos aquí con nombres descriptivos:

```
public/images/projects/
├── frontstock-dashboard.webp      (Sistema de gestión de stock)
├── frontstock-mobile.webp         (Vista móvil de FrontStock)
├── chatbot-whatsapp.webp          (Bot de WhatsApp)
├── chatbot-interface.webp         (Interfaz del ChatBot)
├── tienduca-home.webp             (Marketplace Tienduca)
├── tienduca-catalog.webp          (Catálogo de productos)
├── ecommerce-paola.webp           (E-commerce de lencería)
├── bodega-mendocina.webp          (Landing bodega)
├── om-tecnologia.webp             (Servicio técnico)
└── web-corporate.webp             (Ejemplo sitio corporativo)
```

## ✨ Especificaciones de Imágenes

### Formato

- **Preferido**: WebP (mejor compresión, soportado por navegadores modernos)
- **Alternativo**: JPG (95% calidad)
- **Evitar**: PNG (archivos muy pesados)

### Dimensiones

- **Ancho**: 1200px - 1600px
- **Alto**: 800px - 1000px
- **Ratio**: 16:9 o 3:2 (preferido para cards)

### Optimización

- **Peso máximo**: 200KB por imagen
- **Herramientas recomendadas**:
  - [Squoosh.app](https://squoosh.app/) - Optimizador online
  - [TinyPNG](https://tinypng.com/) - Comprimir JPG/PNG
  - [CloudConvert](https://cloudconvert.com/) - Convertir a WebP

### Contenido de las Capturas

- **Dashboard/Admin**: Mostrar vista con datos (difuminar info sensible)
- **Landing Pages**: Screenshot de hero section completo
- **E-commerce**: Catálogo de productos o página de producto
- **Mobile**: Usar mockups de dispositivos (iPhone/Android frames)

## 🎨 Placeholders Temporales

Mientras no tengas las imágenes reales, podés usar:

```
https://placehold.co/1200x800/2563eb/ffffff?text=FrontStock
https://placehold.co/1200x800/8B5CF6/ffffff?text=ChatBot
https://placehold.co/1200x800/10B981/ffffff?text=Tienduca
```

## 🔧 Cómo Usar las Imágenes

Una vez que agregues las imágenes aquí, actualizá el archivo:
`src/components/Projects.tsx`

Cambiá las rutas así:

```typescript
image: "/images/projects/frontstock-dashboard.webp",
```

## 📋 Checklist

- [ ] Crear capturas de FrontStock (dashboard principal)
- [ ] Crear capturas de ChatBot (interfaz de conversación)
- [ ] Screenshot de Tienduca (catálogo de emprendedores)
- [ ] Screenshot de E-commerce Paola Lencería
- [ ] Screenshot de Bodega Mendocina
- [ ] Screenshot de OM Tecnología
- [ ] Optimizar todas las imágenes a WebP < 200KB
- [ ] Actualizar rutas en Projects.tsx
- [ ] Verificar que todas las imágenes carguen correctamente

## 💡 Tips

1. **Screenshots profesionales**: Usa extensiones de Chrome como:

   - "Full Page Screen Capture"
   - "Awesome Screenshot"

2. **Mockups de dispositivos**: Usa herramientas como:

   - [Screely](https://screely.com) - Marcos automáticos
   - [Screenshot.rocks](https://screenshot.rocks) - Navegador + dispositivos

3. **Edición básica**:

   - Recortá para centrar lo importante
   - Ajustá brillo/contraste si es necesario
   - Difuminá información sensible (emails, nombres, etc.)

4. **Batch optimization**: Si tenés muchas imágenes, usá:
   - [ImageOptim](https://imageoptim.com/) (Mac)
   - [FileOptimizer](https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer) (Windows)
