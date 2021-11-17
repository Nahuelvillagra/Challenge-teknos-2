 var palabra = ["tornado","celular","monitor","escuela","terraza"];
    
var palabraseleccionada =  palabra[Math.floor(Math.random()*4)];

const elegida = palabraseleccionada;

var arraydepalabra = palabraseleccionada.split('');

console.log(arraydepalabra);

let desordenado=arraydepalabra.sort(() => {
    return Math.random() - 0.5
})

var des = desordenado.join('');

console.log(des);

document.getElementById("palUs").innerHTML = des;

document.getElementById("validar").addEventListener("click", function() {
    var texto = document.getElementById("txt").value;
    console.log(texto);
    //colsole.log(elegida);
    if(texto == elegida){
        console.log(elegida);
        document.getElementById("respuesta").innerHTML = "CORRECTO!";
        document.getElementById("niv").innerHTML = '';
          document.getElementById("respuesta").innerHTML = '';
          document.getElementById("palUs").innerHTML = '';
          document.getElementById("niv").innerHTML = "GANASTE TODOS LOS NIVELES, FELICITACIONES </br><button><a href='index.Php'>Empezar de cero</a></button>"
          
    }else{
        incorrecta();
    }
    
  });
  var fija=3;
  document.getElementById("intentos").innerHTML = fija;
  
  function incorrecta(){
      //var i =document.getElementById("intentos").value;
      //console.log(typeof(i));
      document.getElementById("respuesta").innerHTML = "INCORRECTO!";
      document.getElementById("intentos").innerHTML = fija - 1;
      fija = fija-1;
      if(fija == 0){
          document.getElementById("niv").innerHTML = '';
          document.getElementById("respuesta").innerHTML = '';
          document.getElementById("palUs").innerHTML = '';
          document.getElementById("niv").innerHTML = "PERDISTE </br> <button id='reload'>Volver a empezar</button>"
          document.getElementById("reload").innerHTML = "<button><a href='index.php'>Volver a empezar</a></button>"
      }
  }
    
  
