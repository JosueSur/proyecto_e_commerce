// Mock de productos con categorías
export const productos = [
  {
    id: 1,
    nombre: 'Pan sin TACC',
    descripcion: 'Pan apto para celíacos, fresco y delicioso. Elaborado con harina de arroz y almidón de mandioca.',
    precio: 1200,
    imagen: '/src/assets/pan-sin-gluten-rodajas.jpg',
    categoria: 'panificados',
    stock: 15,
    detalles: 'Peso: 400g. Sin gluten, sin conservantes artificiales. Ideal para tostadas y sándwiches.'
  },
  {
    id: 2,
    nombre: 'Galletas de arroz',
    descripcion: 'Galletas crocantes, libres de gluten.',
    precio: 800,
    imagen: '/src/assets/galleta-de-arroz.jpg',
    categoria: 'snacks',
    stock: 25,
    detalles: 'Paquete de 200g. Perfectas para el desayuno o merienda. Sin azúcar agregada.'
  },
  {
    id: 3,
    nombre: 'Fideos de maíz',
    descripcion: 'Fideos sin gluten, ideales para pastas.',
    precio: 950,
    imagen: '/src/assets/fideos-de-maiz.jpg',
    categoria: 'pastas',
    stock: 30,
    detalles: 'Paquete de 500g. Tiempo de cocción: 8-10 minutos. Mantienen perfectamente la textura.'
  },
  {
    id: 4,
    nombre: 'Bizcochuelo sin TACC',
    descripcion: 'Bizcochuelo esponjoso apto para celíacos.',
    precio: 1800,
    imagen: '/src/assets/sin-tacc.png',
    categoria: 'postres',
    stock: 8,
    detalles: 'Bizcochuelo de vainilla de 600g. Perfecto para cumpleaños y celebraciones.'
  },
  {
    id: 5,
    nombre: 'Crackers de quinoa',
    descripcion: 'Crackers nutritivos elaborados con quinoa.',
    precio: 600,
    imagen: '/src/assets/sin-tacc2.png',
    categoria: 'snacks',
    stock: 20,
    detalles: 'Paquete de 150g. Alto contenido de proteínas y fibra. Sabor natural.'
  },
  {
    id: 6,
    nombre: 'Pan dulce sin gluten',
    descripcion: 'Pan dulce tradicional adaptado para celíacos.',
    precio: 2200,
    imagen: '/src/assets/pan-sin-gluten-rodajas.jpg',
    categoria: 'panificados',
    stock: 12,
    detalles: 'Pan dulce de 800g con frutas secas y nueces. Ideal para las fiestas.'
  }
];

// Función para simular fetch con delay
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

// Función para obtener productos por categoría
export const getProductosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
      resolve(productosFiltrados);
    }, 2000);
  });
};

// Función para obtener un producto por ID
export const getProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find(producto => producto.id === parseInt(id));
      if (producto) {
        resolve(producto);
      } else {
        reject('Producto no encontrado');
      }
    }, 2000);
  });
};
