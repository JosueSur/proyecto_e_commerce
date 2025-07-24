import { Routes, Route } from "react-router-dom";
import Landing from "./containers/Landing";
import Home from "./containers/Home";
import "./index.css";

function App() {
  return (
    <div className="flex w-full h-full">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App