//checkboxs*****************************
function sumar(){
    obj = document.miform['id'];
    totalChecks = obj.length;
    totalSumado = 0;
    for( i=0; i<totalChecks; i++){ 
        if( obj[i].checked == true ){
            valor = obj[i].value.split('-');        
            totalSumado = totalSumado + parseFloat(valor[0],2);
        }
    }

    document.getElementById('totales').innerHTML = 'SubTotal 2: $'+ totalSumado ; 
}

//radio button***************************

// buscar el <form> y guardarlo en una variable
const form = document.querySelector('form');

// decir que en el evento enviar se sume el total
form.addEventListener('submit', ObtenerSubTotal1);

function ObtenerSubTotal1(event) {
  // evitar enviar el formulario que ocasiona que se refresque la pagina
  event.preventDefault();

  // obtener todos los input radio
  const formData = new FormData(event.target);

  // convertir los valores a String, o colocar un 0 si no elegieron algo
  const menup = parseFloat(formData.get('menup') || '0', 2);


  const result = menup ;
     document.getElementById('principal').innerHTML='Subtotal 1: $'+ result;
   
}





//div ocultar********************************

function Mostrar(){
    document.getElementById("totalpagar").style.display="block";
}
function Ocultar(){
    document.getElementById("totalpagar").style.display="none";
}


function Mostrar_Ocultar(){
    var totalpagar = document.getElementById("totalpagar");
    if(totalpagar.style.display =="none"){
        Mostrar();
        document.getElementById("boton").value="Ocultar";
    }
    else{Ocultar();
        document.getElementById("boton").value="Mostrar";
    }
}

/*COMNINACION TECLAS GUARDAR*/
$('body').on("keydown", function(e) { 
    if (e.ctrlKey &&  e.which === 83) {
        alert("You pressed Ctrl +  s");
        e.preventDefault();
    }
});
$("#button").on("click", function(e) { 
    alert("You clicked button");
}); 

 