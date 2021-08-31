//Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

const asabenehChallenges2020 = {
  description: 'Asabeneh Yetayeh challenges',
  challengeTitle: 'Asabeneh Yetayeh challenges in ',
  challengeSubtitle: '30 Days Of JavaScript Challenge',
  challengeYear: 2020,
  keywords: [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'JS',
    'JavaScript',
    'ES6',
    'Promise',
    'async await',
    'Database',
    'React',
    'React Hooks',
    'Context API',
    'React Router',
    'Web Storage',
    'localStorage',
    'sessionStorage',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'API',
    'DOM',
    'data science',
    'MERN',
    'Python',
    'Flask',
    'Statistics',
    'Linear Algebra',
    'Numpy',
    'Pandas',
    'Scipy',
    'Scikit-learn',
    'Visualization',
    'D3.js'
  ],
  author: {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    titles: [
      ['🌱', 'Educator'],
      ['💻', 'Programmer'],
      ['🌐', 'Developer'],
      ['🔥', 'Motivator'],
      ['📔', 'Content Creator']
    ],
    qualifications: [
     ['📖', 'MSc. Computer Science Ongoing'],
     ['👨‍🎓', 'BSc. Information and Communication Eng.'],
     ['👨‍🎓', 'MSc. Food Technology'],
     ['👨‍🎓', 'BSc.Food Technology']
    ],
    socialLinks: [
      { 
        social: 'LinkedIn',
        url: 'https://linkedin.com/Asabeneh',
        fontawesomeIcon: '<i class="fa fa-linkedin-square"></i>'
      },
      {
        social: 'Twitter',
        url: 'https://twitter.com/Asabeneh',
        fontawesomeIcon: '<i class="fa fa-twitter-square"></i>'
      },
      {
        social: 'Github',
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: 'https://github.com/Asabeneh'
      },
      {
        social: 'DEV.to',
        fontawesomeIcon: '',
        url: 'https://dev.to/asabeneh'
      }
    ],
    skills: [
      ['✅', 'Web Development'],
      ['✅', 'Data Analysis'],
      ['✅', 'Data Visualization'],
      ['✅', 'Programming'],
      ['✅', 'Databases'],
      ['✅', 'Developing API']
    ],
    bio:
      'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
  },
  challenges: [
    {
      name: '30 Days Of Python',
      topics: [
        'Python',
        'Flask',
        'Numpy',
        'Pandas',
        'Statistics',
        'API',
        'MongoDB'
      ],
      days: 30,
      status: 'Done',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
    },
    {
      name: '30 Days Of JavaScript',
      topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
      days: 30,
      status: 'Ongoing',
      questions: 'Above 500',
      projects: 'About 30',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
    },
    {
      name: '30 Days Of HTML & CSS',
      topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
      days: 30,
      status: 'Coming',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of React',
      topics: [
        'React',
        'React Router',
        'Redux',
        'Context API',
        'React Hooks',
        'MERN'
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of ReactNative',
      topics: ['ReactNative', 'Redux'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: 'Two',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Fullstack',
      topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Data Analysis',
      topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Machine Learning',
      topics: [
        'Python',
        'Numpy',
        'Pandas',
        'Scikit-learn',
        'Scipy',
        'Linear Algebra',
        'Statistics',
        'Visualization'
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    }
  ]
}

  





//create a div container that holds every other element and assign it a class.
  const div = document.createElement("div");
  div.className = "wrapper";
  div.style.fontSize = "20px";
  div.style.fontFamily = "cursive";
  div.style.width = "100%"
  div.style.margin = "10px";
  div.style.display = "flex";
  div.style.flexDirection = "column"
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  document.body.appendChild(div);

//create and append the header in the div container.
  const h1 = document.createElement("h1");
  div.appendChild(h1);   //h1 is sent into div
  h1.textContent = asabenehChallenges2020.challengeTitle;  //accessed from data object
  h1.style.textAlign = "center";
//span is created, which is to be sent into h1 to accomondate year
const span = document.createElement("span");
h1.appendChild(span);
  
//span content is set up
  function year() {
    let today = new Date();
    let year = today.getFullYear();
    return  (span.textContent = year);
  }
  setInterval(year, 1000);

//span styling
  span.style.fontSize = "100px";

//color-changing-part of span styling
  setInterval(() => {
    let str = "0123456789abcdef"
    let hexa = "#";
    let index;
    for (a = 0; a < 6; a++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index];    //or str.charAt(index)
    }
    return span.style.color = hexa;
  }, 1000);

  //create and append h2 in div.
const h2 = document.createElement("h2");
div.appendChild(h2);
link = document.createElement("a");
link.href = "#"
link.textContent = asabenehChallenges2020.challengeSubtitle;
h2.appendChild(link)


//style h2
h2.style.margin = "0px"



//create and append h3 in div.
const h3 = document.createElement("h3");
div.appendChild(h3);


//set up inner content of h3 -date and time
function time() {
  const today = new Date;
  let month = today.getMonth();
  let date = today.getDate();
  let year = today.getFullYear();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  return h3.textContent = (`${
      (month === 0)? "January" : (month === 1)? "February" : (month === 2)? "March" : (month === 3)? "April" : (month === 4)? "May" : (month === 5)? "June" : (month === 6)? "July" : (month === 7)? "August" : (month === 8)? "September" : (month === 9)? "October" : (month === 10)? "November" : "December"} ${(date < 10)? "0" + date : date}, ${year} ${(hour < 10)? "0" + hour : hour}:${(minute < 10) ? "0" + minute : minute}:${(second < 10)? "0" + second : second}`)
}
setInterval(time, 1000);

//color-changing background for date and time
setInterval(() => {
  let str = "0123456789abcdef"
  let hexa = "#";
  let index;
  for (a = 0; a < 6; a++) {
  index = Math.floor(Math.random() * str.length)
  hexa += str[index];    //or str.charAt(index)
  }
  return h3.style.backgroundColor = hexa;
}, 1000);

//styling h3
h3.style.paddingLeft = "20px";
h3.style.paddingRight = "20px";
h3.style.paddingTop = "5px";
h3.style.paddingBottom = "5px";
h3.style.marginBottom = "0px";








//create ul and appen in div to make table
const ul = document.createElement("ul")
div.appendChild(ul);

//style ul
ul.style.listStyleType = "none";
ul.style.width = "60%"

//create list of 8 items and appen in ul
for (let c = 0; c < 8; c++) {
  const li = document.createElement("li")
  li.style.padding = "25px"
  li.style.marginBottom = "3px"
  li.style.display = "flex";
  li.style.flexDirection  = "row";
  li.style.justifyContent = "space-between"
  ul.appendChild(li)
}


//get all li from DOM
const li = document.querySelectorAll("li")

//set background for each li
li.forEach((title, i) => {
  if (i === 0) {
    title.style.backgroundColor = "#29c44d";
  }
  else if (i === 1) {
    title.style.backgroundColor = "#f8bf00"
  }
  else {
    title.style.backgroundColor = "#ff5835"
  }
})
  

//create and slot in 3 paragraphs in each li
li.forEach((title, i) => {
  if (i < 8) {
    for (let d = 0; d < 3; d++) {
    const paragraph = document.createElement("paragraph")
    title.appendChild(paragraph)
    }
  }
})









//get all paragraphs
const item = document.querySelectorAll("paragraph")






//create the link in first li
link1 = (document.createElement("a"))
link1.href = "#"
link1.textContent = asabenehChallenges2020.challenges[0].name
item[0].appendChild(link1)


//set up and style details and summary and ul tagnames
const details1 = document.createElement("details")
const summary1 = document.createElement("summary")
const list1 = document.createElement("ul")
details1.appendChild(summary1)
summary1.style.outline = "none"
summary1.textContent = "Python"
details1.appendChild(list1)
list1.style.paddingLeft = "5px"
list1.style.listStyleType = "none"
list1.style.fontSize = "17px"

//create and append python lists
for (let f = 0; f < asabenehChallenges2020.challenges[0].topics.length; f++) {
const mylist1 = document.createElement("li")
list1.appendChild(mylist1)
mylist1.textContent = asabenehChallenges2020.challenges[0].topics[f]
}

//appen details into paragragh 2
item[1].appendChild(details1);

//set inner content for paragraph 3
item[2].textContent = asabenehChallenges2020.challenges[0].status









//create the link in second li
link2 = (document.createElement("a"))
link2.href = "#"
link2.textContent = asabenehChallenges2020.challenges[1].name
item[3].appendChild(link2)


//set up and style details and summary and ul tagnames
const details2 = document.createElement("details")
const summary2 = document.createElement("summary")
const list2 = document.createElement("ul")
details2.appendChild(summary2)
summary2.style.outline = "none"
summary2.textContent = "JavaScript"
details2.appendChild(list2)
list2.style.paddingLeft = "5px"
list2.style.listStyleType = "none"
list2.style.fontSize = "17px"

//create and append javascript lists
for (let f = 0; f < asabenehChallenges2020.challenges[1].topics.length; f++) {
const mylist2 = document.createElement("li")
list2.appendChild(mylist2)
mylist2.textContent = asabenehChallenges2020.challenges[1].topics[f]
}

//appen details into paragragh 4
item[4].appendChild(details2);

//set inner content for paragraph 5
item[5].textContent = asabenehChallenges2020.challenges[1].status








//create the link in third li
item[6].textContent = asabenehChallenges2020.challenges[2].name


//set up and style details and summary and ul tagnames
const details3 = document.createElement("details")
const summary3 = document.createElement("summary")
const list3 = document.createElement("ul")
details3.appendChild(summary3)
summary3.style.outline = "none"
summary3.textContent = "HTML & CSS"
details3.appendChild(list3)
list3.style.paddingLeft = "5px"
list3.style.listStyleType = "none"
list3.style.fontSize = "17px"

//create and append html lists
for (let f = 0; f < asabenehChallenges2020.challenges[2].topics.length; f++) {
const mylist3 = document.createElement("li")
list3.appendChild(mylist3)
mylist3.textContent = asabenehChallenges2020.challenges[2].topics[f]
}

//appen details into paragragh 7
item[7].appendChild(details3);

//set inner content for paragraph 8
item[8].textContent = asabenehChallenges2020.challenges[2].status









//set content of paragraph 9
item[9].textContent = asabenehChallenges2020.challenges[3].name


//set up and style details and summary and ul tagnames
const details4 = document.createElement("details")
const summary4 = document.createElement("summary")
const list4 = document.createElement("ul")
details4.appendChild(summary4)
summary4.style.outline = "none"
summary4.textContent = "React"
details4.appendChild(list4)
list4.style.paddingLeft = "5px"
list4.style.listStyleType = "none"
list4.style.fontSize = "17px"

//create and append react lists
for (let f = 0; f < asabenehChallenges2020.challenges[3].topics.length; f++) {
const mylist4 = document.createElement("li")
list4.appendChild(mylist4)
mylist4.textContent = asabenehChallenges2020.challenges[3].topics[f]
}

//appen details into paragragh 10
item[10].appendChild(details4);

//set inner content for paragraph 11
item[11].textContent = asabenehChallenges2020.challenges[3].status










//set content of paragraph 12
item[12].textContent = asabenehChallenges2020.challenges[4].name


//set up and style details and summary and ul tagnames
const details5 = document.createElement("details")
const summary5 = document.createElement("summary")
const list5 = document.createElement("ul")
details5.appendChild(summary5)
summary5.style.outline = "none"
summary5.textContent = "ReactNative"
details5.appendChild(list5)
list5.style.paddingLeft = "5px"
list5.style.listStyleType = "none"
list5.style.fontSize = "17px"

//create and append react native lists
for (let f = 0; f < asabenehChallenges2020.challenges[4].topics.length; f++) {
const mylist5 = document.createElement("li")
list5.appendChild(mylist5)
mylist5.textContent = asabenehChallenges2020.challenges[4].topics[f]
}

//appen details into paragragh 13
item[13].appendChild(details5);

//set inner content for paragraph 14
item[14].textContent = asabenehChallenges2020.challenges[4].status











//set content of paragraph 15
item[15].textContent = asabenehChallenges2020.challenges[5].name


//set up and style details and summary and ul tagnames
const details6 = document.createElement("details")
const summary6 = document.createElement("summary")
const list6 = document.createElement("ul")
details6.appendChild(summary6)
summary6.style.outline = "none"
summary6.textContent = "Fullstack"
details6.appendChild(list6)
list6.style.paddingLeft = "5px"
list6.style.listStyleType = "none"
list6.style.fontSize = "17px"

//create and append fullstack lists
for (let f = 0; f < asabenehChallenges2020.challenges[5].topics.length; f++) {
const mylist6 = document.createElement("li")
list6.appendChild(mylist6)
mylist6.textContent = asabenehChallenges2020.challenges[5].topics[f]
}

//appen details into paragragh 16
item[16].appendChild(details6);

//set inner content for paragraph 17
item[17].textContent = asabenehChallenges2020.challenges[5].status








//set content of paragraph 18
item[18].textContent = asabenehChallenges2020.challenges[6].name


//set up and style details and summary and ul tagnames
const details7 = document.createElement("details")
const summary7 = document.createElement("summary")
const list7 = document.createElement("ul")
details7.appendChild(summary7)
summary7.style.outline = "none"
summary7.textContent = "Data Analysis"
details7.appendChild(list7)
list7.style.paddingLeft = "5px"
list7.style.listStyleType = "none"
list7.style.fontSize = "17px"

//create and append data analysis lists
for (let f = 0; f < asabenehChallenges2020.challenges[6].topics.length; f++) {
const mylist7 = document.createElement("li")
list7.appendChild(mylist7)
mylist7.textContent = asabenehChallenges2020.challenges[6].topics[f]
}

//appen details into paragragh 19
item[19].appendChild(details7);

//set inner content for paragraph 20
item[20].textContent = asabenehChallenges2020.challenges[6].status













//set content of paragraph 21
item[21].textContent = asabenehChallenges2020.challenges[7].name


//set up and style details and summary and ul tagnames
const details8 = document.createElement("details")
const summary8 = document.createElement("summary")
const list8 = document.createElement("ul")
details8.appendChild(summary8)
summary8.style.outline = "none"
summary8.textContent = "Machine Learning"
details8.appendChild(list8)
list8.style.paddingLeft = "5px"
list8.style.listStyleType = "none"
list8.style.fontSize = "17px"

//create and append machine learning lists
for (let f = 0; f < asabenehChallenges2020.challenges[7].topics.length; f++) {
const mylist8 = document.createElement("li")
list8.appendChild(mylist8)
mylist8.textContent = asabenehChallenges2020.challenges[7].topics[f]
}

//appen details into paragragh 19
item[22].appendChild(details8);

//set inner content for paragraph 20
item[23].textContent = asabenehChallenges2020.challenges[7].status



//create div and append author's name as paragraph
const fullName = document.createElement("div")
div.appendChild(fullName);
const firstName = document.createElement("paragraph")
const lastName = document.createElement("paragraph")
fullName.appendChild(firstName);
fullName.appendChild(lastName)
fullName.className = "author";
fullName.style.fontSize = "40px";
fullName.style.display = "flex"
fullName.style.justifyContent = "center";
fullName.style.alignItems = "center";
fullName.style.gap = "30px";
firstName.textContent = asabenehChallenges2020.author.firstName
lastName.textContent = asabenehChallenges2020.author.lastName


//create paragraph for images and append in document
const links = document.createElement("p")
div.appendChild(links)
links.style.display = "flex";
links.style.justifyContent = "space-between";
links.style.marginTop = "10px"
links.style.width = "150px";
links.style.fontSize = "40px";

//create 3 image elements and append in last paragragh created
for (let m = 0; m < 3; m++) {
const image = document.createElement("a")
image.className = "img";
image.style.color = "#000000";
links.appendChild(image);
}

//get all img tags
const allImages = document.querySelectorAll(".img")

//style all 3 img tags simultaneously
for (let x = 0; x < 3; x++) {
  allImages[x].innerHTML = asabenehChallenges2020.author.socialLinks[x].fontawesomeIcon
  allImages[x].style.width = "35px";
  allImages[x].style.textAlign = "center";
}

allImages[0].title = "Linkedin";
allImages[0].href = asabenehChallenges2020.author.socialLinks[0].url;

allImages[1].title = "Twitter";
allImages[1].href = asabenehChallenges2020.author.socialLinks[1].url;


allImages[2].title = "Github";
allImages[2].href = asabenehChallenges2020.author.socialLinks[2].url;




//create paragraph for author's bio
const bio = document.createElement("paragraph");
div.appendChild(bio)
bio.textContent = asabenehChallenges2020.author.bio;
bio.style.width = "57%";
bio.style.marginTop = "30px";
bio.style.textAlign = "center"

//create div to acconmodate titles skills and qualification
const column = document.createElement("div");
column.style.display = "flex";
column.style.flexDirection = "row";
column.style.justifyContent = "space-between";
column.style.width = "60%"
column.style.marginTop = "23px";
div.appendChild(column);



//create title
const body1 = document.createElement("div");
const header1 = document.createElement("h3");
const listing1 = document.createElement("ul")
header1.textContent = "Titles";
body1.appendChild(header1);
body1.appendChild(listing1)
column.appendChild(body1);


listing1.style.listStyleType = "none";
listing1.style.paddingLeft = "0px";

for (let k = 0; k < asabenehChallenges2020.author.titles.length; k++) {
  const mylisting1 = document.createElement("li")
  listing1.appendChild(mylisting1)
  mylisting1.textContent = `${asabenehChallenges2020.author.titles[k][0]} ${asabenehChallenges2020.author.titles[k][1]}`;
  mylisting1.style.paddingBottom = "5px";
  }






//create skills
const body2 = document.createElement("div");
const header2 = document.createElement("h3");
const listing2 = document.createElement("ul")
header2.textContent = "Skills";
body2.appendChild(header2);
body2.appendChild(listing2)
column.appendChild(body2);


listing2.style.listStyleType = "none";
listing2.style.paddingLeft = "0px";

for (let k = 0; k < asabenehChallenges2020.author.skills.length; k++) {
  const mylisting2 = document.createElement("li")
  listing2.appendChild(mylisting2)
  mylisting2.textContent = asabenehChallenges2020.author.skills[k]
  mylisting2.style.paddingBottom = "5px";
}





//create qualifications
const body3 = document.createElement("div");
const header3 = document.createElement("h3");
const listing3 = document.createElement("ul")
header3.textContent = "Qualifications";
body3.appendChild(header3);
body3.appendChild(listing3)
column.appendChild(body3);


listing3.style.listStyleType = "none";
listing3.style.paddingLeft = "0px";

for (let k = 0; k < asabenehChallenges2020.author.qualifications.length; k++) {
  const mylisting3 = document.createElement("li")
  listing3.appendChild(mylisting3)
  mylisting3.textContent = asabenehChallenges2020.author.qualifications[k]
  mylisting3.style.paddingBottom = "5px";
}



//create keywords div 
const keywords = document.createElement("div");
const keyHeader = document.createElement("h3");
keyHeader.textContent = "Keywords";
keywords.appendChild(keyHeader)
div.appendChild(keywords);

keywords.style.width = "60%";


for (let v = 0; v < asabenehChallenges2020.keywords.length; v++) {
  let keys = document.createElement("paragraph");
  keywords.appendChild(keys)
  keys.textContent = `# ${asabenehChallenges2020.keywords[v]}`
  keys.style.display = "inline-block"
  keys.style.marginBottom = "10px"
  keys.style.padding = "10px";
  keys.style.borderRadius = "50px";
  keys.style.marginRight = "15px";

  function keywordsColor() {
    let str = "0123456789abcdef";
    let hexa = "#";
    let index;
    for (let f = 0; f < 6; f++) {
      index = Math.floor(Math.random() * str.length)
      hexa += str.charAt(index);
  }
    return keys.style.backgroundColor =  hexa; 
  }

  keywordsColor();
}
  