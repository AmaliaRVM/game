const gameTag = document.querySelector("h2");
const playersTag = document.querySelector("p");
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
        playersTag.innerHTML = randomGame.playerMin;
    }

}


randomTag.addEventListener("click", function (data) {
    console.log('click')
    getGame(data)

})

