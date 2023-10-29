
// Evento para que se cargue la página

let oJugador;

function botonesJuegoUsuario(){


    // eventos por el id, en este caso de cada boton ya los tenemos selecionados con el id del HTML
   let botonPiedra = document.getElementById('piedra');
   let botonTijera = document.getElementById('tijera');
   let botonPapel = document.getElementById('papel');
   let botonLagarto = document.getElementById('lagarto');
   let botonSpock = document.getElementById('spock');

    //Variable para cambiar las imagenes al hacer click
    let imagenUser = document.getElementById('usuario');
    
   
  
    //escuchadores, con funcion lamba

    botonPiedra.addEventListener('click',()=>{
        oJugador = 'piedra';
        console.log('piedra');
        imagenUser.src = './Imagenes/piedra.jpg';
        console.log('imagen cambiada a piedra');
        resultadoJuego();
        
    })

    botonTijera.addEventListener('click',()=>{
        oJugador = 'tijera';
        console.log('tijera');
        imagenUser.src = './Imagenes/tijerasdef.jpg';
        console.log('imagen cambiada a tijera');
        resultadoJuego();
    })

    botonPapel.addEventListener('click',()=>{
        oJugador = 'papel';
        console.log('papel');
        imagenUser.src = './Imagenes/papeldef.jpg';
        console.log('imagen cambiada a papel');
        resultadoJuego();
    })
    botonLagarto.addEventListener('click',()=>{
        oJugador = 'lagarto';
        console.log('lagarto');
        imagenUser.src = './Imagenes/Lagarto.jpg';
        console.log('imagen cambiada a lagarto');
        resultadoJuego();
        
    })
    botonSpock.addEventListener('click',()=>{
        oJugador = 'spock';
        console.log('spock');
        imagenUser.src = './Imagenes/Spock.jpg';
        console.log('imagen cambiada a spock');
        resultadoJuego();
    })
   
    
}

//Funcion Aleatoria para sacar un nuemro para el ordenador
function numeroAleatorioOrdenador(){

    let resultadoOrd = Math.floor(Math.random()*5);
    console.log(resultadoOrd + " resultado aleatorio ordenador");
    return resultadoOrd;
    
} 



//Funcion jeugo que convierte el numero aleatorio en la opcion del ordenador para compararlo con la del usuario.

let oOrdenador;

function opcionOrdenador(){
    //Variable para cambiar las imagenes a la opcion elegida por el ordenador
    let imagenOrd = document.getElementById('ordenador');

    orde = numeroAleatorioOrdenador();

    switch(orde){
        case 0:
            oOrdenador  = "ordenador-piedra";
            console.log('buena piedra');
            imagenOrd.src = './Imagenes/piedra.jpg';
            console.log('Imagen cambiada ordenador a Piedra')
            resaltarBoton("ordenador-piedra");
        break;

        case 1:
            oOrdenador  = "ordenador-papel";
            console.log('buen papel');  
            imagenOrd.src = './Imagenes/papeldef.jpg';
            console.log('imagen cambiada ordenador  a papel');
            resaltarBoton("ordenador-papel");
        break;
        
        case 2:
            oOrdenador  = "ordenador-tijera";
            console.log('buena tijera');
            imagenOrd.src = './Imagenes/tijerasdef.jpg';
            console.log('imagen cambiada ordenador  a papel');
            resaltarBoton("ordenador-tijera");
        break;

        case 3:
            oOrdenador = "ordenador-lagarto";
            console.log('buen lagarto');
            imagenOrd.src = './Imagenes/Lagarto.jpg';
            console.log('imagen cambiada ordenador a lagarto');
            resaltarBoton("ordenador-lagarto");
        break;

        case 4:
            oOrdenador  = "ordenador-spock";
            console.log('buen spock');
            imagenOrd.src = './Imagenes/Spock.jpg';
            console.log('imagen cambiada a spock');
            resaltarBoton("ordenador-spock");
        break;
    }
    return oOrdenador;

}

function resaltarBoton(id) {
    const boton = document.getElementById(id);
    boton.style.backgroundColor = 'orange';
    setTimeout(() => {
        boton.style.backgroundColor = '';
    }, 2000); //tiempo para resaltar el boton
}

let oJ;
let oOP;

//inicializamos variables para el marcador del juego 
let pUsuario= 0;
let pOrdenad = 0;

function resultadoJuego(){

    let resBatalla = document.getElementById('resultadoBatalla');
    

    oJ = oJugador;
    oOP = opcionOrdenador();
    
    //OPCION PIEDRA JUGADOR
    if(oJ === "piedra" && oOP === "ordenador-piedra" ){
        resBatalla.innerHTML = "<h3 class='estilo'>Empate</h3>";
        console.log("EMPATE");
        return "EMPATE"
    };
    if(oJ === "piedra" && oOP === "ordenador-papel"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";
        
    };
    if(oJ === "piedra" && oOP === "ordenador-tijera"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADDOR");
        return "GANA JUGADOR";
       
    };
    if(oJ === "piedra" && oOP === "ordenador-lagarto"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADOR");
        return "GANA JUGADOR";
        
    };
    if(oJ === "piedra" && oOP === "ordenador-spock"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";
        
    };

    //OPCION PAPEL JUGADOR
    if(oJ=== "papel" && oOP === "ordenador-papel" ){
        resBatalla.innerHTML = "<h3 class='estilo'>Empate</h3>";
        console.log("EMPATE");
        return "EMPATE"
    };
    if(oJ === "papel" && oOP === "ordenador-piedra"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADOR");
        
    };
    if(oJ === "papel" && oOP === "ordenador-tijera"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";
        
    };
    if(oJ === "papel" && oOP === "ordenador-lagarto"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";
        
    };
    if(oJ === "papel" && oOP === "ordenador-spock"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADOR");
        return "GANA JUGADOR";
       
    };


    //OPCION TIJERA JUGADOR

    if(oJ === "tijera" && oOP === "ordenador-tijera" ){
        resBatalla.innerHTML = "<h3ordenador- class='estilo'>Empate</h3>";
        console.log("EMPATE");
        return "EMPATE"
    };
    if(oJ === "tijera" && oOP === "ordenador-piedra"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";
        
    };
    if(oJ === "tijera" && oOP === "ordenador-papel"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADOR");
        return "GANA JUGADOR";
        
    };
    if(oJ === "tijera" && oOP === "ordenador-lagarto"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADOR");
        return "GANA JUGADOR";
        
    };
    if(oJ=== "tijera" && oOP === "ordenador-spock"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";
        
    };


    //OPCION LAGARTO JUGADOR 

    if(oJ === "lagarto" && oOP === "ordenador-lagarto" ){
        resBatalla.innerHTML = "<h3 class='estilo'>Empate</h3>";
        console.log("EMPATE");
        return "EMPATE"
    };
    if(oJ === "lagarto" && oOP === "ordenador-piedra"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA JUGADOR";
        
    };
    if(oJ === "lagarto" && oOP === "ordenador-papel"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADOR");
        return "GANA JUGADOR";
        
    };
    if(oJ=== "lagarto" && oOP === "ordenador-tijera"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";
        
    };
    if(oJ=== "lagarto" && oOP === "ordenador-spock"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA JUGADOR");
        return "GANA ORDENADOR";
        
    };

    //OPCION SPOCK JUGADOR

    if(oJ === "spock" && oOP === "ordenador-spock" ){
        resBatalla.innerHTML = "<h3 class='estilo'>Empate</h3>";
        console.log("EMPATE");
        return "EMPATE"
    };
    if(oJ === "spock" && oOP === "ordenador-piedra"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADOR");
        return "GANA JUGADOR";
        
    };
    if(oJ === "spock" && oOP === "ordenador-papel"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";
      
    };
    if(oJ === "spock" && oOP === "ordenador-tijera"){
        pUsuario++;
        document.getElementById('ptoUsuario').innerText = pUsuario;
        resBatalla.innerHTML = "<h3 class='estilo'>Ganaste</h3>";
        console.log("GANA JUGADOR");
        return "GANA JUGADOR";
       
    };
    if(oJ === "spock" && oOP === "ordenador-lagarto"){
        pOrdenad++;
        document.getElementById('ptoOrdenador').innerText = pOrdenad;
        resBatalla.innerHTML = "<h3 class='estilo'>Perdiste</h3>";
        console.log("GANA ORDENADOR");
        return "GANA ORDENADOR";   
    };   
}

function empezar(){
    cajaNombreJugador();  
}

function cajaNombreJugador(){

    let nombreJugador = document.getElementById('nombre');
    let empezar = document.getElementById('empezarJugar');

    nombreJugador.focus();
    nombreJugador.addEventListener("input", ()=>{

        if(nombreJugador.value.length >=1){
            //empezar.disabled = false; //Propiedad desactivado --> falso queremos activarlo
        }else{
            empezar.disabled = false;
        }
    }); 
    document.getElementById('nombre').addEventListener("blur",saludar); //ejecutamos el evento blur y llama a la funcion saludar
}

function saludar(){

    let nombreJugador = document.getElementById('nombre').value; //para obtener lo de dentro
    let nombre = /^\D+$/; 
    let error = document.getElementById('mensajeError');

    if(nombreJugador === ""){
        error.textContent = "no puede estar vacio";
    }else if(nombre.test(nombreJugador)){
        error.textContent = nombreJugador
        nombreJugador.textContent= nombreJugador;
        empezar.disabled = true;
        botonesJuegoUsuario();
    }else
        error.textContent = "Pon un nombre" 
}


function paginaCargada(){
    
    empezar();
    console.log('Página cargada completamente');
    
 };

 window.addEventListener('load', paginaCargada);







