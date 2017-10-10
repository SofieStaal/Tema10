document.addEventListener("DOMContentLoaded", function () {

    // her starter quiz


    var activeQuestion = 1; //hvilken spørsmålsboks er aktiv
    var rightAnsweres = 0;

    var buttonList = document.querySelectorAll(".answer");

    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', handleButtonClick);
    } // her sjekker loopen mellom 1 og 9 av spørsmålene

    function handleButtonClick(evt) {

        // 1. get target ref
        var answereClass = evt.target.classList[0];

        if (answereClass == "riktig") {
            //brukeren valgte riktig svaralternativ
            //her kan jeg legge til hva som skjer ved riktig svar
            rightAnsweres++;

            $.confetti.restart();
            setTimeout(function () {
                $.confetti.stop();
            }, 1000);

        } else {
            // brukeren valgte feil svaralternativ.
            // her bytter jeg bilder ut ifra hva slags knapp en trykker på.
            if (activeQuestion == 1) document.getElementById('lunge').src = "img/lunge_trist.svg";
            if (activeQuestion == 2) document.getElementById('hjerte').src = "img/hjerte_trist.svg";
            if (activeQuestion == 3) document.getElementById('hjerne').src = "img/hjerne_trist.svg";
        }

        // 2. show next question
        if (activeQuestion == 1) {
            document.querySelector(".question-1").classList.toggle("hidden");
            document.querySelector(".question-2").classList.toggle("hidden");
            //bytter fra spørsmålsboks 1 til 2
        }

        if (activeQuestion == 2) {
            document.querySelector(".question-2").classList.toggle("hidden");
            document.querySelector(".question-3").classList.toggle("hidden");
        } //bytter fra spørsmålsboks 2 til 3


        if (activeQuestion == 3) {
            document.querySelector(".question-3").classList.toggle("hidden");
            document.querySelector(".teller").classList.toggle("hidden");
            //stopper teller ved å legge til hidden-klassen
            if (rightAnsweres == 3) {
                document.querySelector(".question-5").classList.toggle("hidden");
            } else {
                document.querySelector(".question-4").classList.toggle("hidden");
                document.querySelector(".info").classList.toggle("hidden");

            }
        }

        activeQuestion++;
    }
});
