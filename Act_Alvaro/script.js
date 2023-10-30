let cajaNombre;
let botonNombre;
let nombreJugador;
let jugadorPiedra;
let jugadorPapel;
let jugadorTijeras;
let jugadorLagarto;
let jugadorSpock;
let jugadorSeleccion;
let ordenadorSeleccion;
let aleatorio;
let numeroJugador;
let puntosJugador;
let puntosOrdenador;
let resultado;
let textoMarcador;
let marcadorJugador;
let marcadorOrdenador;

function inicializar(){
	cajaNombre = document.getElementById("cajaNombres");
	botonNombre = document.getElementById("botonNombre");
	nombreJugador = document.getElementById("nombreJugador");
	jugadorPiedra = document.getElementById("jugadorPiedra");
	jugadorPapel = document.getElementById("jugadorPapel");
	jugadorTijeras = document.getElementById("jugadorTijeras");
	jugadorLagarto = document.getElementById("jugadorLagarto");
	jugadorSpock = document.getElementById("jugadorSpock");
	jugadorSeleccion = document.getElementById("jugadorSeleccion");
	ordenadorSeleccion = document.getElementById("ordenadorSeleccion");
	resultado = document.getElementById("resultado");
	textoMarcador = document.getElementById("textoMarcador");
	marcadorJugador = document.getElementById("marcadorJugador");
	marcadorOrdenador = document.getElementById("marcadorOrdenador");
	puntosJugador = 0;
	puntosOrdenador = 0;
	marcador();
}

function listeners(){
	piedraGrande();
	piedraPequena();
	papelGrande();
	papelPequena();
	tijerasGrande();
	tijerasPequena();
	lagartoGrande();
	lagartoPequena();
	spockGrande();
	spockPequena();
	piedraJugador();
	papelJugador();
	tijerasJugador();
	lagartoJugador();
	spockJugador();
}

function nombre(){
	botonNombre.addEventListener("click", ()=>{
		if (nombreJugador.textContent == "Nombre jugador" && cajaNombre.value != ""){
			nombreJugador.textContent = cajaNombre.value;
			listeners();
			textoMarcador.textContent = nombreJugador.textContent + ", elije tu jugada";
		}else if (cajaNombre.value != ""){
			nombreJugador.textContent = cajaNombre.value;
			textoMarcador.textContent = nombreJugador.textContent + ", elije tu jugada";
			puntosJugador = 0;
			puntosOrdenador = 0;
			marcador();
			jugadorSeleccion.src = "imagenes/circulo.png";
			ordenadorSeleccion.src = "imagenes/circulo.png";
			resultado.textContent = "";
		} 
	});
}

function piedraGrande(){
	jugadorPiedra.addEventListener("mouseover", ()=>{
		jugadorPiedra.style.height = "130px";
		jugadorPiedra.style.width = "130px";
	});
}

function piedraPequena(){
	jugadorPiedra.addEventListener("mouseout", ()=>{
		jugadorPiedra.style.height = "120px";
		jugadorPiedra.style.width = "120px";
	});
}

function papelGrande(){
	jugadorPapel.addEventListener("mouseover", ()=>{
		jugadorPapel.style.height = "130px";
		jugadorPapel.style.width = "130px";
	});
}

function papelPequena(){
	jugadorPapel.addEventListener("mouseout", ()=>{
		jugadorPapel.style.height = "120px";
		jugadorPapel.style.width = "120px";
	});
}

function tijerasGrande(){
	jugadorTijeras.addEventListener("mouseover", ()=>{
		jugadorTijeras.style.height = "130px";
		jugadorTijeras.style.width = "130px";
	});
}

function tijerasPequena(){
	jugadorTijeras.addEventListener("mouseout", ()=>{
		jugadorTijeras.style.height = "120px";
		jugadorTijeras.style.width = "120px";
	});
}

function lagartoGrande(){
	jugadorLagarto.addEventListener("mouseover", ()=>{
		jugadorLagarto.style.height = "130px";
		jugadorLagarto.style.width = "130px";
	});
}

function lagartoPequena(){
	jugadorLagarto.addEventListener("mouseout", ()=>{
		jugadorLagarto.style.height = "120px";
		jugadorLagarto.style.width = "120px";
	});
}

function spockGrande(){
	jugadorSpock.addEventListener("mouseover", ()=>{
		jugadorSpock.style.height = "130px";
		jugadorSpock.style.width = "130px";
	});
}

function spockPequena(){
	jugadorSpock.addEventListener("mouseout", ()=>{
		jugadorSpock.style.height = "120px";
		jugadorSpock.style.width = "120px";
	});
}

function piedraJugador(){
	jugadorPiedra.addEventListener("click", ()=>{
		textoMarcador.textContent = "Marcador";
		jugadorSeleccion.src = "imagenes/piedra.png";
		numeroJugador = 1;
		jugadaOrdenador();
		juego();
		marcador();
	});
}

function papelJugador(){
	jugadorPapel.addEventListener("click", ()=>{
		textoMarcador.textContent = "Marcador";
		jugadorSeleccion.src = "imagenes/papel.png";
		numeroJugador = 2;
		jugadaOrdenador();
		juego();
		marcador();
	});
}

function tijerasJugador(){
	jugadorTijeras.addEventListener("click", ()=>{
		textoMarcador.textContent = "Marcador";
		jugadorSeleccion.src = "imagenes/tijeras.png";
		numeroJugador = 3;
		jugadaOrdenador();
		juego();
		marcador();
	});
}

function lagartoJugador(){
	jugadorLagarto.addEventListener("click", ()=>{
		textoMarcador.textContent = "Marcador";
		jugadorSeleccion.src = "imagenes/lagarto.png";
		numeroJugador = 4;
		jugadaOrdenador();
		juego();
		marcador();
	});
}

function spockJugador(){
	jugadorSpock.addEventListener("click", ()=>{
		textoMarcador.textContent = "Marcador";
		jugadorSeleccion.src = "imagenes/spock.png";
		numeroJugador = 5;
		jugadaOrdenador();
		juego();
		marcador();
	});
}

function jugadaOrdenador(){
	aleatorio = Math.ceil(Math.random()*5);
	if (aleatorio == 1){
		ordenadorSeleccion.src = "imagenes/piedra.png"
	}else if (aleatorio == 2){
		ordenadorSeleccion.src = "imagenes/papel.png"
	}else if (aleatorio == 3){
		ordenadorSeleccion.src = "imagenes/tijeras.png"
	}else if (aleatorio == 4){
		ordenadorSeleccion.src = "imagenes/lagarto.png"
	}else if (aleatorio == 5){
		ordenadorSeleccion.src = "imagenes/spock.png"
	}
}

function juego(){

	switch(numeroJugador){
	case 1:
		if(aleatorio == 1){
			resultado.textContent = "Empate";
		}else if(aleatorio == 2){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}else if(aleatorio == 3){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}else if(aleatorio == 4){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}else if(aleatorio == 5){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}
		break;
	case 2:
		if(aleatorio == 1){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}else if(aleatorio == 2){
			resultado.textContent = "Empate";
		}else if(aleatorio == 3){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}else if(aleatorio == 4){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}else if(aleatorio == 5){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}
		break;
	case 3:
		if(aleatorio == 1){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}else if(aleatorio == 2){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}else if(aleatorio == 3){
			resultado.textContent = "Empate";
		}else if(aleatorio == 4){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}else if(aleatorio == 5){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}
		break;
	case 4:
		if(aleatorio == 1){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}else if(aleatorio == 2){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}else if(aleatorio == 3){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}else if(aleatorio == 4){
			resultado.textContent = "Empate";
		}else if(aleatorio == 5){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}
		break;
	case 5:
		if(aleatorio == 1){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}else if(aleatorio == 2){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}else if(aleatorio == 3){
			resultado.textContent = "¡Has ganado!";
			puntosJugador++;
		}else if(aleatorio == 4){
			resultado.textContent = "¡Has perdido!";
			puntosOrdenador++;
		}else if(aleatorio == 5){
			resultado.textContent = "Empate";
		}
		break;
	default:
		resultado.textContent = "Error";
	}
}

function marcador(){
	marcadorJugador.textContent = puntosJugador;
	marcadorOrdenador.textContent = puntosOrdenador;
}

window.addEventListener("load", ()=>{
	inicializar();
	nombre();
})