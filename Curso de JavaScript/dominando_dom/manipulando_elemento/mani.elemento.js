var p = document.getElementsByTagName('p');

// manipulando o objeto através da tagname

// alert(p[0].innerHTML);  essa ação mostra no alerta o que tem dentro do elemento.

p[0].innerHTML = 'manipulado via js!'; // essa ação muda o conteúdo que esttá no elemento.

/*
for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + "- algo -";
}*/ 