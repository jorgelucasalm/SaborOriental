function validar(){

if(document.dados.nome.value ==""){
alert( "Por favor verifique se todos os dados foram preenchidos." );
document.dados.nome.focus();
return false;
}


if( document.dados.email.value ==""){
alert( "Por favor verifique se todos os dados foram preenchidos." );
document.dados.email.focus();
return false;
}

if (document.dados.telefone.value =="< 9")
{
alert( "Por favor verifique se todos os dados foram preenchidos." );
document.dados.telefone.focus();
return false;
}

if (document.dados.comentario.value.length =="" )
{
alert( "Por favor verifique se todos os dados foram preenchidos." );
document.dados.comentario.focus();
return false;
}
else{
    alert ("Sua mensagem foi enviada ao Restaurante Sabor Oriental!")
    return true
}
}
