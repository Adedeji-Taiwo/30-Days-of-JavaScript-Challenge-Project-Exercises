//Visualize the countries array as follows

//import the countries array from countries JS file
import {countries} from "./countries.js"




//style document body to suit project specs.
document.body.style.margin = "0px";
document.body.style.boxSizing = "border-box";
document.body.style.fontFamily = "Montserrat, sans-serif";
document.body.style.color = "#ffffff";
document.body.style.textAlign = "center";
document.body.style.backgroundColor = "#ffffd0";


//create and style board for buttons and input.
const board = document.createElement("div");
document.body.appendChild(board);
board.style.backgroundImage = "url('globe-2.jpg')";
board.style.backgroundSize = "cover";
board.style.backgroundRepeat = "no-repeat";
board.style.backgroundPosition = "bottom";
board.style.backgroundAttachment = "fixed";


//create a filter effect for board's background photo and append in board. now filter takes precedence.
const filter = document.createElement("div");
board.appendChild(filter);
filter.style.backgroundColor = "rgba(0, 50, 100, 0.6)";
filter.style.height = "100%";


//create, style and append header into filter
const header = document.createElement("h1");
filter.appendChild(header);
header.textContent = "WORLD COUNTRIES LIST";
header.style.fontSize = "45px";
header.style.paddingTop = "100px";
header.style.marginTop = "0px";
header.style.letterSpacing = "10px";
header.style.marginBottom = "0px";


//create, style and append a paragraph containing countries' total.
const total = document.createElement("p");
filter.appendChild(total);
total.textContent = `Total Number of countries: ${countries.length}`;
total.style.fontWeight = "bold";
total.style.marginTop = "12px";


//create a country counter and append in filter.
const counter = document.createElement("p");
filter.appendChild(counter);


//create a container for buttons, style and append in filter.
const buttonContainer = document.createElement("div");
filter.appendChild(buttonContainer);
buttonContainer.style.marginBottom = "25px";


//create the 3 buttons simultaneously and append in container. 
for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    buttonContainer.appendChild(button)
}

//style each button simultaneously.
const buttonEach = document.querySelectorAll("button")
for (let j = 0; j < 3; j++) {
    buttonEach[j].style.color = "#ffffff";
    buttonEach[j].style.backgroundColor = "#a25ad5";
    buttonEach[j].style.padding = "10px";
    buttonEach[j].style.borderRadius = "5px";
    buttonEach[j].style.borderWidth = "1px";
    buttonEach[j].style.outline = "none";
    buttonEach[j].style.marginLeft = "2px";
}


//add text content or innerHTML and class names to buttons
buttonEach[0].textContent = "STARTING WORD";
buttonEach[0].className = "firstButton";

buttonEach[1].textContent = "SEARCH WITH ANY WORD";
buttonEach[1].className = "secondButton";

buttonEach[2].insertAdjacentHTML("beforeend", '<i class="fas fa-sort-alpha-down"></i>');




//create, style and append input in filter.
const input = document.createElement("input");
filter.appendChild(input);
input.insertAdjacentHTML("afterend", '<i class = "fas fa-search" aria-hidden="true"></li>')
const space = "                                               ";
input.placeholder = `${space} Search country...`;
input.style.borderRadius = "25px";
input.style.borderColor = "#ffffff";
input.style.width = "450px";
input.style.marginRight = "5px";
input.style.height = "10px";
input.style.padding = "15px";
input.style.outline = "none";
input.style.backgroundColor = "#f4f4f4";
input.style.marginBottom = "135px";



//create and style a display screen for outputs. Append in document's body.
const screen = document.createElement("div");
document.body.appendChild(screen);
screen.style.width = "80%";
screen.style.paddingTop = "50px";
screen.style.display = "inline-grid";
screen.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr ";
screen.style.gap = "50px";
screen.style.placeItems = "center";



// Create a condition that targets viewports from 768px below
const mediaQuery = window.matchMedia('(max-width: 768px)')

function handleDeviceChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    screen.style.display = "flex";
    screen.style.flexWrap = "wrap"
    screen.style.alignItems = "center";
    screen.style.justifyContent = "center";
    screen.style.margin = "auto";
  }
}

// Register event listener
mediaQuery.addListener(handleDeviceChange)

// Initial check
handleDeviceChange(mediaQuery)



//creates an input for screen on standby paying cognizance to alphabet down button(alphabetical button)
//slates were created to accommodate input results held by filter2.
//slate and filter2 divs styled accordingly. 
if (buttonEach[2].innerHTML == '<i class="fas fa-sort-alpha-down"></i>') {
            screen.textContent = "";
        for (let k = 0; k < countries.length; k++) {
           
            const slate = document.createElement("div");
            slate.style.backgroundImage =  "url('map_image.jpg')";
            slate.style.backgroundSize = "150px 170px";
            slate.style.backgroundRepeat = "no-repeat";
            
    
            screen.appendChild(slate)
            
            const filter2 = document.createElement("div");
            slate.appendChild(filter2);
            filter2.style.backgroundColor = "rgba(0, 50, 100, 0.6)";

            filter2.textContent =  countries[k].toUpperCase();
            filter2.style.paddingTop = "70px";
            filter2.style.fontWeight = "bold";
            filter2.style.borderRadius = "18px";
            filter2.style.width = "150px";
            filter2.style.height = "90px";
            filter2.style.fontSize = "14px";
            filter2.style.boxShadow = "5px 5px 10px #b1b1b1, -5px -5px 10px #ffffe3";
       
        }
}




//Add listener to document body on click.
document.addEventListener("click", (event) => {

    //set conditions for first button to fire effectively.
    if (event.target.classList.contains("firstButton")) {
        buttonEach[0].style.backgroundColor = "#581cb8";
        buttonEach[1].style.backgroundColor = "#a25ad5";
        buttonEach[2].style.backgroundColor = "#a25ad5";
        input.value = "";
        

        
        //set conditions for input on first button click.
        input.addEventListener("input", () => {
            screen.textContent = "";

            //toggle between displaying and removing counter info when input gains focus
            if (input.value == "") {
                counter.textContent = "";
            }
            else {
                counter.textContent = "Countries starting with ";
                const letters = document.createElement("span");
                letters.style.color = "#ff0000";
                letters.textContent = input.value;
                counter.appendChild(letters);

                const are = document.createElement("span");

                const num = document.createElement("span");
                num.style.color = "#00ff00";
                const starts = countries.filter(country => {return (country.startsWith(input.value)) || (country.toLowerCase()).startsWith(input.value) || (country.toUpperCase()).startsWith(input.value)});
                
                
                are.textContent = " are ";
                counter.appendChild(are);
                num.textContent = starts.length;
                counter.appendChild(num);
            }

            //creates an input for screen on when first button is fired.
            //slates were created to accommodate input results held by filter2.
            //slate and filter2 divs styled accordingly. 
            const starts = countries.filter(country => {return (country.startsWith(input.value)) || (country.toLowerCase()).startsWith(input.value) || (country.toUpperCase()).startsWith(input.value)});
            for (let k = 0; k < starts.length; k++) {
                
                const slate = document.createElement("div");
                slate.style.backgroundImage =  "url('map_image.jpg')";
                slate.style.backgroundSize = "150px 170px";
                slate.style.backgroundRepeat = "no-repeat";
            
        
                screen.appendChild(slate)
                
                const filter2 = document.createElement("div");
                slate.appendChild(filter2);
                filter2.style.backgroundColor = "rgba(0, 50, 100, 0.6)";
    
                filter2.textContent =  starts[k].toUpperCase();
                filter2.style.paddingTop = "70px";
                filter2.style.fontWeight = "bold";
                filter2.style.borderRadius = "18px";
                filter2.style.width = "150px";
                filter2.style.height = "90px";
                filter2.style.fontSize = "14px";
                filter2.style.boxShadow = "5px 5px 10px #b1b1b1, -5px -5px 10px #ffffe3";
           
            }
        })
    
    }






    //set conditions for second button to fire effectively.
   if (event.target.classList.contains("secondButton")) {
        buttonEach[1].style.backgroundColor = "#581cb8";
        buttonEach[0].style.backgroundColor = "#a25ad5";
        buttonEach[2].style.backgroundColor = "#a25ad5";
        input.value = "";

        //set conditions for input on second button click.
        input.addEventListener("input", () => {
            screen.textContent = "";
            
            //toggle between displaying and removing counter info when input gains focus
            if (input.value == "") {
                counter.textContent = "";
            }
            else {
                counter.textContent = "Countries containing ";
                const letters = document.createElement("span");
                letters.style.color = "#ff0000";
                letters.textContent = input.value;
                counter.appendChild(letters);

                const are = document.createElement("span");

                const num = document.createElement("span");
                num.style.color = "#00ff00";

                const starts = countries.filter(country => {return (country.includes(input.value)) || (country.toLowerCase()).includes(input.value) || (country.toUpperCase()).includes(input.value)})
                
                
                are.textContent = " are ";
                counter.appendChild(are);
                num.textContent = starts.length;
                counter.appendChild(num);
            }


            //creates an input for screen on when second button is fired based on conditions set.
            //slates were created to accommodate input results held by filter2.
            //slate and filter2 divs styled accordingly. 
            const starts = countries.filter(country => {return (country.includes(input.value)) || (country.toLowerCase()).includes(input.value) || (country.toUpperCase()).includes(input.value)})
            for (let k = 0; k < starts.length; k++) {
           
                const slate = document.createElement("div");
                slate.style.backgroundImage =  "url('map_image.jpg')";
                slate.style.backgroundSize = "150px 170px";
                slate.style.backgroundRepeat = "no-repeat";
                
        
                screen.appendChild(slate)
                
                const filter2 = document.createElement("div");
                slate.appendChild(filter2);
                filter2.style.backgroundColor = "rgba(0, 50, 100, 0.6)";
    
                filter2.textContent =  starts[k].toUpperCase();
                filter2.style.paddingTop = "70px";
                filter2.style.fontWeight = "bold";
                filter2.style.borderRadius = "18px";
                filter2.style.width = "150px";
                filter2.style.height = "90px";
                filter2.style.fontSize = "14px";
                filter2.style.boxShadow = "5px 5px 10px #b1b1b1, -5px -5px 10px #ffffe3";
           
            }
        })
    
    }


})

    







//creates an input for screen when button3 is toggled to alphabet up(non-alphabetical button)
//slates were created to accommodate input results held by filter2.
//slate and filter2 divs styled accordingly. 
buttonEach[2].addEventListener("click", () => {
    screen.textContent = ""; 
    counter.textContent = "";   
    input.value = "";   
    countries.reverse();


 for (let k = 0; k < countries.length; k++) {
     const slate = document.createElement("div");
     slate.style.backgroundImage =  "url('map_image.jpg')";
     slate.style.backgroundSize = "150px 170px";
     slate.style.backgroundRepeat = "no-repeat";
         
         
         
     screen.appendChild(slate);
         
     
     const filter2 = document.createElement("div");
     slate.appendChild(filter2);
     filter2.style.backgroundColor = "rgba(0, 50, 100, 0.6)";
     countries.reverse()[k].toUpperCase();
     filter2.textContent  = (countries.reverse()[k]).toUpperCase();
     filter2.style.paddingTop = "70px";
     filter2.style.fontWeight = "bold";
     filter2.style.borderRadius = "18px";
     filter2.style.width = "150px";
     filter2.style.height = "90px";
     filter2.style.fontSize = "14px";
     filter2.style.boxShadow = "5px 5px 10px #b1b1b1, -5px -5px 10px #ffffe3";
        
 }

})


//switches button3 icons on click. Changing its background color in the process.
buttonEach[2].addEventListener("click", () => {
 if (buttonEach[2].innerHTML == '<i class="fas fa-sort-alpha-down"></i>') {
     buttonEach[2].innerHTML = "";
     buttonEach[2].style.backgroundColor = "#581cb8";
     buttonEach[0].style.backgroundColor = "#a25ad5";
     buttonEach[1].style.backgroundColor = "#a25ad5"
     buttonEach[2].insertAdjacentHTML("beforeend", '<i class="fas fa-sort-alpha-up"></i>');
 

 }
 else {
     buttonEach[2].innerHTML = '<i class="fas fa-sort-alpha-down"></i>'
     buttonEach[2].style.backgroundColor = "#a25ad5";
     buttonEach[0].style.backgroundColor = "#a25ad5";
     buttonEach[1].style.backgroundColor = "#a25ad5"
 }
})
