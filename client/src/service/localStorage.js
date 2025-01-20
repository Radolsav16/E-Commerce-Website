function setData(email,token,id){
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)
    localStorage.setItem('userId',id)

}

function getToken(){
    return localStorage.getItem('token');
}

function getUserId(){
    return localStorage.getItem('userId');
}


function getEmail(){
    return localStorage.getItem('email')
}

function setCartId(id){
    localStorage.setItem('cartId',id);
}

function clearData(){
    localStorage.clear();
}


export const localStorageApi = {
    setData,
    getToken,
    getEmail,
    clearData,
    getUserId,
    setCartId
} 