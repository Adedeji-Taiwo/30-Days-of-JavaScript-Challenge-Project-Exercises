//Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)

//import the countryz array from allCountries JS file
//import {countryz} from "./allCountries.js"
//console.log(countryz)

//Rename countries with Acronyms
//countryz[239].name = "USA"
//countryz[185].name = "Russia"





const urls =  'https://restcountries.eu/rest/v2/all'
const countryzz = async () => {
    try {
        const response = await fetch(urls)
        const countries = await response.json()
        return countries;
    } catch (err) {
        return (err)
    }
}
const countryz = await countryzz();


//Rename countries with Acronyms
countryz[239].name = "USA"
countryz[185].name = "Russia"




//Select elements from document body
const paragraph = document.querySelectorAll("p")
const button = document.querySelectorAll("button")



//Extract top 10 most populous nations into an array and sum up all countries' population. input into array.
const populace = countryz.sort((a, b) => {
    if (a.population > b.population) return -1;
    if (a.population < b.population) return 1;
    return 0;
})

const world = countryz.map(country => country.population).reduce((acc, cur) => (acc + cur), 0)
populace.unshift({name: "World", population: world})
const ten = populace.splice(0, 11)



const datas = ten.map(country => country.population)
let counts = [];

for (const pop of datas) {
    const name = ten.find((country) => {return country.population === pop}) //this returns an object containing all properties and value of that particular country. then the name can be extracted in the next line.
    counts.push({country: name.name, population: pop})
}




const countrys = await countryzz();
//Extract top 10 most spoken languages in the world and put into and array.
const langSet = countrys.map(country => country.languages).flat(1).map(item => item.name)
const uniqueLang = new Set(langSet)
const pack = [];
for (const lang of uniqueLang) {
   let filteredLang = langSet.filter(item => item === lang)
    pack.push({language: lang, num: filteredLang.length})
    pack.sort((a, b) => {
        if (a.num > b.num) return -1;
        if (a.num < b.num) return 1;
        return 0;
    })
}
const langPack = pack.splice(0, 10);





//Add event listener to document body on mouseover for buttons.
document.body.addEventListener("mouseover", (event) => {


    //Set margins for display window.
    let margin = {
        top: 15,
        right: 100,
        bottom: 15,
        left: 80,
    };


    //Event listener for button with value = 1.
    if (event.target.value === "1") {
        button[0].addEventListener("click", () => {


            paragraph[1].textContent = "10 Most Populated Countries in the World"

            d3.select("svg").remove();



             //Sort bars based on value
            const data = counts.sort(function (a, b) {
            return d3.ascending(a.population, b.population);
            })


            //Set width and height for display using margin conventions.
            let width = 760 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

            //Set svg properties and append in element with id "screen"
            let svg = d3.select("#screen").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("viewBox", "0 0 700 550")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            
            //Set x axis
            let x = d3.scale.linear()
                .range([0, width])
                .domain([0, d3.max(data, function (d) {
                    return d.population;
                })]);
        
            //Set y axis
            let y = d3.scale.ordinal()
                .rangeRoundBands([height, 0], .1)
                .domain(data.map(function (d) {
                    return d.country;
                }));
        
            //Make y axis to show bar names
            let yAxis = d3.svg.axis()
                .scale(y).tickPadding([40])
                //No tick marks
                .tickSize(0)
                .orient("left");
        
            let gy = svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
        
            let bars = svg.selectAll(".bar")
                .data(data)
                .enter()
                .append("g")
        
            //append rects
            bars.append("rect")
                .attr("class", "bar")
                .attr("y", function (d) {
                    return y(d.country);
                })
                .attr("height", y.rangeBand())
                .attr("x", 0)
                .attr("width", function (d) {
                    return x(d.population);
                });
        
            //add a value label to the right of each bar
            bars.append("text")
                .attr("class", "label")
        
                //y position of the label is halfway down the bar
                .attr("y", function (d) {
                    return y(d.country) + y.rangeBand() / 2 + 4;
                })
                //x position is 3 pixels to the right of the bar
                .attr("x", function (d) {
                    return x(d.population) + 3;
                })
                .text(function (d) {
                    return d.population.toLocaleString();
                });

                //Add left padding to label
                bars = svg.selectAll(".label")
                .attr("x", 600);
        })
    }



     //Event listener for button with value = 2.
    if (event.target.value === "2") {
        button[1].addEventListener("click", () => {

            paragraph[1].textContent = "10 Most Spoken Languages in the World"

            d3.select("svg").remove()
        
        
            //Sort bars based on value
            const data2 = langPack.sort(function (a, b) {
                return d3.ascending(a.num, b.num);
            })
        
        
            //Set width and height for display using margin conventions.
            let width = 800 - margin.left - margin.right,
                height = 480 - margin.top - margin.bottom;
        
                
        
            //Set svg properties and append in element with id "screen"
            let svg = d3.select("#screen").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .attr("viewBox", "0 0 700 550")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                
                
            //Set x axis
            let  x = d3.scale.linear()
                .range([0, width])
                .domain([0, d3.max(data2, function (d) {
                    return d.num;
                })]);

            //Set y axis
            let y = d3.scale.ordinal()
                .rangeRoundBands([height, 0], .1)
                .domain(data2.map(function (d) {
                    return d.language;
                }));
        
            //make y axis to show bar names
            let yAxis = d3.svg.axis()
                .scale(y).tickPadding([40])
                //no tick marks
                .tickSize(0)
                .orient("left");
        
            let gy = svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
        
            let bars = svg.selectAll(".bar")
                .data(data2)
                .enter()
                .append("g")
        
            //append rects
            bars.append("rect")
                .attr("class", "bar")
                .attr("y", function (d) {
                    return y(d.language);
                })
                .attr("height", y.rangeBand())
                .attr("x", 0)
                .attr("width", function (d) {
                    return x(d.num);
                });
        
            //add a value label to the right of each bar
            bars.append("text")
                .attr("class", "label")
        
                //y position of the label is halfway down the bar
                .attr("y", function (d) {
                    return y(d.language) + y.rangeBand() / 2 + 4;
                })
                //x position is 3 pixels to the right of the bar
                .attr("x", function (d) {
                    return x(d.num) + 3;
                })
                .text(function (d) {
                    return d.num;
                });

                //Add left padding to label
                bars = svg.selectAll(".label")
                .attr("x", 650);
            

        })
    }
})
            
