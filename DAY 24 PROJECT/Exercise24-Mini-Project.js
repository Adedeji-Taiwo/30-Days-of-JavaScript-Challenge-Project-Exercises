//Develop a small application which calculate a weight of an object in a certain planet. The gif image is not complete check the video in the starter file.

//set a background image for the app and append in the document
document.body.style.backgroundImage = "url('galaxy.gif')";


//style document body
document.body.style.fontFamily = "cursive";
document.body.style.letterSpacing = "1px";

//create, style and append a div element in the document body
const div = document.createElement("div");
document.body.appendChild(div)
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";

//create, style and append a header into div  
const header = document.createElement("h1");
div.appendChild(header)
header.textContent = "Calculate a weight of an object on a planet"
header.style.color = "#ffffff";
header.style.marginBottom = "60px";
header.style.textAlign = "center";

//create, style and append a div element for all inputs
const inputs = document.createElement("div");
div.appendChild(inputs);
inputs.style.display = "flex";
inputs.style.flexDirection = "row";
inputs.style.marginBottom = "15px";

//create, style and append input element into div named as inputs
const input1 = document.createElement("input")
inputs.appendChild(input1)
input1.type = "text";
input1.placeholder = "Mass in kilogram"
input1.style.padding = "5px";
input1.style.marginRight = "7px";
input1.style.outline = "none";

//create, style and append select element into div named as inputs
const selectBoxes = document.createElement("select")
inputs.append(selectBoxes);
selectBoxes.style.padding= "5px";
selectBoxes.style.borderRadius = "5px"; 
selectBoxes.style.marginRight = "10px";
selectBoxes.style.outline = "none";


//set up a loop for creating option elements and append in select element 
for (let i = 0; i < 11; i++) {
    const options = document.createElement("option");
    selectBoxes.appendChild(options)
    options.style.backgroundColor = "#aaa8aa"; 
}


//selecting all option elements nodes and setting attributes in them.
const option = document.querySelectorAll("option")


option[0].selected = "selected";
option[0].value = "0";
option[0].textContent = "--select planet--";


option[1].value = "3.7";
option[1].textContent = "MERCURY";


option[2].value = "8.88";
option[2].textContent = "VENUS";


option[3].value = "9.798";
option[3].textContent = "EARTH";


option[4].value = "1.62";
option[4].textContent = "MOON";


option[5].value = "3.71";
option[5].textContent = "MARS";


option[6].value = "24.92";
option[6].textContent = "JUPITER";


option[7].value = "10.44";
option[7].textContent = "SATURN";


option[8].value = "8.87";
option[8].textContent = "URANUS";


option[9].value = "11.15";
option[9].textContent = "NEPTUNE";


option[10].value = "0.58";
option[10].textContent = "PLUTO";


//create, style and append button element in div element  named as inputs 
const button = document.createElement("button");
inputs.appendChild(button);
button.textContent = "Calculate weight";
button.style.backgroundColor = "#6e6d6e";
button.style.color = "#ffffff";
button.style.borderRadius = "5px"; 
button.style.outline = "none";


//create, style a div element named frame and append in main div.  
const frame = document.createElement("div");
div.appendChild(frame);
frame.style.backgroundColor = "rgba(255, 255, 255, 0.09)";
frame.style.width = "60%";
frame.style.display = "flex";
frame.style.justifyContent = "center";
frame.style.alignItems = "center";
frame.style.padding = "20px";
frame.style.color = "#ffffff";

//create, style and append an image element into frame as standby image
const image = document.createElement("img");
frame.appendChild(image);
image.src = "/earth.png";
image.style.width = "300px";
image.style.height  = "300px";
image.style.margin = "40px";


//create and style a div element named innerFrame.
const innerFrame = document.createElement("div");
innerFrame.style.display = "flex";
innerFrame.style.flexDirection = "column";
innerFrame.style.justifyContent = "center";
innerFrame.style.alignItems = "center";
innerFrame.style.textAlign = "center";
innerFrame.style.backgroundColor = "rgba(255, 255, 255, 0.09)";
innerFrame.style.width = "60%"
innerFrame.style.fontSize = "13px";
innerFrame.style.padding = "10px";
innerFrame.style.textAlign = "center";


//create, style and append a div element named title into innerframe
const title = document.createElement("div")
innerFrame.appendChild(title);
title.style.marginBottom = "10px";

//create, style and append a div element named names into the innerFrame
const names = document.createElement("div");
innerFrame.appendChild(names)
names.style.display = "inline";
names.style.fontWeight = "bolder";


//create and style a div element named result to display final value.
const result = document.createElement("div");
result.style.backgroundColor = "rgba(255, 255, 255, 0.09)";
result.style.width = "100px";
result.style.height = "70px";
result.style.borderRadius = "50%";
result.style.fontSize = "13px";
result.style.paddingTop = "40px";
result.style.textAlign = "center";
result.style.fontWeight = "bolder";




//add event listeners to input, select options and button on click.
document.body.addEventListener("mouseover", (event) => {
    let weight;
    const mass = document.querySelector("input");
    


    button.addEventListener("click", () => {
        
        //event listener for empty input
        if (input1.value === "") {
            innerFrame.textContent = "";
            frame.textContent = "";
            innerFrame.textContent = "Mass is required";
            frame.appendChild(innerFrame); 
        }
    

        //event listener for empty option.
       if (event.target.value === "0") {
            innerFrame.textContent = "";
            frame.textContent = "";
            innerFrame.textContent = "You did not choose any planet";
            frame.appendChild(innerFrame); 
            }
        

        //event listener for option 1 = mercury.
        if (event.target.value === "3.7") {
            innerFrame.textContent = "";
            image.src = "/mercury.png";
            frame.appendChild(image);
            frame.appendChild(innerFrame)
            
            title.textContent = "The weight of the object on ";
            names.textContent = "MERCURY";
        
            title.appendChild(names);
            innerFrame.appendChild(title)
            
        
            weight = mass.value * option[1].value;
            console.log(typeof mass.value);
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }


        //event listener for option 2 = verse.
        if (event.target.value === "8.88") {
            innerFrame.textContent = "";
            image.src = "/venus.png";
            frame.appendChild(image);
            frame.appendChild(innerFrame)
    
            title.textContent = "The weight of the object on ";
            names.textContent = "VENUS";
        
            title.appendChild(names);
            innerFrame.appendChild(title)
        
            weight = mass.value * option[2].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }

        //event listener for option 3 = earth.
        if (event.target.value === "9.798") {
            innerFrame.textContent = "";
            image.src = "/earth.png";
            frame.appendChild(image);        
            frame.appendChild(innerFrame)
    
            title.textContent = "The weight of the object on ";
            names.textContent = "EARTH";

            title.appendChild(names);
            innerFrame.appendChild(title)
        
            weight = mass.value * option[3].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }


        //event listener for option 4 = moon.
        if (event.target.value === "1.62") {
            innerFrame.textContent = "";
            image.src = "/moon.png";
            frame.appendChild(image);
            frame.appendChild(innerFrame)

            title.textContent = "The weight of the object on ";
            names.textContent = "MOON";

            title.appendChild(names);
            innerFrame.appendChild(title)      
        
            weight = mass.value * option[4].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }


    //event listener for option 5 = mars.
        if (event.target.value === "3.71") {
            innerFrame.textContent = "";
            image.src = "/mars.png";
            frame.appendChild(image);
            frame.appendChild(innerFrame)
    
            title.textContent = "The weight of the object on ";
            names.textContent = "MARS";

            title.appendChild(names);
            innerFrame.appendChild(title)
              
            weight = mass.value * option[5].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
    }


    //event listener for option 6 = jupiter.
        if (event.target.value === "24.92") {
            innerFrame.textContent = "";
            image.src = "/jupiter.png";
            frame.appendChild(image);      
            frame.appendChild(innerFrame)
    
            title.textContent = "The weight of the object on ";
            names.textContent = "JUPITER";
        
            title.appendChild(names);
            innerFrame.appendChild(title)
        
            weight = mass.value * option[6].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }


        //button event listener for option 7 = saturn.
        if (event.target.value === "10.44") {
            innerFrame.textContent = "";
            image.src = "/saturn.png";
            frame.appendChild(image);        
            frame.appendChild(innerFrame)
    
            title.textContent = "The weight of the object on ";
            names.textContent = "SATURN";

            title.appendChild(names);
            innerFrame.appendChild(title)
        
            weight = mass.value * option[7].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }


        //event listener for option 7 = saturn.
        if (event.target.value === "10.44") {
            innerFrame.textContent = "";
            image.src = "/saturn.png";
            frame.appendChild(image);        
            frame.appendChild(innerFrame)
    
            title.textContent = "The weight of the object on ";
            names.textContent = "SATURN";

            title.appendChild(names);
            innerFrame.appendChild(title)
        
            weight = mass.value * option[7].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }


        //event listener for option 8 = uranus.
        if (event.target.value === "8.87") {
            innerFrame.textContent = "";
            image.src = "/uranus.png";
            frame.appendChild(image);       
            frame.appendChild(innerFrame)
    
            title.textContent = "The weight of the object on ";
            names.textContent = "URANUS";

            title.appendChild(names);
            innerFrame.appendChild(title)
        
            weight = mass.value * option[8].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }


        //button event listener for option 9 = neptune.
        if (event.target.value === "11.15") {
            innerFrame.textContent = "";
            image.src = "/neptune.png";
            frame.appendChild(image);
            frame.appendChild(innerFrame)
        
            title.textContent = "The weight of the object on ";
            names.textContent = "NEPTUNE";
        
            title.appendChild(names);
            innerFrame.appendChild(title)
            
            weight = mass.value * option[9].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }


        //button event listener for option 9 = neptune.
        if (event.target.value === "0.58") {
            innerFrame.textContent = "";
            image.src = "/pluto.png"; 
            frame.appendChild(image);
            frame.appendChild(innerFrame)
        
            title.textContent = "The weight of the object on ";
            names.textContent = "PLUTO";
        
            title.appendChild(names);
            innerFrame.appendChild(title)
            
            weight = mass.value * option[10].value;
            result.textContent = `${weight.toFixed(2)} N`;

            innerFrame.appendChild(result);
        }
    
    })


})








//for selecting option elements in select boxes.
/*select id = "wizard">
<option value ="">Pick one</option>
<option value  = "harry">Harry</option>
<option value = "her">Hermoso</option>
</>
<script>

document.body.addEventListener("input", (event) => {
if (event.target.value == "wizard") return;

if (event.target.value === "harry") {
console.log("mercuryyyyy")
}

if (event.target.value === "her") {
console.log("venussssssss")
}
}, false)*/

