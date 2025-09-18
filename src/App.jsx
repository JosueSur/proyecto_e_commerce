import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import "./index.css";
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { useEffect } from "react";
import { getItems } from "./firebase";



function App() {
  useEffect(() => {
  getItems();
}, []);
  return (
    <UserProvider>
      <CartProvider>
        <div className="w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="home" element={<Home />} />
              <Route path="productos" element={
                <div className="flex items-center justify-center min-h-[80vh] px-8">
                  <ItemListContainer />
                </div>
              } />
              <Route path="categoria/:categoriaId" element={
                <div className="flex items-center justify-center min-h-[80vh] px-8">
                  <ItemListContainer />
                </div>
              } />
              <Route path="item/:id" element={
                <div className="flex items-center justify-center min-h-[80vh] px-8">
                  <ItemDetailContainer />
                </div>
              } />
              <Route path="carrito" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </CartProvider>
    </UserProvider>
  )
}

export default App