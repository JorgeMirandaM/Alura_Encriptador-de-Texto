

/*Función para copiar en el portapapeles */

function copiar(){
    let copyText = document.querySelector("#textoImpreso");
    copyText.focus();
    navigator.clipboard.writeText(copyText.textContent)
    console.log(copyText.textContent);
    document.querySelector('textarea').value="";

}


/*Función para imprimir texto encriptado o desencriptado */

function imprimirTexto(imprimir){

    var aviso=document.querySelector('#mostrarAviso');

    aviso.classList.add("desaparecer");

    var mostrarTexto=document.querySelector('#mostrarTexto');

    mostrarTexto.classList.remove('desaparecer');

    var texto=document.querySelector('#textoImpreso');

    texto.innerHTML=imprimir;

}

/*Función para remover acentos */

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 



  

var diccionario={
    'a': 'ai',
    'e':'enter',
    'i':'imes',
    'o':'ober',
    'u':'ufat',
}



/*Función de encriptar palabras*/

function encriptar(){

    var cadena=removeAccents(document.getElementById('entradaDatos').value);

    var text=cadena;
    

    var textoEncriptado='';
    
    for(var i=0;i<text.length;i++){

        var letter=text.charAt(i);
        if(letter=='a'){
            textoEncriptado+=diccionario['a'];
        }else if(letter=='e'){
            textoEncriptado+=diccionario['e'];
        }else if(letter=='i'){
            textoEncriptado+=diccionario['i'];
        }else if(letter=='o'){
            textoEncriptado+=diccionario['o'];
        }else if(letter=='u'){
            textoEncriptado+=diccionario['u'];
        }else if(letter==' '){
            textoEncriptado+=letter;
        }else {
            textoEncriptado+=letter;
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



