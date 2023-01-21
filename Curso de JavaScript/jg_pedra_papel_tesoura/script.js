/*Iniciando o jogo zerado. */
var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

/*Determinando quem ganhou ou perdeu de acordo com o possível resultado */
function validarVitoria(){

let vencedor = document.querySelector('.vencedor');
                 
if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O jogo foi empatado";
            }else if(inimigoOpt == "tesoura"){
                vencedor.innerHTML = "O inimigo ganhou";
            }else if(inimigoOpt == "pedra"){
                vencedor.innerHTML = "O player ganhou";
            }
        }

        if(playerOpt == "tesoura"){
            if(inimigoOpt == "papel"){
                vencedor.innerHTML = "O player ganhou";
                }else if(inimigoOpt == "tesoura"){
                    vencedor.innerHTML = "O jogo foi empatado";
                }else if(inimigoOpt == "pedra"){
                    vencedor.innerHTML = "O inimigo ganhou";
                }

            }

            if(playerOpt == "pedra"){
                if(inimigoOpt == "papel"){
                    vencedor.innerHTML = "O inimigo ganhou";
                }else if(inimigoOpt == "tesoura"){
                    vencedor.innerHTML = "O player ganhou";
                }else if(inimigoOpt == "pedra"){
                    vencedor.innerHTML = "O jogo foi empatado";    
                }

            }

            }
            /*Reset de opção */
            function resetInimigo(){
                const enemyOptions = document.querySelectorAll('.enemy-options div');
                for(var i = 0; i < enemyOptions.length; i++){
                   
                enemyOptions[i].childNodes[0].style.opacity = 0.3;
                    
                }
            }
            /*Joada do inimigo */
            function inimigoJogar(){
                let rand = Math.floor(Math.random()*3);

                const enemyOptions = document.querySelectorAll('.enemy-options div');
                resetInimigo();
                for(var i = 0; i < enemyOptions.length; i++){
                    if(i == rand){
                        enemyOptions[i].childNodes[0].style.opacity = 1;
                        inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
                    }

                }

                /*Definindo resultado */

                validarVitoria();

            }

            function resetOpacityPlayer(){
                for(var i = 0; i < elementos.length; i++){
                    elementos[i].style.opacity = 0.3;
                }
            }

            for(var i = 0; i < elementos.length; i++){
                elementos[i].addEventListener('click',function(t){
                    resetOpacityPlayer();
                    t.target.style.opacity = 1;
                    playerOpt = t.target.getAttribute('opt');

                    inimigoJogar();

                });
            }