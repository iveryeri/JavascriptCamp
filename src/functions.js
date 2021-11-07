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