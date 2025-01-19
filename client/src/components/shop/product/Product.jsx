import { Link } from "react-router-dom"
import ProductHeader from "./ProductHeader"
export default function Product(){
    return(
        <>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_01.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="btn btn-success text-white mt-2"
                      to='/details'
                    >
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="btn btn-success text-white mt-2"
                      to="/cart"
                    >
                      <i className="fas fa-cart-plus" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}