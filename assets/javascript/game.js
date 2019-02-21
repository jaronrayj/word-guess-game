// Get elements
var pokemonBlank = document.getElementById("pokemonBlank-text");



// Various variables to collect data
var currentPokemon,
    guesses = 14,
    userInput,
    pokemonNumber,
    pokeDexNumber,
    pokePic,
    pokeString,
    userInput,
    pokeSplit = [],
    pokeSplitBlanks = [];

// List out all pokemon
var pokemonArray = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
]


// New Game setup
function newGame() {
    guesses = 14
    newPokemon();
    currentPokemon = pokemonArray[pokemonNumber];
    splitArray();
    printCurrentPokemon();
}

// Check console logs
function check() {
    console.log("user input: " + userInput);
    console.log("pokemon: " + currentPokemon);
    console.log("pokemon number " + pokemonNumber);
    console.log("pokeDex: " + pokeDexNumber);
    console.log("picture site: " + pokePic);
    console.log("pokesplit " + pokeSplit);
    console.log("--------------------------------------------");
}

// Retrive new pokemon from array
function newPokemon() {
    pokemonNumber = Math.floor(Math.random() * 152);
    pokeDexNumber = pokemonNumber + 1;
    urlCombine();
}

// split the pokemon name into an array
function splitArray() {
    var str = currentPokemon;
    pokeSplit = str.split("");
}

// combines the pokeDex number plus the pokemon website's link to pull the image
function urlCombine() {
    var url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
    if (pokeDexNumber < 10) {
        pokePic = url + "00" + pokeDexNumber + ".png";
    } else if (pokeDexNumber < 100) {
        pokePic = url + "0" + pokeDexNumber + ".png";
    } else {
        pokePic = url + pokeDexNumber + ".png"
    }

}

// Needs work, changes the array to blanks
for (var i = 0; i < pokeSplit.length; i++) {
    pokeSplit[i] = "_ ";
}

// Prints blanks for each letter

function printCurrentPokemon() {
    for (var i = 0; i < pokeSplit.length; i++) {
        var start = document.getElementById("pokeSplitBlanks");
        var end = document.createTextNode(pokeSplit[i]);
        start.appendChild(end);
    }
}


// for (var i = 0; i < pokeSplit.length; i++) {
//     var element = createElement("div")
//     element.textContent = "_ ";
//     pokemonBlank.appendChild(element);
// }

// Take pokeSplit and put it into an array
// Have for loop print out the new array
// Take pokesplit and compare to user input
for (let i = 0; i < pokeSplit.length; i++) {
    if (userInput === pokesplit[i]) {
        // add userinput to newpokearray[i];
    } else if (userInput === newpokearray[i]) {
        alert("you're already used that")
    } else {
        guesses--;
    }
}

// run script to display newpokearray




// Start up
newGame();
check();

// Grab users input
document.addEventListener("keydown", checkKey)

function checkKey(key) {

    // Only letters will be pulled
    if (key.keyCode >= "65" && key.keyCode <= "90") {

        // Lowercase the input
        userInput = event.key.toLowerCase();
        check();


        if (userInput === pokeSplit) {
            console.log("part of array: " + true);
        }

    }
}

//  Will use this logic to compare data
// var contains = function (haystack, needle) {
//     return !!~haystack.indexOf(needle);
// };

// // can be used like so now:
// if (contains(items, 3452)) {
//     // do something else...
// }


// Play beginning audio
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

// Play victory audio
function caught() {
    var audio = document.getElementById("caught");
    audio.play();
}

// Attempt at stopping the music....
Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
};


// Pull the image and insert it into the HTML
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