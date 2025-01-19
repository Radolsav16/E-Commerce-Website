import { useEffect, useState } from "react";
import Product from "./product/Product";
import { requsterApi } from "../../service/requster";


export default function Shop(){
    const [data,setData] = useState({});

    useEffect(()=>{
        const url = 'http://localhost:3030/jsonstore/products';
        (async () => {
            try{
            const result = await requsterApi.get(url)
            setData(Object.values(result.products));
            }catch(err){
                console.log(err);
            }
        })()
    },[])


    return(
        <>
             <div className="container mt-5">
             <div className="row">
            {data.map(product => <Product key = {product._id} product={product}/>)}
            </div>
            </div>
        </>
    )
}