import { Routes, Route } from "react-router-dom";
import Landing from "./containers/Landing";
import Home from "./containers/Home";
import "./index.css";
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <div className="flex w-full h-full">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </CartProvider>
    </UserProvider>
  )
}

export default App