const gameTag = document.querySelector("h3");
const timeTag = document.getElementById("time");
const playersTag = document.getElementById("player");
const randomTag = document.querySelector("footer img");

let data = [];


catchData().catch(error =>{
    console.log("error")
})

async function catchData(){
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);

    getGame(data)
}



const getGame = function (data) {

    if(data.length > 0){
        randomNumber = Math.floor(Math.random() * data.length)
        randomGame = data[randomNumber]
        console.log(randomGame.name)
        
        gameTag.innerHTML = randomGame.name;
        timeTag.innerHTML = randomGame.gameLength;
        playersTag.innerHTML = randomGame.playerMin;
    }

}


randomTag.addEventListener("click", function () {
    console.log('click')
    catchData();

})

