//Create a div container on HTML document and create 1 to 100 numbers dynamically and append to the container div.
//-Even numbers background is green 
//-Odd numbers background is yellow
//-Prime numbers background is red



let num;
for (let i = 0; i < 102; i++) {
    const text = document.createElement("div");
    text.className = "title";
    text.style.fontFamily = "cursive";
    text.style.fontSize = "40px";
    text.style.textAlign = "center";
    text.style.display = "inline-block"
    text.style.width = "120px";
    text.style.padding = "30px"
    text.style.marginBottom = "4px"
    text.style.marginRight = "4px"
    text.textContent = i;
    document.body.appendChild(text)

}


const texts = document.querySelectorAll("div")

texts.forEach((title, i) => {
    //zero is even and its less than one
    if (i < 1) return title.style.backgroundColor = "#29c44d" 
    
    //one is isolated as odd
    if (i === 1) return title.style.backgroundColor =  "#f8bf00" 

    //two is naturally a prime number
    if (i === 2) return title.style.backgroundColor =  "#ff5835"
    
    //we began discerning between prime and composite number for the rest of the numbers
    
    //even numbers isolated
    if (i % 2 == 0) {return title.style.backgroundColor = "#29c44d" }
    
    //
    else  { 
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {  //isolate odds
                    return  title.style.backgroundColor =  "#f8bf00"
                 }
                else { //rest serves up as prime numbers
                    title.style.backgroundColor = "#ff5835"
                }
            }
        }
})
