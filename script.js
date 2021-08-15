var alphabet = {
    0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h',
    8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o',
    15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w',
    23: 'x', 24: 'y', 25: 'z'
};

var scores = 0;
var fails = 0;
var set = [];
var setWords = [];
var guesses = [];
var letter = document.getElementsByClassName("letters");
var stickman = document.getElementsByClassName("image");
var display = document.getElementById("display");

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("words").value = "";
    for (var e = 0; e < stickman.length; e++) { stickman[e].style.display = "none"; }
    start();
});

var img = document.getElementsByClassName("image");
for (var i = 0; i < img.length; i++) {
    console.log("images:", i)
}


function getValue(i) { return alphabet[i] } // convert id to alphabet

function stick(i) {
    stickman[i - 1].style.display = "none";
    stickman[i].style.display = "block";
}

function getBtn() {
    function click() {
        for (var i = 0; i <= letter.length; i++) {
            if (this.id == i) {
                console.log(this.id)
                var buttonID = this.id;
                var letterss = getValue(this.id);
                document.getElementById(buttonID).disabled = true;
                guesses.push(letterss.toUpperCase() + "\n");
                document.getElementById("words").value = guesses.join(" ");
                // console.log(letterss); // Show letters
                for (var l = 0; l < word.length; l++) {
                    // console.log(l); // array index
                    // console.log(set[0][l] == letterss) // weather true or false
                    var getStatus = set[0][l] == letterss;
                    if (getStatus !== false) {
                        setWords[l] = letterss;
                        document.getElementById("display").value = setWords.join(" ");
                    }
                }
                // console.log(setWords.indexOf(String(letterss))); // check if string is inside array
                if (setWords.indexOf(String(letterss)) == -1) {
                    document.getElementById("fails").value = fails += 1;
                    stick(fails);
                }
            }
        }
    }

    for (var r = 0; r < letter.length; r++) {
        letter[r].onclick = click;
    } // get button
}

function checks() {
    if (setWords.join(",") == set.join("")) {
        setWords = [];
        document.getElementById('words').value = "YOU WIN!";
        for (var r = 0; r < letter.length; r++) { letter[r].disabled = true; }
        document.getElementById("score").value = scores += 1;
    }
    else if (fails == 6) {
        fails = 0;
        document.getElementById('words').value = "YOU LOST!";
        for (var r = 0; r < letter.length; r++) { letter[r].disabled = true; }
        document.getElementById("score").value = scores += -1;
        document.getElementById("display").value = set.join(" ");
    }
}

function getWords() {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === "-") {
            setWords.push(["-"]);
            document.getElementById("display").value = setWords.join(" ");
        } else {
            setWords.push(["_"]);
            document.getElementById("display").value = setWords.join(" ");
        }

    }
}

function randomClues() {
    var storeAlphabet;
    var storeRandom = 0;
    var random = Math.floor(Math.random() * word.length);
    var randomLetter = set[0][random];
    storeRandom = random; // store Int
    storeAlphabet = getValue(storeRandom) // get Alphabet after converstion
    // console.log(storeAlphabet)
    for (var i = 0; i < words.length; i++) {
        if (set[0][i] == storeAlphabet) {
            setWords[i] = storeAlphabet;
            document.getElementById('words')
            document.getElementById(storeRandom).disabled = true;
        }
    }
    //console.log(set[0][random]) // gets random letters
    //console.log("setWords:",setWords) // display array
}

function start() {
    words = ["mountain", "opinion", "figment", "jaws", "profit", "courthouse", "knowledge", "sandbox", "stockholder", "exponential"];
    word = words[Math.floor(Math.random() * words.length)];
    // word = word.replace(/\s/g, "-");

    // Functions
    reset();
    getWords();
    getBtn();
    setInterval(checks, 0);

    // New Lines
    set.push(word.split(""));
    randomClues();
    document.getElementById("display").value = setWords.join(" ");
    console.log(set);


}

function reset() {
    guesses = [];
    set = [];
    setWords = [];
    display.value = '---HANGMAN---';
    document.getElementById("fails").value = fails = 0;
    for (var r = 0; r < letter.length; r++) { letter[r].disabled = false; }
    stickman[0].style.display = "block";
}
