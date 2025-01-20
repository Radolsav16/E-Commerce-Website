import { Routes,Route } from "react-router-dom"
import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"
import Main from "./components/main/Main.jsx"
import About from "./components/about/About.jsx"
import Shop from "./components/shop/Shop.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import Logout from "./components/logout/Logout.jsx"
import Details from "./components/details/Details.jsx"
import Cart from "./components/cart/Cart.jsx"



function App() {


  return (
    <>
    <Header />
      <Routes>
        <Route  path="/" element= {<Main />}/>
        <Route  path="/about" element= {<About />}/>
        <Route  path="/shop" element= {<Shop />}/>
        <Route  path="/login" element= {<Login />}/>
        <Route  path="/register" element= {<Register />}/>
        <Route  path="/logout" element= {<Logout />}/>
        <Route  path="/details/:id" element= {<Details />}/>
        <Route  path="/cart" element= {<Cart />}/>
      </Routes>
     <Footer />
    </>
  )
}

export default App
