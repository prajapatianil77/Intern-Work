let box = document.querySelector(".box")
async function getProduct(){
    let res = await fetch('https://dummyjson.com/products')
    let data= await res.json()
    // console.log(data.products)
    let products=''
    data.products.forEach(element => {
        products+=`<div class='i'>
        <img src='${element.thumbnail}'>
        <p>${element.title}<p>
        </div>`
    });
    box.innerHTML=products
}
getProduct()