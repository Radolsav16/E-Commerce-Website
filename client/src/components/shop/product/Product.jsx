import { Link } from 'react-router-dom'
import { requsterApi } from '../../../service/requster';
import { localStorageApi } from '../../../service/localStorage';

export default function Product({
  product
}) {

  const addToCart = async () => {
    const url = 'http://localhost:3030/jsonstore/products/carts';

    const res = await requsterApi.post(url,{products:[product._id]});

    localStorageApi.setCartId(res._id);


  }



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
                <Link to="/cart" className="btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </Link>
                <Link to={`/details/${product._id}`} className="btn btn-secondary">
                  Details
                </Link>
              </div>
            </div>
          </div>
    </>
  );
}
