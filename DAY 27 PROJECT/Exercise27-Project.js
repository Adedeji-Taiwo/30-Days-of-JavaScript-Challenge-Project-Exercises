//Create the following using HTML, CSS, and JavaScript


//Data to be utilized in application.
const asabeneh = {
    titles: [
        ['🌱', 'Educator'],
        ['📖', 'Instructor'],
        ['🔥', 'Motivational Speaker'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
    ],
      
      
    technologies: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'APIs',
          'MongoDB',
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Visualization',
    ]
}

  

  
  
  
//Style document's body.
document.body.style.boxSizing  = "border-box";
document.body.style.margin = "0px";
document.body.style.fontFamily = "Montserrat, sans-serif";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";



//Create and style container for app's content.
const container = document.createElement("div");
document.body.appendChild(container);
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.width = "80%";
container.style.gap = "15px";


//create and style header containing author's name.
const header = document.createElement("h1");
container.appendChild(header);
header.textContent = "Asabeneh Yetayeh";
header.style.letterSpacing = "10px";
header.style.marginBottom = "5px";
header.style.fontSize = "45px";


//create and style tab for animation.
const tab = document.createElement("div");
container.appendChild(tab);
tab.style.backgroundColor = "#eddfde";
tab.style.padding = "0 15px 15px 15px";
tab.style.fontSize = "20px";
tab.style.height = "50px";


//Assign variable to object key 1.
let titlez = asabeneh.titles;


//Create an element to accommodate icon in tab.
const icon = document.createElement("p");
tab.appendChild(icon);
icon.className = "icon";
icon.style.display =  "inline-block";
icon.style.marginLeft = "5px";


//Set Interval for displaying icons.
let h = 0;
setInterval(() => {
    icon.textContent = titlez[h++][0];
    if(h === titlez.length) h = 0; //Rather than counting continuously, count can halted on array end by replacing i = 0 with clearInterval(tm)
}, 3000);



//Create an element to accommodate roles in tab.
const role = document.createElement("p");
tab.appendChild(role);
role.className = "role";
role.style.display =  "inline-block";
role.style.opacity = "0";


//Set Interval for displaying roles.
let i = 0;
setInterval(() => {
    role.textContent = titlez[i++][1];
    if(i === titlez.length) i = 0; //Rather than counting continuously, count can halted on array end by replacing i = 0 with clearInterval(tm)
}, 3000);



//get element with the role class and animate with gsap library.
var roles = document.getElementsByClassName("role");
TweenMax.fromTo(roles, 3, {x:0}, {x: 50, opacity: 1, ease: "steps(6)", repeat: -1});


//Create, style and append bio div in container.
const bio = document.createElement("div");
container.appendChild(bio);
bio.style.lineHeight = "30px";
bio.textContent = "I am Asabeneh Yetayeh. I am instructor, developer, motivator and content creator. I love educating people and creating educational materials. In January 2019, I also created a teaching material"


//Create 3 spans to accommodate bold lines in bio.
for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.style.fontWeight = "bolder";
    bio.appendChild(span);
}


//Get spans created and insert text in them.
const spanz = document.querySelectorAll("span");
spanz[0].insertAdjacentHTML("beforeend"," JavaScript for Everyone." );
bio.insertAdjacentHTML("beforeend", " In December 2019, I created" );
bio.appendChild(spanz[1])
spanz[1].insertAdjacentHTML("beforeend", " 30 Days of Python");
bio.insertAdjacentHTML("beforeend", " challenge and in January 2020," );
bio.appendChild(spanz[2])
spanz[2].insertAdjacentHTML("beforeend", " 30 Days of JavaScript");
bio.insertAdjacentHTML("beforeend", " challenge." );
 

//create, style and append section for course topics in container.
const section = document.createElement("div");
container.appendChild(section);
section.style.display = "flex";
section.style.gap = "50px";
section.style.width = "90%";
section.style.height = "150px";    //height is a good hack to solve hover pushing on other divs problem.
section.style.justifyContent = "space-between";
section.style.margin = "auto";
section.style.marginBottom = "10px";



//create, style and append 3 span boards for topics simultaneously. 
for (let m = 0; m < 3; m++) {
    const board = document.createElement("span");
    section.appendChild(board);
    board.style.width = "220px";
    board.style.backgroundColor = "rgba(0, 0, 0, 0.01)";
    board.style.border = "1px solid #e5e5e5";
    board.style.borderRadius = "5px";
    board.style.padding = "60px 0px";
    board.style.fontSize = "17px";
    board.style.textAlign = "center";
}


//get span elements assigned to board.
const boards = document.querySelectorAll("span")

//set textContent and id for boards.
boards[3].textContent = "JAVASCRIPT FOR EVERYONE";
boards[4].textContent = "30 DAYS OF PYTHON";
boards[5].textContent = "30 DAYS OF JAVASCRIPT";
boards[3].id = "javaScriptEvery";
boards[4].id = "python30";
boards[5].id = "javaScript30";




//add event listeners to document's body on mouseover targeting boards' id for hover effects.
document.addEventListener("mouseover", (event) => {

    if (event.target.id === "javaScriptEvery") {


        boards[3].style.fontSize = "18px";
        boards[3].style.backgroundColor = "#eddfde";
        boards[3].style.width = "230px";
       

        boards[4].style.fontSize = "17px";
        boards[4].style.backgroundColor = "";

        boards[5].style.fontSize = "17px";
        boards[5].style.backgroundColor = "";
    }

    else {
        boards[3].style.fontSize = "17px";
        boards[3].style.backgroundColor = "rgba(0, 0, 0, 0.01)";
    }

    if (event.target.id === "python30") {
        boards[4].style.fontSize = "18px";
        boards[4].style.backgroundColor = "#eddfde";
        boards[4].style.width = "240px";

        boards[3].style.fontSize = "17px";
        boards[3].style.backgroundColor = "";

        boards[5].style.fontSize = "17px";
        boards[5].style.backgroundColor = "";
    }

    else {
        boards[4].style.fontSize = "17px";
        boards[4].style.backgroundColor = "rgba(0, 0, 0, 0.01)";
    }

    if (event.target.id === "javaScript30") {
        boards[5].style.fontSize = "18px";
        boards[5].style.backgroundColor = "#eddfde";
        boards[5].style.width = "240px";

        boards[4].style.fontSize = "17px";
        boards[4].style.backgroundColor = "";

        boards[3].style.fontSize = "17px";
        boards[3].style.backgroundColor = "";
    }
     
    else {
        boards[5].style.fontSize = "17px";
        boards[5].style.backgroundColor = "rgba(0, 0, 0, 0.01)";
    }
})



//create and append element for footer.
const tech = document.createElement("div");
container.appendChild(tech);

//create two spans simultaneously and append in footer. 
for (let i = 0; i < 2; i++) {
    const info = document.createElement("span");
    tech.appendChild(info);
}


//Get span elements appended in footer. 
const infos = document.querySelectorAll("span");

//set text content in first span.
infos[6].textContent = "The technologies I teach";



//Assign variable to object key 2.
let technologies = (asabeneh.technologies);


//Set Interval for displaying web technologies as well as random display color
let j = 0;
setInterval(() => {
    infos[7].textContent = technologies[j++].toUpperCase();
    if(j === technologies.length) j = 0; //Rather than counting continuously, count can halted on array end by replacing i = 0 with clearInterval(tm)

    let str = "0123456789abcdef";
    let hex = "#";
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length);
        hex += str[index]; //str.charAt(index
    }

    infos[7].style.color = hex;
}, 3000);


//style second span in footer.
infos[7].className = "fade";
infos[7].style.fontSize = "35px";
infos[7].style.fontWeight = "bolder";
infos[7].style.marginLeft = "10px";
infos[7].style.opacity = "0";


//get element with the fade class and animate with gsap library.
var fade = document.getElementsByClassName("fade");
TweenMax.to(fade, 3, {opacity: 1, ease:Power1.easeInOut, repeat: -1});









    

