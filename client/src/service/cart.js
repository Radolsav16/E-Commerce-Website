import { requsterApi } from "./requster";

async function addCart(id){
    const url = 'http://localhost:3030/jsonstore/products/carts';

    const sendingData = {
        userId:id,
        cart:[]
    }

    await requsterApi.post(url,sendingData);
}