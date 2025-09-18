// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDocs, getFirestore, collection, query, addDoc, where, doc, getDoc } from "firebase/firestore";
// Crear una orden de compra en Firestore
export async function crearOrdenCompra(order) {
  const ordersRef = collection(db, "orders");
  const docRef = await addDoc(ordersRef, order);
  return docRef.id;
}
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGAZrsmGwnZAyR2g9ACwBThtNO81tRSwQ",
  authDomain: "gluten-free-project.firebaseapp.com",
  projectId: "gluten-free-project",
  storageBucket: "gluten-free-project.firebasestorage.app",
  messagingSenderId: "931465287825",
  appId: "1:931465287825:web:cacc8721a78fe6a0c74730"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems(){
  const querySnapshot = await getDocs(collection(db, "productos"));
  // Eliminado console.log
}

// Obtener todos los productos desde Firestore
export async function getProductosFirestore() {
  const productosRef = collection(db, "productos");
  const querySnapshot = await getDocs(productosRef);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Obtener productos por categoría desde Firestore
export async function getProductosPorCategoriaFirestore(categoria) {
  const productosRef = collection(db, "productos");
  const q = query(productosRef, where("categoria", "==", categoria));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Obtener producto por ID desde Firestore
export async function getProductoPorIdFirestore(id) {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
}

// Función para cargar todos los productos a Firestore
import { productos } from './data/productos';

export async function cargarProductos() {
  const productosRef = collection(db, "productos");
  for (const producto of productos) {
    // Elimina el id para que Firestore genere uno único
    const { id, ...productoSinId } = producto;
    try {
      await addDoc(productosRef, productoSinId);
      // Eliminado console.log
    } catch (error) {
      // Puedes manejar el error si lo deseas
    }
  }
  // Eliminado console.log final
}