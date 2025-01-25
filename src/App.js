import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Navbar.css"; 
// import "./ProfilePage.css";
import "./App.css"; 
import Profile from "./Navbars/Profile";
import Login from "./Navbars/Login";
import Register from "./Navbars/Register";
import Products from "./Navbars/Products";
import Cart from "./Navbars/Cart";
import Header from "./Navbars/Header";
import TodoList from "./Navbars/TodoList";

// import { SignedIn } from "@clerk/clerk-react";
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <TodoList/>
    </Router>
  );
};
export default App;
