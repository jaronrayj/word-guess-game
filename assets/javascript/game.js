// Pokedex numbers https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png

// Get elements
var pokemonText = document.getElementById("pokemon");
// var pokePicText = document.getElementById("pokePic");

var currentPokemon;
var guesses = 14;
var userInput;
var pokemonNumber;
var pokedexNumber;
var pokePic;


var pokemonArray = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
]


// New Game setup
function newGame() {
    guesses = 14
    newPokemon();
    currentPokemon = pokemonArray[pokemonNumber];
}

// Check console logs
function check() {
    console.log("user input: " + userInput);
    console.log("pokemon: " + currentPokemon);
    console.log("pokemon number " + pokemonNumber);
    console.log("pokedex: " + pokedexNumber);
    console.log("picture site: " + pokePic);
}

// Retrive new pokemon from array
function newPokemon() {
    pokemonNumber = Math.floor(Math.random() * 152);
    pokedexNumber = pokemonNumber + 1;
    urlCombine();
}

function urlCombine() {
    var url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
    if (pokedexNumber < 10) {
        pokePic = url + "00" + pokedexNumber + ".png";
    } else if (pokedexNumber < 100) {
        pokePic = url + "0" + pokedexNumber + ".png";
    } else {
        pokePic = url + pokedexNumber + ".png"
    }

}

newGame();

check();

// Pull only letters
document.addEventListener("keydown", checkKey)

function checkKey(key) {

    if (key.keyCode >= "65" && key.keyCode <= "90") {

        var userInput = event.key.toLowerCase();
        check();


    }
}




function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function caught() {
    var audio = document.getElementById("caught");
    audio.play();
}

Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
};



var img = document.createElement("img");

img.src = pokePic;
var src = document.getElementById("pokePicText");

src.appendChild(img);




// Audio attempts....
// var audio = document.createElement("audio");
// audio.src = "../sounds/107-battle (vs wild pokemon).mp3"
// audio.play();


// var audio = document.createElement("wildAppear");
// audio.src = "../sounds/pokemon-battle.mp3"
// audio.play();

// function playAudio(url) {
//     var audio = document.createElement('audio');
//     audio.src = url;
//     audio.style.display = "none"; //added to fix ios issue
//     audio.autoplay = false; //avoid the user has not interacted with your page issue
//     audio.onended = function () {
//         audio.remove(); //remove after playing to clean the Dom
//     };
//     document.body.appendChild(audio);
// }

// playAudio("../sounds/pokemon-battle.mp3")