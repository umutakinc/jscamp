console.log("Merhaba");

// JS type safe değildir
let dolarDun = 9.20;
dolarDun = "9.20";

{
    let dolarDun = 9.10;
}

let dolarBugun = 9.30;

console.log(dolarDun);

// Const ile değişkene bişey atadığında tekrar o değişkene başka değer atayamayız
const euroDun = 11.2;
// euroDun = 11; 

console.log(euroDun);

// array
// camelCasing
// PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Araba Kredisi"];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
     console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");


console.log(konutKredileri);