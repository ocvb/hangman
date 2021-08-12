window.onload = function() {
    var alphabet = {
        1:'a', 2:'b', 3:'c', 4:'d', 5:'e', 6:'f', 7:'g', 8:'h', 
        9:'i', 10:'j', 11:'k', 12:'l', 13:'m', 14:'n', 15:'o', 
        16:'p',17:'q', 18:'r',19:'s',20:'t', 21:'u', 22:'v', 23:'w', 
        24:'x', 25:'y', 26:'z'
    };

    var scores = 0;
    var storeWins = 0;
    var fails = 0;
    var set = [];
    var setWords = [];
    var letter = document.getElementsByClassName("letters");

    function getBtn() {
        function convert(k) { return alphabet[k] } // convert this.id to alphabet
        function click(){
            for(var i = 0; i <= letter.length; i++) {
                if(this.id == i) {
                    var l;
                    var getFalse;
                    var getTrue;
                    buttonID = this.id;
                    letterss = convert(this.id)
                    document.getElementById(buttonID).disabled = true;
                    // console.log(letterss); // Show letters
                    
                    for (l = 0; l < word.length; l++) {
                        // console.log(l); // array index
                        // console.log(set[0][l] == letterss) // weather true or false
                        getTrue = set[0][l] == letterss;
                        
                        if (getTrue != false) {
                            if(scores == 0) {
                                scores++;
                            }
                            setWords[l] = letterss;
                            document.getElementById("words").value = setWords.join("");
                            document.getElementById("score").value = scores++;
                             
                        }     
                                    
                    }
                    getFalse = set[0] == letterss;
                    if (getFalse == false) {
                        document.getElementById("fails").value = fails++;
                    }  
                    
                }
            }
            
        }
    
        for(var r = 0; r < letter.length; r++){
            letter[r].onclick = click;
        } // get button
    }

    function checks() {
        
        if(setWords.join(",") == set.join("")) {
            document.getElementById('display').value = "YOU WIN!";
            for(var r = 0; r < letter.length; r++){ letter[r].disabled = true; }
            storeWins++;
        }
        if(fails > 6) {
            document.getElementById('display').value = "YOU LOST!";
            for(var r = 0; r < letter.length; r++){ letter[r].disabled = true; }
            storeWins--;
            
        }
    }

    function getWords() {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === "-") {
                document.getElementById("words").value = "-";
            } else {
                var hyfen = []; 
                hyfen += ["_"];
                document.getElementById("words").value = setWords.join("");
            }
            setWords.push(hyfen);
        }
        var breakdown = word.split("");
        set.push(breakdown);
    }
    function reset() {
        set = [];
        setWords = [];
        document.getElementById("score").value = scores = 0;
        document.getElementById("fails").value = fails = 0; 
        for(var r = 0; r < letter.length; r++){
            letter[r].disabled = false;
        }
    }
    
    function start() {
        words = ["mountain", "alien", "gladiator", "jaws"];
        word = words[Math.floor(Math.random() * words.length)];
        // word = word.replace(/\s/g, "-");
        
        reset();
        getWords();
        getBtn();
        setInterval(checks, 100);
        console.log(set);
    }

    document.getElementById("start").addEventListener("click", function() {
        document.getElementById("words").value = "";
        start();
    });
}