"use strict";

let stores = [
    { store: "Seattle", minCust: 23, maxCust: 65, avgCookiesPerSale: 6.3, },
    { store: "Tokyo", minCust: 3, maxCust: 24, avgCookiesPerSale: 1.2 },
    { store: "Dubai", minCust: 11, maxCust: 38, avgCookiesPerSale: 3.7 },
    { store: "Paris", minCust: 20, maxCust: 38, avgCookiesPerSale: 2.3 },
    { store: "Lima", minCust: 2, maxCust: 16, avgCookiesPerSale: 4.6 },
];

let hours = ["11am", "12pm", "1pm", "2pm"];


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
  
// Loop through the stores and add a randCustPerHour key/value to each other
for (let store of stores) {
    store['avgCookiesPurchased'] = getRandomInt(
        store['minCust'],
        store['maxCust']
    );
    // console.log(store);


    for (let store of stores) {
        store["amountPurchasedPerHour"] = [];

        for (let hour of hours)
        
            // console.log(store["amountPurchasedPerHour"])
        
            store["amountPurchasedPerHour"].push(
             Math.floor (store["avgCookiesPurchased"] * store["avgCookiesPerSale"])
            );
    }
}
console.log(stores);

let seattleDivElement = document.getElementById("seattle")
let seattleUlElement = document.createElement("ul")
seattleDivElement.appendChild(seattleUlElement)

let tokyoDivElement = document.getElementById("tokyo")
let tokyoUlElement = document.createElement("ul")
tokyoDivElement.appendChild(tokyoUlElement)

let dubaiDivElement = document.getElementById("dubai")
let dubaiUlElement = document.createElement("ul")
dubaiDivElement.appendChild(dubaiUlElement)


let parisDivElement = document.getElementById("paris")
let parisUlElement = document.createElement("ul")
parisDivElement.appendChild(parisUlElement)

let limaDivElement = document.getElementById("lima")
let limaUlElement = document.createElement("ul")
limaDivElement.appendChild(limaUlElement)


