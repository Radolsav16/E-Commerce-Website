import { Routes,Route } from "react-router-dom"
import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"
import Main from "./components/main/Main.jsx"
import About from "./components/about/About.jsx"
import Shop from "./components/shop/Shop.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"



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
      </Routes>
     <Footer />
    </>
  )
}

export default App
