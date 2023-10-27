
//Declaramos las variables
let textBox;
let button;
let name;
let images;
let imgPlayer;
let imgPC;
let playerChoiceImg;
let pcChoiceImg;
let playerScore;
let pcScore;
let playerChoice;
let pcChoice;
let resultText;
let slash;
let pcPoints = 0;
let playerPoints = 0;




window.addEventListener("load", () => {

	//Inicializamos las variables
	initializeVariables();

	//Inactivamos el botón inicialmente
	button.disabled = true;

	/*Añadimos un eventListener que se active al salir de la caja de texto
	/para comprobar que efectivamente se haya escrito algo y activar así el
	botón de jugar
	*/
	textBox.addEventListener("blur", activateButton);

});

//funciones

function initializeVariables() {
	textBox = document.getElementById("textBox");
	button = document.getElementById("playButton");
	name = document.getElementById("playerName");
	images = document.getElementsByClassName("img");
	imgPlayer = document.getElementsByClassName("imgPlayer");
	imgPC = document.getElementsByClassName("imgPC");
	playerChoiceImg = document.getElementById("playerChoiceImg");
	pcChoiceImg = document.getElementById("pcChoiceImg");
	playerScore = document.getElementById("playerScore");
	pcScore = document.getElementById("pcScore");
	resultText = document.getElementById("resultText");
	slash = document.getElementById("slash");
	
}


function activateButton(){
	if (textBox.value != ""){
		button.disabled = false;

		//Hacemos que se muestre el marcador a 0
		playerScore.textContent = playerPoints.toString();
		pcScore.textContent = pcPoints.toString();
		slash.textContent = "/";

		/*Añadimos un eventListener que se active cuando se haga click en el 
		/botón y muestre junto a Jugador: el nombre introducido en la caja
		/de texto.
		*/
		
		button.addEventListener("click", addPlayer);

		//Creamos una función que inicialice el juego, es decir, que permita 
		//interactuar al jugador
		startGame();
	} else {
		button.disabled = true;
	}

}

function startGame(){
	
	/*Añadimos un eventListener que se active al pasar el ratón por encima de la imagen
	/haciendo que esta aumente su tamaño
	*/
	for (let i = 0; i < imgPlayer.length; i++) {
		imgPlayer[i].addEventListener("mouseover", function () {
			this.style.height = "90px";
			this.style.width = "90px";
	
		});
	};
	
	/*Creamos otro eventListener para que cuando se quite el ratón de encima de la imagen
	/esta vuelva a su tamaño original.
	*/

	for(let i = 0; i < imgPlayer.length; i++) {
		imgPlayer[i].addEventListener("mouseout", resizeImage);
	};
	/*Creamos otro eventListener que haga que cuando el jugador selecciona una opción,
	/esta aparezca en grande en el centro de la pantalla
	*/
	for (let i = 0; i < imgPlayer.length; i++){
		imgPlayer[i].addEventListener("click", chooseImage);
	};

	
	

}

function addPlayer(){
	

	
	//Comprobamos si introducimos otro jugador, para resetear el juego en tal caso
	if (name.textContent != "" && textBox.value != name.textContent){
		playerChoiceImg.style.opacity = "0";
		pcChoiceImg.style.opacity = "0";
		resultText.textContent = "";
		pcPoints = 0;
		playerPoints = 0;
		playerScore.textContent = playerPoints.toString();
		pcScore.textContent = pcPoints.toString();
		name.textContent = textBox.value;
		
	}
	else {
		name.textContent = textBox.value;
		
	}
	

}

function resizeImage(){
	this.style.height = "50px";
	this.style.width = "50px";
	
}

function chooseImage(){
	playerChoiceImg.src = this.src;
	playerChoiceImg.style.opacity ="1";
	playerChoiceImg.style.height = "250px";
	playerChoiceImg.style.width = "250px";
	//Guardamos la elección
	playerChoice = this.alt;
	//Ahora hacemos que el ordenador elija
	pcChoiceMaker();
	
}

function pcChoiceMaker() {
	//Primero generamos un número al azar entre 0 y4, ya que son las posiciones
	//disponibles en el array imgPC[], para que así el pc elija 
	let randomNumber = Math.floor(Math.random() * 5);
	pcChoiceImg.src = imgPC[randomNumber].src;
	pcChoice = imgPC[randomNumber].alt;
	pcChoiceImg.style.opacity ="1";
	pcChoiceImg.style.height = "250px";
	pcChoiceImg.style.width = "250px";

	//Ahora comparamos nuestra elección con la del PC
	compareChoices();
}

function compareChoices() {

	switch (playerChoice){
	case "rock":
		if (pcChoice == "rock"){
			resultText.textContent = "Empate!"
		} else if (pcChoice == "paper") {
			resultText.textContent = "Perdiste!"
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} else if (pcChoice == "scissors"){
			resultText.textContent = "Ganaste!"
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} else if (pcChoice == "lizzard") {
			resultText.textContent = "Ganaste!";
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} else if (pcChoice == "spock"){
			resultText.textContent = "¡Perdiste!";
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} 
		break;
	case "paper":
		if (pcChoice == "rock"){
			resultText.textContent = "Ganaste!"
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} else if (pcChoice == "paper") {
			resultText.textContent = "Empate!"
		} else if (pcChoice == "scissors"){
			resultText.textContent = "Perdiste!"
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} else if (pcChoice == "lizzard") {
			resultText.textContent = "Perdiste!";
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} else if (pcChoice == "spock"){
			resultText.textContent = "Ganaste!";
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} 
		break;

	case "scissors":
		if (pcChoice == "rock"){
			resultText.textContent = "Perdiste!"
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} else if (pcChoice == "paper") {
			resultText.textContent = "Ganaste!"
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} else if (pcChoice == "scissors"){
			resultText.textContent = "Empate!"
		} else if (pcChoice == "lizzard") {
			resultText.textContent = "Ganaste!";
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} else if (pcChoice == "spock"){
			resultText.textContent = "¡Perdiste!";
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} 
		break;

	case "lizzard":
		if (pcChoice == "rock"){
			resultText.textContent = "Perdiste!"
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} else if (pcChoice == "paper") {
			resultText.textContent = "Ganaste!"
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} else if (pcChoice == "scissors"){
			resultText.textContent = "Perdiste!"
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} else if (pcChoice == "lizzard") {
			resultText.textContent = "Empate!";
		} else if (pcChoice == "spock"){
			resultText.textContent = "Ganaste!";
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} 
		break;

	case "spock":
		if (pcChoice == "rock"){
			resultText.textContent = "Ganaste!"
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} else if (pcChoice == "paper") {
			resultText.textContent = "Perdiste!"
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} else if (pcChoice == "scissors"){
			resultText.textContent = "Ganaste!"
			playerPoints++;
			playerScore.textContent = playerPoints.toString();
		} else if (pcChoice == "lizzard") {
			resultText.textContent = "Perdiste!";
			pcPoints++;
			pcScore.textContent = pcPoints.toString();
		} else if (pcChoice == "spock"){
			resultText.textContent = "Empate!";
		} 
		break;
	default:
		resultText.textContent = "Error";
	}
}