import { connectApi } from "./connectApi.js"

document.addEventListener('DOMContentLoaded', setTimeout(() => {

    let products = document.querySelectorAll(".product__element__ico-delete")

    console.log(products)
    async function deleteProduct(e, id){
        console.log("click detectado")
        e.preventDefault()

        const product = await connectApi.deleteProduct(id)

        console.log(product)
    }


    products.forEach( element => {
        element.addEventListener("click", (e)=>{
            deleteProduct(e, element.getAttribute('data-id'))
        })
    })
},1000))
