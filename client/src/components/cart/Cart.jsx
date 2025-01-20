import { useEffect, useState } from "react";
import CartItem from "./cartItem/cartItem";
import { requsterApi } from "../../service/requster";
import { localStorageApi } from "../../service/localStorage";

export default function Cart() {
    const id = 'user123';

    const [cart,setCart] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const url = 'http://localhost:3030/jsonstore/carts';
            const carts = Object.values(await requsterApi.get(url));
            const currentcart = carts.find(cart => cart.userId === id);

            
            setCart(currentcart.items);
            
        })()
    },[]);

    // console.log(cart)

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">Your Cart</h1>
        <div className="row">
            {cart.map(item =>  <CartItem key={item.productId} cartInfo = {item} /> )}
           
        </div>
      </div>
    </>
  );
}
