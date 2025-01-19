import { Link } from 'react-router-dom'

export default function Product({
  product
}) {
  return (
    <>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src={product.imageURL}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <Link to="/cart" className="btn btn-primary">
                  Add to Cart
                </Link>
                <Link href="/details" className="btn btn-secondary">
                  Details
                </Link>
              </div>
            </div>
          </div>
    </>
  );
}
