


function copiar(){
    let copyText = document.querySelector("#textoImpreso");
    copyText.focus();
    navigator.clipboard.writeText(copyText.textContent)
    console.log(copyText.textContent);
    document.querySelector('textarea').value="";

}



function imprimirTexto(texto){

    document.getElementById('rectangulo').innerHTML='<div class="content" style=" height:90%; justify-content: space-between;"><p id="textoImpreso">'+ texto +'</p><button id="boton_copiar" onclick="copiar()">Copiar</button></div>'
    

}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 


/*Función de encriptar palabras*/
function encriptar(){

    var cadena=removeAccents(document.getElementById('entradaDatos').value);

    var text=cadena;
    

    var textoEncriptado='';
    
    for(var i=0;i<text.length;i++){

        var letter=text.charAt(i);
        if(letter=='a'){
            textoEncriptado=textoEncriptado+'ai';
        }else if(letter=='e'){
            textoEncriptado=textoEncriptado+'enter';
        }else if(letter=='i'){
            textoEncriptado=textoEncriptado+'imes';
        }else if(letter=='o'){
            textoEncriptado=textoEncriptado+'ober';
        }else if(letter=='u'){
            textoEncriptado=textoEncriptado+'ufat';
        }else if(letter==' '){
            textoEncriptado=textoEncriptado+letter;
        }else {
            textoEncriptado=textoEncriptado+letter;
        }
    }
    
    
    imprimirTexto(textoEncriptado);
    event.preventDefault();


}



/*Función de Desencriptar palabras*/

function desencriptar(){

    var cadena=removeAccents(document.getElementById('entradaDatos').value);

    var text=cadena;

    var textoDesencriptado='';
    
    for(var i=0;i<text.length;i++){

        var letter=text.charAt(i);
        if(letter=='a'){
            textoDesencriptado=textoDesencriptado+'a';
            i=i+1;
        }else if(letter=='e'){
            textoDesencriptado=textoDesencriptado+'e';
            i=i+4;
        }else if(letter=='i'){
            textoDesencriptado=textoDesencriptado+'i';
            i=i+3;
        }else if(letter=='o'){
            textoDesencriptado=textoDesencriptado+'o';
            i=i+3;
        }else if(letter=='u'){
            textoDesencriptado=textoDesencriptado+'u';
            i=i+3;
        }else if(letter==' '){
            textoDesencriptado=textoDesencriptado+letter;
        }else {
            textoDesencriptado=textoDesencriptado+letter;
        }
    }
    
    imprimirTexto(textoDesencriptado);
    event.preventDefault();


}



