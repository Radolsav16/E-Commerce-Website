function setData(email,token){
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)

}

function getToken(){
    return localStorage.getItem('token');
}


function getEmail(){
    return localStorage.getItem('email')
}

function clearData(){
    localStorage.clear();
}


export const localStorageApi = {
    setData,
    getToken,
    getEmail,
    clearData
} 