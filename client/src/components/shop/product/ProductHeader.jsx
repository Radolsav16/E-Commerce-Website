import { Link } from "react-router-dom"
export default function ProductHeader(){
    return(
        <>
             <div className="col-md-6">
          <ul className="list-inline shop-top-menu pb-3 pt-1">
            <li className="list-inline-item">
              <Link className="h3 text-dark text-decoration-none mr-3" to="/men">
                Men's
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="h3 text-dark text-decoration-none" to="/woman">
                Women's
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 pb-4">
          <div className="d-flex">
            <select className="form-control">
              <option>Sort by price</option>
              <option>Sort A to Z</option>
              <option>Sort Z to A</option>
            </select>
          </div>
        </div>
        </>
    )
}