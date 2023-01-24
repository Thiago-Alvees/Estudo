var elementos = document.querySelectorAll('[type=radio');
/*Marcar como verde a resposta correta e vermelha a resposta incorreta.*/
for (var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change', function(e){
        let marcado = e.target.value;
        if(marcado == "correta"){
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "green";

            let els = parentNode.parentNode.querySelectorAll("[type=radio]");
            for(var n = 0; n<els.length; n++){
                els[n].disabled = true;
            }
        }else if(marcado == "incorreta"){
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "red";

            let els = parentNode.parentNode.querySelectorAll("[type=radio]");
            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }
            /*Desabilitar as demais opções, e marcar como verde a resposta correta.*/
            let correta = parentNode.parentNode.querySelector("[value=correta]");
            correta.parentNode.style.backgroundColor = "green";

        }
    })
}