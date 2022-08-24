
// FUNÇÃO PARA QUE O ONCLICK ADD AOS BOTÕES DO MENU DIRECIONEM PARA SEUS RESPECTIVOS CAMINHOS
function index() {
  window.location = "index.html" ;
}

function experiencia() {
  window.location = "experiencia.html" ;
}

function formacao() {
  window.location = "formacao.html" ;
}
  
function linguas() {
  window.location = "linguas.html" ;
}
  
function contato() {
  window.location = "contato.html" ;
}


// BARRA DE PROGRESSO LINGUAS
// INGLÊS
let barra=document.getElementById("pb1");
let ingles=0
let intBarra=setInterval(()=>{
barra.style.width= ingles+"%";
ingles++;
if(ingles>=40){
  ingles=0;
}
},500)
// ESPANHOL
let barraesp=document.getElementById("pb2");
let espanhol=0
let intBarraesp=setInterval(()=>{
barraesp.style.width= espanhol+"%";
espanhol++;
if(espanhol>=85){
  espanhol=0;
}
},500)
   