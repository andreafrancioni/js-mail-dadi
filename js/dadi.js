const inputNumber = document.getElementById("inputNumber");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function() {
    
    const numGiocatore = inputNumber.value;
    const numComputer = Math.floor(Math.random()*6) + 1;

    if(numGiocatore > numComputer){
        document.getElementById("checkUtente").innerHTML = `Hai VINTO! il computer ha buttato il numero ${numComputer}`; 
    }else if(numGiocatore == numComputer){
        document.getElementById("checkUtente").innerHTML = `PAREGGIO! il computer ha buttato il tuo stesso numero ${numComputer}`; 
    }else{
        document.getElementById("checkUtente").innerHTML = `Mi dispiace, hai perso! il computer ha buttato il numero ${numComputer}`; 
    }

});