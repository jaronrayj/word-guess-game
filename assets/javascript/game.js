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
    pokeSplit = [],
    userGuesses = [];

// List out all pokemon
var pokemonArray = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetchd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "MrMime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
]


// New Game setup
function newGame() {
    guesses = 14
    userGuesses = [];
    newPokemon();
    currentPokemon = pokemonArray[pokemonNumber];
    splitArray();
    displayBlanks();

}

// Check console logs
function check() {
    console.log("user input: " + userInput);
    console.log("pokemon: " + currentPokemon);
    console.log("pokemon number " + pokemonNumber);
    // console.log("pokeDex: " + pokeDexNumber);
    // console.log("picture site: " + pokePic);
    console.log("pokeSplit " + pokeSplit);
    console.log("guesses " + userGuesses);

    console.log("--------------------------------------------");
}

// Retrive new pokemon from array
function newPokemon() {
    pokemonNumber = Math.floor(Math.random() * 151);
    pokeDexNumber = pokemonNumber + 1;
    urlCombine();
}

// split the pokemon name into an array
function splitArray() {
    var str = currentPokemon;
    pokeSplit = str.split("");
    return pokeSplit;
}


// Display blanks
function displayBlanks() {
    for (var i = 0; i < pokeSplit.length; i++) {
        newSpan = document.createElement("span");
        var newId = pokeSplit[i].toLowerCase() + i;
        newSpan.setAttribute("id", newId);
        newSpan.textContent = "_ ";
        var pokeBlanksText = document.getElementById("pokeSplitBlanks");
        pokeBlanksText.appendChild(newSpan);
    }
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
        userGuesses.push(userInput);
        check();
        for (var i = 0; i < pokeSplit.length; i++) {
            if (userInput === pokeSplit[i].toLowerCase()) {
                elem = document.getElementById(userInput + i);
                elem.textContent = userInput + " ";

                console.log(elem);
                console.log("part of array " + true);
                // if (document.getElementsByClassName(userInput).textContent === userInput + " ") {
                // document.getElementById
            }
        }
    }
}


// Play beginning audio
function battle() {
    audio.pause();
    var audio = document.getElementById("audio");
    audio.play();
}

// Play victory audio
function caught() {
    audio.pause()
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

// function getChildIndex(child) {
//     var parent = child.parentNode;
//     var i = parent.children.length - 1;
//     for (; i >= 0; i--) {
//         if (child == parent.children[i]) {
//             break;
//         }
//     }
//     return i;
// };
// var element = document.getElementById("pokeSplitBlanks");
// var index = getChildIndex(element);
// console.log(index);


// Take pokeSplit and put it into a new array with blanks
// Have for loop print out the new array
// Take pokeSplit and compare to user input
// for (let i = 0; i < pokeSplit.length; i++) {
//     if (userInput === pokeSplit[i]) {

//         // add userinput to newpokearray[i];
//     } else if (userInput === newpokearray[i]) {
//         alert("you have already used that letter")
//     } else {
//         guesses--;
//     }
// }


//  Will use this logic to compare data
// var contains = function (haystack, needle) {
//     return !!~haystack.indexOf(needle);
// };

// // can be used like so now:
// if (contains(items, 3452)) {
//     // do something else...
// }

// Dominic code
// for (var i = 0; i < pokeSplit.length; i++) {

//     document.getElementById("pokeSplitBlanks").innerHTML = document.getElementById("pokeSplitBlanks").innerHTML + "<span id='letter" + i + "'> _ </span>";

// }

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