
//Declaramos las variables
let textBox;
let button;
let name;

window.addEventListener("load", () => {

	//Inicializamos las variables
	textBox = document.getElementById("textBox");
	button = document.getElementById("playButton");
	name = document.getElementById("playerName");


	//Inactivamos el botón inicialmente
	button.disabled = true;

	/*Añadimos un eventListener que se active al salir de la caja de texto
	/para comprobar que efectivamente se haya escrito algo y activar así el
	botón de jugar
	*/
	textBox.addEventListener("blur", activateButton);

	/*Añadimos un eventListener que se active cuando se haga click en el 
	/botón y muestre junto a Jugador: el nombre introducido en la caja
	/de texto.
	*/
	button.addEventListener("click", addPlayer);

});
//funciones
function activateButton(){
	if (textBox.value != ""){
		button.disabled = false;
	} else {
		button.disabled = true;
	}

}

function addPlayer(){
	name.textContent = textBox.value;
}