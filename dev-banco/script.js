function authenticathor(){

const agencia = document.getElementById("agencia").value

const conta = document.getElementById("conta").value

const senha = document.getElementById("senha").value



if(agencia === '0026' && conta === '25122-0' && senha === '123456') {
    alert("Bem vindo ao DevBank")
}

else if(agencia !== '0026') {
    alert("Agencia incorreta, tente novamente")
}

else if(conta !== '25122-0') {
    alert("Conta incorreta, tente novamente")
}


else if(senha !== '123456') {
    alert("Senha incorreta, tente novamente")
}

}





























/*if(agencia == conta && conta == senha){

    alert("Bem vindo ao Nubank")
}
else {
    alert("Senha incorreta, tente mais tarde")
}*/