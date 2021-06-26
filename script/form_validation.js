function validar() {
    var nome = formulario.nome.value;
    if (nome == "") {
        window.alert("Preencha o campo com seu nome!");
        formulario.nome.focus();
        return false;
    }
}