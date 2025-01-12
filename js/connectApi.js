async function getProducts(){
    let peticion = await fetch("http://127.0.0.1:3001/products")
    let data = peticion.json()
    return data
}

async function addProduct(id, name, price, img){
    let peticion = await fetch("http://127.0.0.1:3001/products",{
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body : JSON.stringify({
            id:id,
            name:name,
            price:price,
            img:img
        })
    })
    let data = peticion.json()
    return data
}

async function deleteProduct(id){
    let peticion = await fetch(`http://127.0.0.1:3001/products/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        },
    })
    let data = peticion.json()
    return data
}

export const connectApi = {
    getProducts, addProduct, deleteProduct
}