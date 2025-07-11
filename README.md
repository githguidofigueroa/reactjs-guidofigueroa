# Elite Notebooks 💻

## Descripción del proyecto

E-commerce de notebooks de alta gama para profesionales y gamers en Argentina. Desarrollado como proyecto final del curso de React en CoderHouse.

### Objetivos
- Catálogo de productos con filtrado por categorías
- Carrito de compras funcional
- Detalle de productos individuales
- Interfaz responsive y moderna
- Integración con Firebase Firestore

## Tecnologías utilizadas

- **React 18** + **Vite** - Framework y bundler
- **CSS nativo** - Estilos personalizados con variables CSS
- **Firebase Firestore** - Base de datos en la nube
- **React Router** - Navegación entre páginas
- **Context API** - Gestión de estado global

## Estructura de carpetas

```
src/
├── components/          # Componentes React
│   ├── CartDropdown.jsx
│   ├── CartWidget.jsx
│   ├── CategoriasMenu.jsx
│   ├── Footer.jsx
│   ├── Item.jsx
│   ├── ItemCount.jsx
│   ├── ItemDetail.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   ├── NavBar.jsx
│   └── NotFound.jsx
├── context/            # Contextos de React
│   ├── CartContext.jsx
│   └── ThemeContext.jsx
├── firebase/           # Configuración de Firebase
│   └── config.js
├── assets/             # Recursos estáticos
│   └── img/
└── data.js            # Datos mock (ya no se usa)
```

## Instalación y ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/reactjs-guidofigueroa.git
cd reactjs-guidofigueroa
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Build para producción**
```bash
npm run build
```

## Configuración de Firebase

### Configuración
La configuración de Firebase está en `src/firebase/config.js` con las claves embebidas para desarrollo.

### Base de datos
- **Colección:** `productos`
- **Campo categoria:** Sin tildes, minúsculas (ej: "gamer", "programacion")

### Estructura de un documento de producto
```json
{
  "nombre": "Dell XPS 15",
  "precio": 1550000,
  "categoria": "programacion",
  "detalles": "Notebook de alta gama ideal para desarrollo...",
  "imagen": "https://tu-dominio.com/img/dell-xps-15.jpg"
}
```

## Imágenes

Las imágenes están almacenadas en `public/img/` y se referencian con URLs relativas en Firestore.

### Ejemplo de URL en Firestore
```
https://elite-notebooks.vercel.app/img/dell-xps-15.jpg
```

## Características principales

- ✅ **Catálogo dinámico** desde Firestore
- ✅ **Filtrado por categorías** (Programación, Arquitectura, Gamer, Diseño, Oficina)
- ✅ **Carrito de compras** con persistencia
- ✅ **Detalle de productos** individuales
- ✅ **Diseño responsive** para móviles y desktop
- ✅ **Tema claro/oscuro** con persistencia
- ✅ **Navegación** con React Router
- ✅ **Estados de carga** con spinners

## Deploy

### URL de producción
🌐 **https://elite-notebooks.vercel.app**

### Deploy en Vercel
1. Conectar repositorio de GitHub a Vercel
2. Configurar variables de entorno si es necesario
3. Deploy automático en cada push a main

## Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

## Autor

**Guido Figueroa** - Desarrollador Full Stack
- CoderHouse - React JS
- 2024

---

⭐ **¡Gracias por visitar Elite Notebooks!**
