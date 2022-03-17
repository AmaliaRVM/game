const quoteTag = document.querySelector('h1');
const authorTag = document.querySelector('p');
const randomButton = document.querySelector('img');
const bodyTag = document.querySelector('body');


//const with API list of objects (example number one)
/* const url = "https://api.superhi.com/api/test/quotes/"; */


/* let data = []; */


const colors = ['#e775eb', '#7581eb', '#ce3434', '#75ebb4'];

//fetch (example number one)
/* catchData();

async function catchData (){
    const response = await fetch(url);
    const json = await response.json();
    data = json
    getQuote() 
} */

//another way of writing fetch
/* fetch(url)
.then(response => response.json())
.then((jsonData) => {
    data = jsonData
    getQuote()
} 
) */

//get quote function (example number one)
/* const getQuote = function (){

    if (data.length > 0){
        
        //get a random quote the random button
        const randomNumber = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomNumber];

        //get random colors
        const randomColorNumber = Math.floor(Math.random() * colors.length);
        const randomColor =  colors[randomColorNumber];
    
        //put it in the site
        quoteTag.innerHTML = randomQuote.quote;
        authorTag.innerHTML = randomQuote.author;

        //put it in the background
        authorTag.style.color = randomColor;

    }

} */

//Example number two, with another endpoint

//const with API single object (example number two)
const url = "https://api.superhi.com/api/test/quotes/random"; 

const getQuote = function () {

    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {

        quoteTag.innerHTML = "&ldquo;" + jsonData.quote + "&rdquo;"
        authorTag.innerHTML = "&mdash; " + jsonData.author  

        if(jsonData.quote.length > 100){
            quoteTag.classList.add("long")
        }else{
            quoteTag.classList.remove("long")
        }

        bodyTag.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 90%)`

    } )
}

getQuote();


//click event
randomButton.addEventListener('click', (e)=>{
    getQuote();
    console.log('click')
})





