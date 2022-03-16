const quoteTag = document.querySelector('h1');
const authorTag = document.querySelector('p');
const randomButton = document.querySelector('img');

let data = [];

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





