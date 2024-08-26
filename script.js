
const textoUsuario = document.querySelector(".texto-usuario");
const resultadoEncriptacion = document.querySelector(".texto-final");
const textosInformativos = document.querySelector(".textos-informativos");
const btnCopiarMostrar = document.querySelector(".btn-copiar");


function btnEncriptar (){
    const textoEncriptado = encriptar(textoUsuario.value);
    resultadoEncriptacion.value = textoEncriptado;
    textoUsuario.value = "";
    resultadoEncriptacion.style.backgroundImage = "none";

    if (textosInformativos.style.visibility == "hiden"){
        textosInformativos.style.visibility = "visible";
    }else{
        textosInformativos.style.visibility = "hidden";
    }
    
}


function encriptar (stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]) 

        }
    }
    return stringEncriptado;    
}


textoUsuario.addEventListener("input", function() {
const mensajeError = this.value;
const regex = /[A-ZÁÉÍÓÚÜÑáéíóúüñ!¡?¿=,.\";@*]/g;

if (regex.test(mensajeError)) {
    alert("No se permiten mayúsculas, tildes o caracteres especiales. Intenta nuevamente.");
    this.value = mensajeError.slice(0, -1); 
        }
});


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoUsuario.value);
    resultadoEncriptacion.value = textoEncriptado;
    textoUsuario.value = "";
    resultadoEncriptacion.style.backgroundImage = "none";

    if (textosInformativos.style.visibility == "hiden"){
        textosInformativos.style.visibility = "visible";
    }else{
        textosInformativos.style.visibility = "hidden";
    }
}


function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]) 
        }
    }
    return stringDesencriptado;
}


function btnCopiar(){
    resultadoEncriptacion.select ();
    resultadoEncriptacion.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(resultadoEncriptacion.value);

    
}