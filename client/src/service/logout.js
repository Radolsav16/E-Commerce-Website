
import { requsterApi } from "./requster";
import { localStorageApi } from "./localStorage";

export default async function logout(){

    try{
    const url = 'http://localhost:3030/users/logout';
    const res = await requsterApi.get(url);
    localStorageApi.clearData(); 
    }catch(err){

    }
}