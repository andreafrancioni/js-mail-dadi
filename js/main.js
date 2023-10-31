const mailDb = ["andrea@gmail.com", "francesco@gmail.com", "luca@gmail.com", "clarissa@gmail.com", "giulio@gmail.com" ]
const mailInput = document.getElementById("inputMail");
const checkBtn = document.getElementById("checkBtn");


checkBtn.addEventListener("click", function(){
    let utenteAuth = false;

    for (let i = 0; i < mailDb.length; i++) {
        let mail = mailDb[i];
        if(mailInput.value == mail){
            utenteAuth = true;
            console.log("la mail inserita é presente.");

        }else{
            console.log("la mail inserita non é presente.");
            
        }
    }

    if(utenteAuth == true){
        document.getElementById("checkUtente").innerHTML = "Utente Autorizzato, Benvenuto!"
        mailInput.classList.remove("border-primary")
        mailInput.classList.remove("border-danger")
        mailInput.classList.add("border-success")
    }else{
        document.getElementById("checkUtente").innerHTML = "Accesso negato!"
        mailInput.classList.remove("border-primary")
        mailInput.classList.remove("border-success")
        mailInput.classList.add("border-danger")
    }

});
