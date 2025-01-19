import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
    <footer className="bg-dark" id="tempaltemo_footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-success border-bottom pb-3 border-light logo">
         TrendyTime
        </h2>
      </div>
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-light border-bottom pb-3 border-light">
          Products
        </h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li>
            <Link className="text-decoration-none" to="/luxury">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/sports-wear">
              Sport Wear
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="/men">
              Men
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="/woman">
              Women
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/accessories">
              Accessories
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-light border-bottom pb-3 border-light">
          Further Info
        </h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li>
            <a className="text-decoration-none" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#">
              Shop
            </a>
          </li>
          <li>
            <Link className="text-decoration-none" to="/">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/">
              Regsiter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}