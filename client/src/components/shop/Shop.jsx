import { useEffect, useState } from "react";
import Product from "./product/Product";
import { requsterApi } from "../../service/requster.js";


export default function Shop(){
    const [items,setItems] = useState([]);

    useEffect(()=>{
        const url = 'http://localhost:3030/jsonstore/products';
        (async () => {
            try{
            const result = await requsterApi.get(url)
            setItems(Object.values(result))
            }catch(err){
                console.log(err);
            }
        })()
    },[])

  


    
    

    return(
        <>
             <div className="container mt-5">
             <div className="row">
            {items.map(product => <Product key = {product.name} product={product}/>)}
            </div>
            </div>
        </>
    )
}