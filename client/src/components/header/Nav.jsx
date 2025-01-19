import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { localStorageApi } from "../../service/localStorage";
import logout from "../../service/logout";

export default function Nav(){

  const [user,setUser] = useState(null);

    useEffect(()=>{
      (()=>{
       const email =  localStorageApi.getEmail();
       
       if(email){
        setUser(email);
       }
      })()
    },[]);

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
  <div className="container d-flex justify-content-between align-items-center">
    <Link
      className="navbar-brand text-success logo h1 align-self-center"
      to="/"
    >
      TrendyTime
    </Link>
    <button
      className="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#templatemo_main_nav"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
      id="templatemo_main_nav"
    >
      <div className="flex-fill">
        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          {user ? 
          <>
          <li className="nav-link">Welcome {user} !</li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">Logout</Link>
            </li>
          </>
          :  
          <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          </>
          }
        
        </ul>
      </div>
        <Link className="nav-icon position-relative text-decoration-none" to="/cart">
          <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
          <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
            0
          </span>
        </Link>
      </div>
    </div>
</nav>
        </>
    )
}