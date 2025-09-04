// Array de candidatos fictícios
const candidatos = [
  { numero: "13", nome: "Lula", partido: "PT", foto: "img/lula.png" },

  { numero: "22", nome: "Bolsonaro", partido: "PL", foto: "img/bolsonaro.png" },

  { numero: "45", nome: "Valdir Junior", partido: "PSDB", foto: "img/Valdir.png" },

  { numero: "50", nome: "guilherme Boulos", partido: "PSOL", foto: "img/Guilherme.png" },

  { numero: "55", nome: "Leonardo Dias", partido: "PSOL", foto: "img/logo1.png" }
  
];

let voto = ""; 
let etapa = 0; 

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const nomeEl = document.getElementById("nome");
const partidoEl = document.getElementById("partido");
const lulaImg = document.querySelector(".lula");


function digitar(num) {
  if(voto.length < 2) { 
    voto += num;
    atualizarDisplay();
    checarCandidato();
  }
}


function atualizarDisplay() {
  const numeros = [n1, n2];
  for(let i=0; i<2; i++){
    numeros[i].textContent = voto[i] ? voto[i] : "";
  }
}

function checarCandidato() {
  const candidato = candidatos.find(c => c.numero === voto);
  if(candidato){
    nomeEl.textContent = "Nome: " + candidato.nome;
    partidoEl.textContent = "Partido: " + candidato.partido;
    lulaImg.src = candidato.foto;
  } else {
    nomeEl.textContent = "Nome: -";
    partidoEl.textContent = "Partido: -";
    lulaImg.src = "img/lula.png"; 
  }
}


function corrige() {
  voto = "";
  atualizarDisplay();
  nomeEl.textContent = "Nome: ";
  partidoEl.textContent = "Partido: ";
  lulaImg.src = "img/lula.png"; 
}


function votoBranco() {
  voto = "";
  atualizarDisplay();
  nomeEl.textContent = "Nome: VOTO EM BRANCO";
  partidoEl.textContent = "";
  lulaImg.src = "img/lula.png"; 
}


function confirma() {
  if(voto.length === 2){
    alert("Voto confirmado: " + voto);
    corrige(); 
  } else {
    alert("Digite o número completo do candidato!");
  }
}
