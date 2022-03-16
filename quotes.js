const quoteTag = document.querySelector('h1');
const authorTag = document.querySelector('p');
const randomButton = document.querySelector('img');

const url = "https://api.superhi.com/api/test/quotes/";

let data = [];

//fetch
fetch("quotes.json")
.then(response => response.json)
.then(jsonData => console.log(jsonData));

//get quote function
const getQuote = function (){

    if (data.length > 0){
        
        //get a random quoteto the random button
        const randomNumber = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomNumber];
    
        //put it in the site
        quoteTag.innerHTML = randomQuote.quote;
        authorTag.innerHTML = randomQuote.author;

    }

}

//click event
randomButton.addEventListener('click', (e)=>{
    getQuote();
    console.log('click')
})





