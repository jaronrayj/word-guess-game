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
    userGuesses = [],
    correct = 0,
    completeArray = [],
    cleanSlateArray = [];

// List out all pokemon
var pokemonArray = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetchd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "MrMime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
]


// New Game setup
function newGame() {
    // document.getElementById("img1").style.zIndex = "1";
    guesses = 10
    userGuesses = [];
    pokeSplit = [];
    cleanSlate();
    cleanSlateArray = [];
    newPokemon();
    currentPokemon = pokemonArray[pokemonNumber];
    splitArray();
    displayBlanks();
    // imageCreate();
    check();
}

// Check console logs
function check() {
    console.log("user input: " + userInput);
    console.log("pokemon: " + currentPokemon);
    // console.log("pokemon number " + pokemonNumber);
    // console.log("pokeDex: " + pokeDexNumber);
    // console.log("picture site: " + pokePic);
    // console.log("pokeSplit " + pokeSplit);
    // console.log("letters guessed " + userGuesses);
    console.log("guesses left " + guesses);
    // console.log("complete array " + completeArray);
    console.log("clean slate array " + cleanSlateArray);

    console.log("--------------------------------------------");
}

// Retrive new pokemon from array
function newPokemon() {
    pokemonNumber = Math.floor(Math.random() * pokemonArray.length);
    pokeDexNumber = pokemonNumber + 1;
    urlCombine();
}

// split the pokemon name into an array
function splitArray() {
    var str = currentPokemon;
    pokeSplit = str.split("");

}

// removes extra elements
function cleanSlate() {
    for (var i = 0; i < cleanSlateArray.length; i++) {
        removeElement(cleanSlateArray[i]);
    }
}


function removeElement(elementId) {
    // Removes an element from the document
    var elem = document.getElementById(elementId);
    elem.parentNode.removeChild(elem);
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
        completeArray.push(newId);
        cleanSlateArray.push(newId);


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

function lost() {
    alert("you lost");
    // document.getElementById("img1").style.zIndex = "1";
}

function win() {
    alert("you won");
    // document.getElementById("img1").style.zIndex = "1";
}


// Start up
newGame();



// Grab users input
document.addEventListener("keydown", checkKey)

function checkKey(key) {

    // Only letters will be pulled
    if (key.keyCode >= "65" && key.keyCode <= "90") {
        check();

        // Lowercase the input
        userInput = event.key.toLowerCase();
        for (var i = 0; i < pokeSplit.length; i++) {
            if (userInput === pokeSplit[i].toLowerCase()) {
                var user = userInput + i
                var index = completeArray.indexOf(user);
                elem = document.getElementById(user);
                elem.textContent = userInput + " ";
                userGuesses.push(userInput);

                // logic to remove elements from completed array
                if (index > -1) {
                    completeArray.splice(index, 1);
                }

                // If completedarray clears then wins
                if (completeArray.length === 0) {
                    win();

                }

            } else if (userGuesses.includes(userInput)) {
                userGuesses.push(userInput);
                // do nothing

            } else if (pokeSplit.includes(userInput)) {
                userGuesses.push(userInput);
                console.log(true);
            } else {
                userGuesses.push(userInput);
                guesses--;
                if (guesses === 0) {
                    lost();
                }
            }
        }

    }
}

document.getElementById("startOver").addEventListener("click", newGame);


// Play beginning audio
var battleMusic = document.getElementById("battle");

function battle() {
    caughtMusic.pause();
    caughtMusic.currentTime = 0;
    battleMusic.play();
}

// Play victory audio
var caughtMusic = document.getElementById("caught");

function caught() {
    battleMusic.pause();
    battleMusic.currentTime = 0;
    caughtMusic.play();
}



// Pull the image and insert it into the HTML
function imageCreate() {
    var img = document.createElement("img");
    img.src = pokePic;
    var src = document.getElementById("pokePicText");
    src.appendChild(img);
}