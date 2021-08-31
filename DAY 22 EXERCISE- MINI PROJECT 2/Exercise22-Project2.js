//Use the countries array to display all the countries.See the design

import {countries} from "./countries.js"





for (let j = 0; j < countries.length; j++) {
    const text = document.createElement("div");
    text.className = "title";
    text.style.fontFamily = "cursive";
    text.style.fontSize = "25px";
    text.style.textAlign = "center";
    text.style.display = "inline-block"
    text.style.width = "230px";
    text.style.height = "150px";
    text.style.paddingTop = "100px"
    text.style.margin = "15px"
    text.style.fontWeight = "bold";
    text.style.borderRadius = "18px";
    text.style.backgroundColor = "e0e0e0";
    text.style.boxShadow = "9px 9px 18px #b1b1b1, -9px -9px 18px #ffffff"
    
    text.textContent = (countries[j].toUpperCase())
    document.body.appendChild(text)
    
    
}