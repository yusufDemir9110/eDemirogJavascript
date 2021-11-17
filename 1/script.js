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


let sayi1 = 10
let sayi2 = 20
sayi1=sayi2
sayi2=100
console.log(sayi1)
//Burda deger tip durumu soz konusu. Deger tiplerde degeri atadigin zaman
//isin biter. Degeri direkt degere atamis olursun.

let product2 = {productName:'elma',unitPrice:10,quantity:5}
let product3 = {productName:'elma',unitPrice:10,quantity:5}
product2 = product3
product2.productName='Karpuz'
console.log(product3.productName)
//Obje ve arraylerde ise referans tip soz konusudur. Birbirine esitlendikleri 
//zaman birbirlerinin adresine esitlenirler,degerlerine degil.




function addToCart4(x) {
    console.log(products)
}
//Bu sekilde yazdigimizda icerdeki console log producta bakiyor {} icinde var mi diye
//yoksa bir uste cikiyor orada da alttaki products i goruyor
let products = [
    {productName:'elma',unitPrice:10,quantity:5},
    {productName:'armut',unitPrice:10,quantity:5},
    {productName:'karpuz',unitPrice:10,quantity:5}
]
addToCart4(products)



//istedigimiz kadar parametre gondermek istiyoruz
//rest operatoru ...
function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }    
    console.log(total)
}
add(20,30,40)
add(20,30,40,50)



let numbers=[8,9,4,7,2]
console.log(Math.max(...numbers))
// ... ayni zamanda arrayin elemanlarini ayristirir


//Array i objelere atadik. API lerden gelen verileri hizlica parcalamaya yarar
let [icAnadolu, marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"Ic Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"20M"},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu.population)
console.log(marmara.name)
console.log(icAnadoluSehirleri[0])//kendi icinde bir daha parcaladik


//Objenin elemanlarini degiskenlere atamak istiyoruz
let newProductName, newUnitPrice,newQuantity
({productName:newProductName, unitPrice:newUnitPrice,quantity:newQuantity} = {productName:'elma',unitPrice:10,quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
