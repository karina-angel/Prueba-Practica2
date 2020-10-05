function agregar(){
     ///declaración de variables
    var valores = new Array();
    var i, mayor, menor, contenido="";

    ///validación para ingresar 5 numeros
    for (i=0; i<=4;i++){
        valores[i] = parseInt(prompt("Ingresar dígito "+(parseInt(i)+1),""));
    }

    ///cargar datos
    var numeros = document.getElementById("numeros");
     with(document){
         contenido += "<h1>Números ingresados</h1>\n";
          ///agregar numeros ingresados en el arreglo
          contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

          ///mostrar dato en tabla
         for(i=0;i<=4;i++){
            contenido += "\t\t\t<td>"+valores[i]+"</td>\n";
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
    }

    numeros.innerHTML = contenido;
    tdelement = document.getElementsByClassName('Off');
    alert(tdelement.length);
}
window.onload = agregar;

function analisis(){

    agregar();
    for (i=0; i<=4;i++){
        if(valores[i] > mayor){
            mayor = valores[i];
        }
        if(valores[i] < menor){
            menor = valores[i];
        }
    }
menor=Math.min.apply(null, val);
mayor= Math.max.apply(null, val);

console.log("Número mayor ", mayor);
console.log("Número menor ", menor);

//document.write("Mayor");
//document.write(mayor);
//document.write("<br>")
//document.write("Menor");
//document.write(menor);
//document.write("<br>")
}
window.onload = analisis;