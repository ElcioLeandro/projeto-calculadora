window.onload = function() {
  const valor1 = document.querySelector("#valor1");

  const valor2 = document.querySelector("#valor2");

  const somar = document.querySelector("#somar");
  
  somar.addEventListener("click", function(){
let resultado = parsefloat(valor1.value) + parsefloat(valor2.value);
document.querySelector("#result").value = resultado;
  });
}