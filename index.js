// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function testing(){
  document.getElementById("testb").innerText = "ar";
  //document.getElementById("texto").style.color= "blue";
}
function changetexto(){

  document.getElementById("texto1").innerText = document.getElementById("texto").innerText;
}