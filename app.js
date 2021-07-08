const gameTag = document.querySelector("h2");
const playersTag = document.querySelector("p");
const randomTag = document.querySelector("footer img");

let data = [];


const getGame = function () {

    if(data.length > 0){
        randomNumber = Math.floor(Math.random() * data.length)
        randomGame = data[randomNumber]
        
        gameTag.innerHTML = randomGame.name;
        playersTag.innerHTML = randomGame.playerMax;
    }

}


randomTag.addEventListener("click", function () {
    
    getGame()

})

