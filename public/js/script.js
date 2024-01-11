const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#F44336";
    statusTxt.style.display = "block";
    let xhr = new XMLHttpRequest;
    xhr.open("POST", "../php/message.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            if(response.indexOf("Le champ email et mot de passe est obligatoire !") != -1 || response.indexOf("Entrez une adresse email valide !") || response.indexOf("Désolé, nous n'avons pas réussi à envoyer votre message !")){
                statusTxt.style.color = "red";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);
            }
            let response = xhr.response;
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}