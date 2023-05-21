// "use strict";

// let stores = [
//   { store: "Seattle", minCust: 23, maxCust: 65, avgCookiesPerSale: 6.3 },
//   { store: "Tokyo", minCust: 3, maxCust: 24, avgCookiesPerSale: 1.2 },
//   { store: "Dubai", minCust: 11, maxCust: 38, avgCookiesPerSale: 3.7 },
//   { store: "Paris", minCust: 20, maxCust: 38, avgCookiesPerSale: 2.3 },
//   { store: "Lima", minCust: 2, maxCust: 16, avgCookiesPerSale: 4.6 },
// ];

// let hours = ["11am", "12pm", "1pm", "2pm"];

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// // Loop through the stores and add a randCustPerHour key/value to each other

// // console.log(store);

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

getRandomCust() {
  return 
    Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) +
    this.minCust;
}
  
simulateHourlyCookies() {
  const hourlyDonuts = [];

  for (let hour = 6; hour <= 19; hour++) {
    const cust = this.getRandomCust();
    const cookies = Math.round(cust * this.avgCookiesPerSale);
    hourlyDonuts.push(cookies);
  }

  this.hourlyDonuts = hourlyDonuts;
}

calculateDailyDonuts() {
  const dailyDonuts = this.hourlyDonuts.reduce((sum, cookies) => sum + cookies);
  this.dailyDonuts = dailyDonuts;
}

render(table) {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  row.appendChild(namecell);

  for (const cookies of this.hourlyDonuts) {
    const cell = document.createElement('td');
    cell.textContent = cookies;
    row.appendChild(cell);

    const totalCell = document.createElement('td');
    totalCell.textContent = this.dailyDonuts;
    row.appendChild(totalCell);

    table.appendChild(row);
  }
}

const Donutstand = [
  new Donutstand('Seattle', 23, 65, 6.3),
  new Donutstand('Tokyo', 3, 24, 1.2),
  new Donutstand('Dubai', 11, 38, 3.7),
  new Donutstand('Seattle', 20, 38, 2.3),
  new Donutstand('Seattle', 20, 38, 2.3),
  new Donutstand('Seattle', 23, 65, 4.6),
];

for (const Donutstand of Donutstands){
  Donutstand.simulateHourlyCookies();
Donutstand.calculateDailyDonuts();

const table = document.createElement('table');

const headerRow = document.createElement('tr');
const emptyHeader = document.createElement('th');
headerRow.appendChild(header);
}

const totalHeader = document.createElement('th');
totalHeader.textContent = 'Daily Location Total';
headerRow.appendChild(totalHeader);

table.appendChild(headerRow);

for (const Donutstand of Donutstands) {
  Donutstand.render(table);
}