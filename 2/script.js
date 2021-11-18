let cart = [
    {id:1,productName:"telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"bardak",quantity:2,unitPrice:30},
    {id:3,productName:"kalem",quantity:1,unitPrice:20},
    {id:4,productName:"sarj aleti",quantity:2,unitPrice:100},
    {id:5,productName:"kitap",quantity:3,unitPrice:30},
    {id:6,productName:"pot",quantity:5,unitPrice:150}
]

//MAP FONKSIYONU

cart.map(product=>console.log(product.productName))
//sepeti dolas. Dolastigin her urun icin product adinda bir takma
//ismin olacak. =>dan sonra dolastigin her urun icin su hareketi yap
console.log('<ul>')
cart.map(product=>{
    console.log('<li>' + product.productName+ ':' + product.unitPrice * product.quantity + '</li>')
})
console.log('</ul>')



//REDUCE FONKSIYONU

let total = cart.reduce((acc, product)=>acc+ product.unitPrice * product.quantity,0)
console.log(total)
//syntax i bu sekilde. acc ilk degeri sifir. 



//FILTER FONKSIYONU

let quantityOver2 = cart.filter(product=>product.quantity>2)
//hepsini dolas. 2den buyuk olanlari goster
console.log(quantityOver2)



//DEGER TIP REFERANS TIP FARKI

function addToCart(sepet) {
    sepet.push({id:7,productName:"ruhsat",quantity:1,unitPrice:20})
}
addToCart(cart)
console.log(cart)
//Burada 7 eklendi. Cunku adrese atama yaptik


let sayi = 10
function sayiTopla(number) {
    number =+1   
}
sayiTopla(sayi)
console.log(sayi)
//Burada 1 sayiya eklenmedi cunku degere atama yaptik ve sayiyla isimiz bitti
