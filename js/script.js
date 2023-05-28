'use strict';

//STEP 1: grab form element from DOM

console.log("hello world")

// STEP 2: define handleSubmit function

// STEP 3: add event listener for the event

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// Loop through the stores and add a randCustPerHour key/value to each other
let stores = [
  new Donutstand("Seattle", 23, 65, 6.3),
  new Donutstand("Tokyo", 3, 24, 1.2),
  new Donutstand("Dubai", 11, 38, 3.7),
  new Donutstand("Paris", 20, 38, 2.3),
  new Donutstand("Lima", 2, 16, 4.6),
];

let hours = ["11am", "12pm", "1pm", "2pm"];

// console.log(store);

// for (let store of stores) {
//   store["amountPurchasedPerHour"] = [];

//   for (let hour of hours) {
//     let randomInteger = getRandomInt(store["minCust"], store["maxCust"]);
//     // console.log(store["amountPurchasedPerHour"])

//     store["amountPurchasedPerHour"].push(
//       Math.floor(randomInteger * store["avgCookiesPerSale"])
//     );
//   }
// }
// console.log(stores);

// for (let store of stores) {
//   let salesSection = document.getElementById("sales");
//   let headingElem = document.createElement("h2");
//   headingElem.textContent = store["store"];
//   salesSection.appendChild(headingElem);

//   let ulElem = document.createElement("ul");
//   salesSection.appendChild(ulElem);
//   let total = 0;
//   for (let index in store["amountPurchasedPerHour"]) {
//     let liElem = document.createElement("li");
//     liElem.textContent = `${hours[index]}: ${store["amountPurchasedPerHour"][index]} Donuts`;
//     ulElem.appendChild(liElem);

//     total += store["amountPurchasedPerHour"][index];
//   }

//   let totalLiElem = document.createElement("li");
//   totalLiElem.textContent = `Total: ${total} Donuts`;
//   ulElem.appendChild(totalLiElem);
// }

// (For Lab 07)
let tableElem = document.getElementById("sales-table");
let headingElem = document.getElementById("heading-row");

function Donutstand(name, minCust, maxCust, avgCookiesPerSale) {
  //Input data:
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerSale = avgCookiesPerSale;
  //Calculated data:
  this.hourlyDonuts = [];
}

//This will provide the names of the locations.
Donutstand.prototype.render = function () {
  let salesElem = document.getElementById("sales-table");
  let cityElement = document.createElement("tr");
  cityElement.textContent = this.name;
  salesElem.appendChild(cityElement);
  console.log(cityElement);
}

//This will calculate the random data for the store sales per hour.
Donutstand.prototype.calculate = function () {
  let minCust = this.minCust;
  let maxCust = this.maxCust;
  let avg = this.avgCookiesPerSale;

  for (let i = 0; i < this.length; i++) {
    let randomInteger = getRandomInt(minCust, maxCust);
    let donutSalesThisHour = Math.floor(randomInteger * avg);
    this.hourlyDonuts.push(donutSalesThisHour);
  }
}

Donutstand.prototype.render = function () {
  let root = document.getElementById("sales-data");
  let storeDataElem = document.createElement("tr");

  let storeNameElem = document.createElement("td");
  storeNameElem.textContent = this.name;
  storeDataElem.appendChild(storeNameElem);

  for (let sales of this.hourlyDonuts) {
    let salesElem = document.createElement("td");
    salesElem.textContent = `${sales} for this hour`;
    storeDataElem.appendChild(salesElem);
  }
}

// 1. create objects
let seattle = new Donutstand("Seattle", 23, 65, 6.3);
let tokyo = new Donutstand("Tokyo", 3, 24, 1.2);
let dubai = new Donutstand("Dubai", 11, 38, 3.7);
let paris = new Donutstand("Paris", 20, 38, 2.3);
let lima = new Donutstand("Lima", 2, 16, 4.6);

// 2. create array
let locations = [seattle, tokyo, dubai, paris, lima];

// 3. loop through array
for (let store of locations) {
  store.calculate(); 
  store.render();
}

// seattle.calculate();
//calculateHours(seattle);
seattle.render();
// render(Seattle);

console.log(seattle);

// for (let i = 0; i < stores.length; i++) {
//   let trElement = document.createElement("td");
//   let td = document.createElement("td");
//   td.textContent = stores[i];
//   salesTable.appendChild(storeElem);
// }


for (let store of stores) {
  store.render();
}
