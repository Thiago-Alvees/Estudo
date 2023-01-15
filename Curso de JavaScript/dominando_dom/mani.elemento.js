var p = document.getElementsByTagName('p');

// manipulando o objeto através da tagname

for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + "- algo -";
}