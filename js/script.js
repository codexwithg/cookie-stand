"use strict";

let stores = [
  // { store: "Seattle", minCust: 23, maxCust: 65, avgCookiesPerSale: 6.3 },
  // { store: "Tokyo", minCust: 3, maxCust: 24, avgCookiesPerSale: 1.2 },
  // { store: "Dubai", minCust: 11, maxCust: 38, avgCookiesPerSale: 3.7 },
  // { store: "Paris", minCust: 20, maxCust: 38, avgCookiesPerSale: 2.3 },
  // { store: "Lima", minCust: 2, maxCust: 16, avgCookiesPerSale: 4.6 },
  new Donutstand("Seattle", 23, 65, 6.3),
  new Donutstand("Tokyo", 3, 24, 1.2),
  new Donutstand("Dubai", 11, 38, 3.7),
  new Donutstand("Paris", 20, 38, 2.3),
  new Donutstand("Lima", 2, 16, 4.6),
];



let hours = ["11am", "12pm", "1pm", "2pm"];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// Loop through the stores and add a randCustPerHour key/value to each other

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
function Donutstand(name, minCust, maxCust, avgCookiesPerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlyDonuts = [];
  this.dailyDonuts = 0;
}

let tableElement = document.getElementById("sales-table");
let headingElement = document.getElementById("heading-row");

for (let h = 0; h < hours.length; h++) {
  let hourElement = document.createElement("th");
  hourElement.textContent = hours[h];
  headingRow.appendChild(hourElement)
  console.log(stores)
}
  
for (let i = 0; i < stores.length; i++) {
    let trElement = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = stores[i]
}