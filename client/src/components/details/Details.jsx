import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { requsterApi } from "../../service/requster";

export default function Details(){
    const params = useParams();

    const [item,setItem] = useState({});

    const id = params.id;

    useEffect(()=>{
        (async()=>{
            const url = `http://localhost:3030/jsonstore/products/${id}`
            const res = await requsterApi.get(url);
            setItem(res);
        })();
    },[]);

    
    return(
        <>
        <div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      
      <img
        src={item.imageURL}
        className="img-fluid product-image"
        alt={item.name}
      />
    </div>
    <div className="col-md-6">
      <h1 className="mb-4">{item.name}</h1> <p className="lead">${item.price}</p>
      <p>
        {item.description}
      </p>
      <Link href="/cart" className="btn btn-primary">
        Add to Cart
      </Link>
      <Link to="/shop" className="btn btn-secondary">
        Back to Shop
      </Link>
    </div>
  </div>
</div>

        </>
    )
}