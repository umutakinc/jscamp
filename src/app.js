// JS type safe değildir
let dolarDun = 9.20;
dolarDun = "9.20";

{
    let dolarDun = 9.10;
}

let dolarBugun = 9.30;

// Const ile değişkene bişey atadığında tekrar o değişkene başka değer atayamayız
const euroDun = 11.2;
// euroDun = 11; 

// array
// camelCasing
// PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Araba Kredisi"];

// for (let i = 0; i < konutKredileri.length; i++) {
//      console.log("<li>" + konutKredileri[i] + "</li>");
// }
let student = {id:1, name: "Umut"};

// default parametreyi en sona yazmak gerekir

// function save(ogrenci, puan=10) {
//     console.log(ogrenci.name + " : " + puan);
// }
// save(student, 100);

let students = ["Engin Demiroğ", "Umut Akıncı", "Engin Toprak"];

// console.log(students);

let students2 = [student, {id:2, name: "Halit"}, "Ankara", {id:3, name: "Kerem"}];

// console.log(students2);

// rest(Geriye kalanlar demek)
// istediğimiz kadar parametre gönderiyoruz, o array olarak tutuluyor
let showProducts = function (id,...products) {
    console.log(id);
    console.log(products[0]);
}

// showProducts(10, ["Elma","armut", "Karpuz"]);

// spread (Ayrıştırmak demek)
// elimizdeki arrayi ayrıştırıyoruz
let points = [1,2,3,50,60,14]
// console.log(...points)
// console.log(Math.max(...points));
// console.log(..."ABC", "D", ..."EFG", "H");

// Destructuring (Parçalamak demek)
// elimizdeki arraylerin değerlerini değişkene atama yöntemi
let populations = [10000, 20000, 30000, [40000, 50000]];
let [small,medium,high, [veryHigh, maximum]] = populations;
// console.log(small);
// console.log(medium);
// console.log(high);
// console.log(veryHigh);
// console.log(maximum);

function someFunction([small1], number) {
    console.log(small1);
}

// someFunction(populations);

let category = {id:1, name:"İçecek"};
// console.log(category.id);
// console.log(category["name"]);

let {id,name} = category;
// console.log(id);
// console.log(name);