//Tipler
let dolarDun = 9.20
let dolarBugun = 9.30
{
    let dolarDun = 9.10
}
console.log(dolarDun)
const euroDun = 11.2
// euroDun = 11  bunu yapamayiz
console.log(euroDun)

//Array
let konutKredileri = ['konut kredisi','emlak konut kredisi', 'kamu konut kredisi']
let list = ''
for (let i = 0; i < konutKredileri.length; i++) {
    list += '<li>' + konutKredileri[i] + '</li>'
    
}
document.getElementById('demo1').innerHTML = '<ul>' + list + '</ul>'

//functions
function addToCart(productName,quantity) {
    console.log('sepete eklendi: ' + productName + ' adet:   ' + quantity)    
}
//addToCart()
addToCart('limon',10)

let sayHello = ()=>{
    console.log('hello')
}
sayHello()

let sayHello2 = function(){
    console.log('hello2')
}
sayHello2()


let product1 = {productName:'elma',unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log('urun: ' + product.productName + ' adet: ' + product.quantity + ' fiyat: ' + product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:'elma',unitPrice:10,quantity:5}
let product3 = {productName:'elma',unitPrice:10,quantity:5}
product2 = product3
product2.productName='Karpuz'
console.log(product3.productName)
//

let sayi1 = 10
let sayi2 = 20
sayi1=sayi2
sayi2=100
console.log(sayi1)