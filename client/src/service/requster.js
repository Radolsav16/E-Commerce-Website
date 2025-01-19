async function requster(method,url,data) {
    const options = {
        method,
        headers:{
            'Content-Type':'application/json'
        }
    };
    
    if(data){
        options.body = JSON.stringify(data);
    }

    const res = await fetch(url,options);

    const result = await res.json();

    return result;
}

async function get(url) {
    return await requster('GET',url);
}

async function post(url,data) {
    return await requster('POST',url,data);
}


export const requsterApi = {
    get,
    post
}