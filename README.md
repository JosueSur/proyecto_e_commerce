# Proyecto E-Commerce GlutenFree

## Descripción
E-commerce desarrollado en React + Vite para la venta de productos sin TACC (gluten free). Utiliza Firebase Firestore como base de datos para almacenar productos y registrar órdenes de compra.

## Funcionalidades principales
- Listado dinámico de productos y detalle individual, obtenidos desde Firestore.
- Filtrado por categorías.
- Carrito de compras global con Context API.
- Suma, resta y eliminación de productos en el carrito.
- Checkout con formulario de usuario y registro de orden en Firestore.
- Descuento automático de stock al confirmar la compra.
- Renderizado condicional de loaders y mensajes (carrito vacío, sin stock, etc).
- Visualización del ID de la orden generada tras la compra.

## Estructura de carpetas
- `/src/components`: Componentes de presentación (Item, ItemList, ItemDetail, ItemCount, CartWidget, NavBar, etc).
- `/src/containers`: Componentes contenedores con lógica de datos (ItemListContainer, ItemDetailContainer).
- `/src/contexts`: Contextos globales (CartContext, UserContext).
- `/src/pages`: Vistas principales (Home, Landing, Layout, NotFound, CartPage, CheckoutPage).
- `/src/data`: Mock de productos (solo para carga inicial).
- `/src/firebase.js`: Configuración y funciones de Firestore.

## Tecnologías utilizadas
- React 19
- Vite
- Firebase (Firestore)
- TailwindCSS
- React Router DOM

## Cómo ejecutar
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el proyecto:
   ```bash
   npm run dev
   ```

## Notas
- Para cargar productos iniciales a Firestore, usar la función `cargarProductos()` de `firebase.js` solo una vez.
- El proyecto está preparado para ser extendido con autenticación, panel de administración, etc.

---
Desarrollado por JosueSur, 2025.
