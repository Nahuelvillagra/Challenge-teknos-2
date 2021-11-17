
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Challenge teknos - ordena la palabra</title>
</head>
<body>
    <div class="container-fluid" style="text-align: center;">
        <h1>¡Escriba la palabra correcta para ganar el juego!</h1>
        <p>Una vez que completa todas las palabras del nivel avanza al siguiente</p>
        <div class="row">
            <div class="col-md-12" >

                <div class="col-mb-12" id="niveluno" >
                    <h2>Nivel 2 - Intermedio</h2>
                    <p>Intentos restantes</p> <p id="intentos">3</p>
                
                    <h3 id="palUs"></h3> <p id="niv"><input id="txt" type="text"> <button id="validar">Validar</button><br></p>
                    <div id="respuesta"></div>
                    
                </div>
                
            </div>
        </div>

        </div>
    </div>
</body>
<script src="niveldos.js"></script>
</html>