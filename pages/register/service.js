function validateForm() {
    var senha = document.forms["myForm"]["formSenha"].value;
    var repeteSenha = document.forms["myForm"]["formRepeteSenha"].value;

    if(senha != repeteSenha) {
        alert("As senhas precisam ser iguais!");
        return false;
    } else {
        return true;
    }

    
    


}