let btnSugerir = document.querySelector(".btn-sugerir");
let frase = document.querySelector(".descricao");

btnSugerir.addEventListener('click', function () {
   
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    xhr.addEventListener("load", function () {
        let resposta = xhr.responseText;
        let mostraBusca = JSON.parse(resposta);
        
        frase.innerHTML = resposta.slice(10,-2)     

    });
    

    xhr.send();
});