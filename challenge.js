
//====Aqui inicia script para encriptador de texto====
var puntero = document.querySelector(".ingresar-mensaje");
puntero.focus();

var ocultar = document.querySelectorAll(".desifrar-muestra");
var mostrar = document.querySelectorAll("#boton-copiar");

var ingresarTexto;
var textoCopiado;

var encriptar = document.querySelector("#boton-encriptar");
var desencriptar = document.querySelector("#boton-desencriptar");
var copiar = document.querySelector("#boton-copiar");


    function procesarTexto() {
        ingresarTexto = document.getElementById("mensaje").value ;
        
        desifrado.innerHTML = ingresarTexto.replaceAll("e","enter")
                                            .replaceAll("i","imes")
                                            .replaceAll("a","ai")
                                            .replaceAll("o","ober")
                                            .replaceAll("u","ufat");
    }


    function revertirTexto() {
        ingresarTexto = document.getElementById("mensaje").value ;
        
        desifrado.innerHTML = ingresarTexto.replaceAll("ai","a")
                                            .replaceAll("enter","e")
                                            .replaceAll("imes","i")
                                            .replaceAll("ober","o")
                                            .replaceAll("ufat","u");
    }

    
    function copiarTexto() {
        textoCopiado = document.getElementById("desifrado").value;
        puntero.value = textoCopiado;
    }

    
    function ocultarImagen() {
        
        ocultar.forEach(item=>{
            item.style.display = "none";
        })
    }


    function mostrarBoton() {
        mostrar.forEach(item=>{
            item.style.display = "inline";
        })
    }


    function encriptador(evento) {
        procesarTexto();
        ocultarImagen();
        mostrarBoton();
        puntero.value = "";
        puntero.focus();
    }


    function desencriptador(evento){
        revertirTexto();
        ocultarImagen();
        mostrarBoton();
        puntero.value = "";
        puntero.focus();
    }


    function copiador(evento) {
        copiarTexto();
    }

    

    encriptar.onclick = encriptador;
    desencriptar.onclick = desencriptador;
    copiar.onclick = copiador;

//======== Aqui finaliza script de encriptador de texto ========