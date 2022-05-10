import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Home } from "./Components/Home";
import { NotFound } from "./Components/NotFound";
import { AddProducts } from './Components/AddProducts'
import { Finish } from './Components/Finish'
import { Cart } from './Components/Cart'
function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route exact path="/" element={<Home />} />
      <Route path="add-products" element={<AddProducts/>} />  
      <Route path="cart" element={<Cart/>}/>  
      <Route path="finish" element={<Finish />}/>  
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
