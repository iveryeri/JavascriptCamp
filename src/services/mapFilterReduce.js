let cart = [
    { id: 1, productName: "Mobile Phone", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Glass", quantity: 2, unitPrice: 30 },
    { id: 3, productName: "Pencil", quantity: 10, unitPrice: 20 },
    { id: 4, productName: "Charger", quantity: 2, unitPrice: 100 },
    { id: 5, productName: "Book", quantity: 3, unitPrice: 30 },
    { id: 6, productName: "VR Headset", quantity: 1, unitPrice: 5000 }
]

//MAP: Iterate in an array
cart.map(product => console.log(product.productName + " total price: " + product.quantity * product.unitPrice))

console.log("<ul>")
cart.map(product => {
    console.log("<li>" + product.productName + " total price: " + product.quantity * product.unitPrice + "</li>")
})
console.log("</ul>")

//REDUCE: acc:accumulator (ilk degerle baslayarak toplayarak gidiyor)
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log(total)

//SPA: Single page Application

function addToCart(sepet) {
    sepet.push({ id: 7, productName: "Phone Case", quantity: 1, unitPrice: 200 })
}

addToCart(cart);

console.log(cart);

let sayi = 10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)

//FILTER: Returns a new array with the filtered values
let quantityOver2 = cart.filter(product => product.quantity > 2)
console.log(quantityOver2)