import { Link } from "react-router-dom";

export default function StartCategorie(){
    return(
        <>
        <section className="container py-5">
  <div className="row text-center pt-3">
    <div className="col-lg-6 m-auto">
      <h1 className="h1">Categories</h1>
      <p>
      Explore trendy and timeless clothing options for every occasion, with styles that suit everyone in the family.
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-12 col-md-4 p-5 mt-3">
      <Link to="/shop">
        <img
          src="./assets/img/category_img_01.jpg"
          className="rounded-circle img-fluid border"
        />
      </Link>
      <h5 className="text-center mt-3 mb-3">Watches</h5>
      <p className="text-center">
        <Link className="btn btn-success" to="/shop">Go Shop</Link>
      </p>
    </div>
    <div className="col-12 col-md-4 p-5 mt-3">
      <Link to="/shop">
        <img
          src="./assets/img/category_img_02.jpg"
          className="rounded-circle img-fluid border"
        />
      </Link>
      <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
      <p className="text-center">
        <Link className="btn btn-success" to="/shop">Go Shop</Link>
      </p>
    </div>
    <div className="col-12 col-md-4 p-5 mt-3">
      <Link to="/shop">
        <img
          src="./assets/img/category_img_03.jpg"
          className="rounded-circle img-fluid border"
        />
      </Link>
      <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
      <p className="text-center">
        <Link className="btn btn-success" to="shop">Go Shop</Link>
      </p>
    </div>
  </div>
</section>
        </>
    )
}