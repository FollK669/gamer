// JavaScript source code

var elm;


const buttons = document.querySelectorAll('#red, #green, #blue, #yellow');


function clickMe(lbl) {

    elm = document.getElementById(lbl);

    elm.addEventListener("click", alerter(lbl));






    colorbuttonpicker();
}






//Geeft de naam weer in een H1 met lvls2 als class
function colorbuttonpicker() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const clickedColor = button.id;
            document.querySelectorAll('.lvls2').forEach(function (element) {
                element.textContent = button.id;
            });


        });
    }); }




function alerter(keyss) {


    //playSound("./sounds/" + keyss + ".mp3");
    presser();
}



//speelt de geluiden af
function playSound(filename) {
    var audio = new Audio(filename);
    audio.play();
}


//visueel press effect toevoegen en wegnemen
function presser() {
    elm.classList.add("pressed")
    setTimeout(function () {
        elm.classList.remove("pressed");
    }, 300);
}








var telster = 0;


function GameStart2() {
    // Disable the button to prevent multiple clicks
    document.getElementById("myButton").disabled = true;

    

    var numbers = [];
   
    var tell = 1; // Move the tell variable here if it's not used elsewhere
    var isDemoMode = true;

    var deadAchtig = true;

 

    var demoder = "demo";


    










  
 

    


        if (!isDemoMode) {
            isDemoMode = true;
            playermodus();




        }
        else {
            isDemoMode = false;
            function demoMode() {
                var paragraphs = document.getElementById("pi");
                var GenListRandonNr = [];
                document.querySelectorAll('.lvls').forEach(function (element) {
                    element.textContent = 'lvl 1 - Repeat me';
                });
                colorbuttonpicker();

                var RondeNr = 1;


                for (var j = 0; j < RondeNr; j++) {
                    setTimeout(function () {
                        var randomNumber = Math.floor(Math.random() * 4) + 1;
                        numbers.push(randomNumber);

                        if (randomNumber === 1) { clickMe("yellow");  }
                        else if (randomNumber === 2) { clickMe("green");  }
                        else if (randomNumber === 3) { clickMe("blue");  }
                        else if (randomNumber === 4) { clickMe("red") }

                        paragraphs.textContent = numbers.join(", ");

                        if (numbers.length === 3) {
                            // Update the text content only when all colors are generated
                            paragraphs.textContent = numbers.join(", ");
                            GenListRandonNr = numbers.join(", ");
                            // Enable the button after sequence generation is complete
                            document.getElementById("myButton").disabled = false;
                            playermodus();
                        }
                      
                    }, 950 * (j + 1)); // Wait 0.95 seconds * (j+1) between each iteration
                 

                    

                    
                    RondeNr = 3;

              
                }

            }

            demoMode();
     
        }

        

     
           // deadAchtig = true;
    }

    //}while(!deadAchtig)

function playermodus() {
    document.querySelectorAll('.lvls').forEach(function (element) {
        element.textContent = 'lvl 1 - Your turn...';

    });
    colorbuttonpicker();
    var numersPlayer = [];

    //buttons.forEach(button => {
    var teller = 0;

    do {

            
            button.addEventListener('click', () => {
                const clickedColor = button.id;
                document.querySelectorAll('.lvls2').forEach(function (element) {
                    element.textContent = clickedColor;
                });

                // Store numeric values based on the color clicked
                if (clickedColor === "yellow") { numersPlayer.push(1); }
                else if (clickedColor === "green") { numersPlayer.push(2); }
                else if (clickedColor === "blue") { numersPlayer.push(3); }
                else if (clickedColor === "red") { numersPlayer.push(4); }

                // Display the current sequence of player's choices
                document.querySelectorAll('.lvls').forEach(function (element) {
                    element.textContent = numersPlayer.join(', ');
                });

                // Stop de functie als de speler vier keer heeft geklikt
                if (numersPlayer.length === 4) {
                    buttons.forEach(button => {
                        button.removeEventListener('click', clickHandler);
                    });
                }
                teller++;
            });
        // });
        if (teller === 3) { isDemoMode = true; demoMode(); }
           
        
} while (isDemoMode === false)
    function demoMode() {
        var paragraphs = document.getElementById("pi");
        var GenListRandonNr = [];
        document.querySelectorAll('.lvls').forEach(function (element) {
            element.textContent = 'lvl 1 - Repeat me';
        });
        colorbuttonpicker();

        var RondeNr = 1;


        for (var j = 0; j < RondeNr; j++) {
            setTimeout(function () {
                var randomNumber = Math.floor(Math.random() * 4) + 1;
                numbers.push(randomNumber);

                if (randomNumber === 1) { clickMe("yellow"); }
                else if (randomNumber === 2) { clickMe("green"); }
                else if (randomNumber === 3) { clickMe("blue"); }
                else if (randomNumber === 4) { clickMe("red") }

                paragraphs.textContent = numbers.join(", ");

                if (numbers.length === 3) {
                    // Update the text content only when all colors are generated
                    paragraphs.textContent = numbers.join(", ");
                    GenListRandonNr = numbers.join(", ");
                    // Enable the button after sequence generation is complete
                    document.getElementById("myButton").disabled = false;
                    playermodus();
                }

            }, 950 * (j + 1)); // Wait 0.95 seconds * (j+1) between each iteration





            RondeNr = 3;


        }

    }

    demoMode();
  }
  
  
    function messagelvl(strLbl, onderboven) {

        document.querySelectorAll(onderboven).forEach(function (element) {
            element.textContent = strLbl;
        });

    }

function checkScore() {


    for (var i = 0; i < numersPlayer.length; i++) {
        if (numersPlayer[i] === numbers[i]) {
            document.querySelectorAll('.lvls').forEach(function (element) {
                element.textContent = 'juist';
            });
        } else {
            document.querySelectorAll('.lvls').forEach(function (element) {
                element.textContent = 'fout';
            });
        }
    }







}










var isFunctionExecuted = false;

function executeFunction() {
    if (!isFunctionExecuted) {
        // Disable the button to prevent multiple rapid executions
        document.getElementById("myButton").disabled = true;

        isFunctionExecuted = true;

        setTimeout(() => {
            isFunctionExecuted = false;
            // Enable the button after delay
            document.getElementById("myButton").disabled = false;
        }, 2000);
    }
}

// Koppel de executeFunction aan de klikgebeurtenis van de knop
document.getElementById("myButton").addEventListener("click", executeFunction);

