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

