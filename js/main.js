function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    window.open ("https://twitter.com/login");

}
function trocar(elemento) {
    elemento.innerHTML="Obrigado por passar o mouse";

}
  /*  document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
*/
function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";

}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}