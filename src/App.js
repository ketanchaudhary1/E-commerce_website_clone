import { Route, Routes } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Categories from "./categories";
import Basket from "./basket";
import Login from "./login";
import Register from "./register";
import Products from "./products";
import Contact from "./contact";
import Profile from "./profile";
import Logout from "./logout";

function App() {
  return (
    <div>
      <Header/>
      <hr/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Categories/>} />
          <Route path="/products/:mid" element={<Products/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
