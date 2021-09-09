//create first container for title and input fields
const container1 = document.createElement("div");
document.body.appendChild(container1);
container1.className = "container1";


//create header
const h2 = document.createElement("h2");
container1.appendChild(h2);
h2.textContent = "30 Days of Javascript Challenge Leaderboard";

//create input field
const inputFields = document.createElement("div");
container1.appendChild(inputFields);
inputFields.className = "inputFields";


//create input fields by looping
for (let j = 0; j < 5; j++) {
    const inputs = document.createElement("input");
    inputs.type = "text";
    inputFields.appendChild(inputs);
}

//call all inputs created and assigned to a variable
const input = document.querySelectorAll("input");

input[0].placeholder = "First Name";
input[0].id = "first";

input[1].placeholder = "Last Name";
input[1].id = "second"; 

input[2].placeholder = "Country";
input[2].id = "country";

input[3].placeholder = "Player Score";
input[3].id = "score";
input[3].type = "number";
input[3].length = "3";


//style input borders on focus
document.addEventListener("click", (event) => {
    if (event.target.id == "first") {
        input[0].style.borderColor = "#dd7777";
    }
    else {
        input[0].style.borderColor = "#e0c3c0";
    }
    if (event.target.id == "second") {
        input[1].style.borderColor = "#dd7777";
    }
    else {
        input[1].style.borderColor = "#e0c3c0";
    }

    if (event.target.id === "country") {
        input[2].style.borderColor = "#dd7777";
    }
    else {
        input[2].style.borderColor = "#e0c3c0";
    }

    if (event.target.id === "score") {
        input[3].style.borderColor = "#dd7777";
    }
    else {
        input[3].style.borderColor = "#e0c3c0";
    }
})


//set up submit buttons with attributes and properties
input[4].type = "submit";
input[4].id = "submit";
input[4].disabled="disabled";
input[4].value = "Add Player";


//set up warning text for incorrect inputs
const warningText = document.createElement("p");
container1.appendChild(warningText);
warningText.className = "warn";
warningText.textContent = "";



//diable submit key until all conditions are met
let txt = document.querySelectorAll('[type="text"]');
let alphaExp = /^[a-zA-Z]+$/;

for (let num of txt) {
    num.oninput = () => {
        if (input[0].value.match(alphaExp) && input[1].value.match(alphaExp) && input[2].value.match(alphaExp)) {

            document.getElementById("submit").removeAttribute('disabled');
            document.getElementById("submit").style.color = " #03a9f4";
        }
     

        if (!(input[0].value.match(alphaExp)) || !(input[1].value.match(alphaExp)) || !(input[2].value.match(alphaExp))) {
            warningText.textContent = "Please enter only alphabets"; 
        }
        if (input[0].value.match(alphaExp) || input[1].value.match(alphaExp) || input[2].value.match(alphaExp)) {
            warningText.textContent = ""; 
        }
    }
}



input[4].addEventListener("click", () => {
    if (input[3].value == "") {
        warningText.textContent = "All fields are required";
    }
    else {
        warningText.textContent = "";
        createProfile();
        
    }
})



const container2 = document.createElement("div");
document.body.appendChild(container2);
container2.className = "container2";


const ul = document.createElement("ul");
container2.appendChild(ul);


//create player profile after submission
const createProfile = () => {

    const li = document.createElement("li");
    li.className += "li";


    const nameDate = document.createElement("div");
    li.appendChild(nameDate);
    nameDate.className = "nameDate";
   
    const fullName = document.createElement("span");
    fullName.className = "fullName";
    nameDate.appendChild(fullName);
    fullName.textContent = `${input[0].value} ${input[1].value}`;


    const date =  document.createElement("span");
    nameDate.appendChild(date);
    date.textContent = `${moment().format('MMM DD')} ${moment().format('hh:mm')}`;
    date.className = "date";



    const country = document.createElement("span");
    li.appendChild(country);
    country.textContent = input[2].value;
    country.className = "country";


    const score = document.createElement("span");
    li.appendChild(score);
    score.textContent += parseInt(input[3].value);
    score.className = "score";
    score.id = "we";
    

    const arithmetic = document.createElement("div");
    li.appendChild(arithmetic);
    arithmetic.className = "arithmetic";

    for (let i = 0; i < 3; i++) {
        const circle = document.createElement("span");
        arithmetic.appendChild(circle);
        circle.className += "circle";
        
    }


    const circles = arithmetic.querySelectorAll(".circle");

    circles[0].insertAdjacentHTML("beforeend", '<i class="far fa-trash-alt"></i>');
    circles[0].classList = "delete";
    circles[0].style.fontSize = "10px"
    circles[1].textContent = "+5";
    circles[1].classList = "add";
    circles[2].textContent = "-5";   
    circles[2].classList = "sub"; 


    ul.appendChild(li);

    //disable submit after submission to reset input conditions
    input[4].disabled = "disabled";
    input[4].style.color = "#ffffff";

    //clear fields after a player is logged
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
    input[3].value = "";



    //board sorter according to player's score
    tinysort(ul.childNodes,'span.score');
    tinysort.defaults.order = 'desc';





//score increment
circles[1].addEventListener("click", () => {

    score.textContent = Number(score.textContent) + 5;

      //board sorter according to player's score
      tinysort(ul.childNodes,'span.score');
      tinysort.defaults.order = 'desc';
})


//score decrement
circles[2].addEventListener("click", () => {

    score.textContent = Number(score.textContent) - 5;

      //board sorter according to player's score
      tinysort(ul.childNodes,'span.score');
      tinysort.defaults.order = 'desc';
})


}



//delete
document.querySelector("ul").addEventListener("click", (e) => {

    //Check if the element that is clicked is the “delete” button
    if (e.target.classList.contains("delete") ||
    e.target.parentElement.classList.contains("delete")) {
    
    //grab the id of the parent list item.
    (e.target.closest("li")).remove();
    }
})