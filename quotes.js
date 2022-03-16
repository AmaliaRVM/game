const quoteTag = document.querySelector('h1');
const authorTag = document.querySelector('p');
const randomButton = document.querySelector('img');


const url = "https://api.superhi.com/api/test/quotes/";

let data = [];

const colors = ['#e775eb', '#7581eb', '#ce3434', '#75ebb4'];

//fetch
catchData();

async function catchData (){
    const response = await fetch(url);
    const json = await response.json();
    data = json
    getQuote() 
}

/* fetch(url)
.then(response => response.json())
.then((jsonData) => {
    data = jsonData
    getQuote()
} 
) */

//get quote function
const getQuote = function (){

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

}

//click event
randomButton.addEventListener('click', (e)=>{
    getQuote();
    console.log('click')
})





