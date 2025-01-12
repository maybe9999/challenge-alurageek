import { connectApi } from "./connectApi.js"
import { mostrarProductos } from "./mostrarProductos.js"

let nombreAddProduct = document.querySelector("[data-name]")
let priceAddProduct = document.querySelector("[data-price]")
let imageAddProduct = document.querySelector("[data-img]")

let buttonFormSend = document.querySelector(".add-product__send")
let buttonFormClear = document.querySelector(".add-product__clear")

function clearForm(e){
    e.preventDefault()

    nombreAddProduct.value = ""
    priceAddProduct.value = ""
    imageAddProduct.value = ""
}

async function createNewProduct(e, id, name, price, img){
    e.preventDefault()
    
    let producto = await connectApi.addProduct(id, name, price, img);

    mostrarProductos.listProducts()
}

buttonFormClear.addEventListener("click", (e) => clearForm(e))
buttonFormSend.addEventListener("click", (e) => {
    e.preventDefault()
    createNewProduct(e, "2333", nombreAddProduct.value, priceAddProduct.value, imageAddProduct.value)
})

