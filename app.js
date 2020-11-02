const gameTag = document.querySelector("p");
const randomTag = document.querySelector("footer img");

const data = [

"7 Wonders",
"7 Wonders Duel",
"Forbidden Desert",
"Race for the galaxy",
"Bang",
"Bang Duel",
"Compatibility",
"Game of Cats",
"Code Names",
"Code names Duet",
"Code Names Pictures",
"Okiya",
"Spy Fall",
"Cosmic Encounter",
"Cosmic Encounter Duel",
"Ingenious travel edition",
"The Lost Expedition",
"The Blody Inn",
"Tally Ho",
"The Hare and the Tortoise",
"Avalon",
"Cartograph",
"Hotshots",
"Century Eastern Wonders",
"Agricola", 
"Space Alert",
"Istanbul",
"Dots",
"Secrets",
"Masquerade",
"Jenga",
"Labyrith",
"Fresko",
"Room", 
"Mysterium", 
"Roll for the Galaxy", 
"Mr Jack", 
"Time Stories",
"Mountain of Madness",
"Camel Up", 
"Ricochet Robots",
"Kingdom Builder",
"Keltis",
"Repello",
"Arctic Scavenger", 
"Cronicals of Crime", 
"Pagoda",
"Flash Point", 
"Pandemic", 
"Pandemic State of Emergency",
"Five Tribes",
"Rokoko",
"Airlines",
"Robinson Crusoe",
"Village",
"Black Friday",
"Captain Sonar",
"Robo Rally",
"Tzolkin", 
"Nations the Dice Game",
"Concept",
"Steamrollers",
"Forbidden Island",
"Story Cubes",
"Tsuro",
"Magic Maze", 
"Ticket to Ride Europe",
"Ticket too Ride New York",
"Perudo",
"Skulls",
"Friday",
"Nuns on the Run",
"Quadro",
"Katamino",
"Saboteur", 
"Dobble",
"Tangram",
"Rush Hour",
"Anti Virus",
"Tantrix",
"solo game with rotating pices",
"Silver and Gold",
"Maquis",
"Carcasonne", 
"Brains Japones Garden",
"Not Alone",
"Condotiere",
"Epic Galaxies",
"Epic Kingdom",
"Epic Quest",
"Epic Mechs",
"Epic Zombie",
"One Deck Dungeon",
"Bandido",
"Kuhhandel",
"Schotten Totten",
"The Game",
"Onirim",
"Railroad Ink",
"Hack Trick",
"Citadels",
"Coup",
"Doodle City",
"Innovation",
"Amundsen vs Scott",
"Iota",
"Imagine",
"Palm Island",
"Sherlock Holmes",
"Roll through the ages Bronce age",
"No siesta the dice game",
"Onitama",
"Steam", 
"Power Grid", 
"Yinsh",
"Glen Kill",
"Targi",
"Flux Monty Python",
"Soundiculous",
"Crononauts", 
"The mind",
"Quircle cards",
"Ingenious cards",
"Cafe International Cards",
"Galaxy Trucker", 
"Catan Card Game",
"Hanabi",
"Al Carbone",
"Wizard Extreme",
"Le Havre",
"Turn und Taxis",
"K2",
"Colt Express",
"Small World Underground",
"Fog of Love ",
"The Crew",
"Word Bomb",
"Clank in Space",
"Gravity Super Star",
"Imperial Settlers of the North",
"Love Letter",
"Point Salad",
"Fox in the Forest",
"Imhotep Duel",
"King of New York",
"Detective",
"It's a wonderful world ",
"Ohanami",
"Decrypto",
"Harry Potter Hogwards Battle Defense against the Dark Arts",
"Claim",
"Artischocken",
"Repello",
"Stone Age"

]



const getGame = function () {

    randomGame = Math.floor(Math.random() * data.length)

    gameTag.innerHTML = data[randomGame];

}


randomTag.addEventListener("click", function () {
    
    getGame()

})

