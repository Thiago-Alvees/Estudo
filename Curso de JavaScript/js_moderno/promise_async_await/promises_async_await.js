/*Promise*/
function teste(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const erro = false;
        if(erro){
            reject("erro...");
        }else{
            resolve("Promise resolvida!")
        }
        },5000)
        
    })
}

async function teste2(){
    await teste().then(function(res){
        alert(res);
    });
    alert("Testando");
}

teste2();