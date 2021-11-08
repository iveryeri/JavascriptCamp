<<<<<<< HEAD
function addToCartv1(quantity, productName = "water") {
    console.log("Sepete eklendi: " + productName + ", adet: " + quantity);
}

addToCartv1(2, 2);
addToCartv1(10, "egg");
addToCartv1(1, "watermellon");

console.log('---')

let product1 = {
    productName: "apple",
    unitPrice: 10,
    quantity: 5
}

function addToCartv2(product) {
    console.log("Sepete eklendi: " + product.productName + ", adet: " + product.quantity + ", fiyat: " + product.unitPrice + " tl.");
    product.productName

}

addToCartv2(product1)

console.log('---')

function addToCartv3(products) {
    console.log(products)

}


let products = [
    { productName: "tursu", unitPrice: 6.5, quantity: 2 },
    { productName: "marul", unitPrice: 4.5, quantity: 4 }
]

addToCartv3(products)

function add(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
}

let numbers = [10, 15, 20, 500, 100];
console.log(...numbers);
console.log(numbers);
console.log(Math.max(...numbers));
console.log(Math.max(numbers));

console.log('---')

add(20, 30)
add(20, 30, 40)
add(20, 30, 40, 50)

console.log('---')

let newA, newB;
({ a: newA, b: newB } = { a: "elma", b: 5 })

console.log(newA)
console.log(newB)
=======
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
