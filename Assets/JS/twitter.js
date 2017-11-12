//Botón comienza deshabilitado por defecto
	var btn = document.getElementById('btn');
	btn.disabled = true;

//Función para añadir los tweets al HTML
function add(){
	var tweets = document.getElementById("tweet").value; //variable que contiene al valor *value*(node.value)//
	document.getElementById("tweet").value = ""; //se toma el elemento creado y se iguala a un elemento vacio////limpa el valor//
	var newTweets = document.createElement('div'); //creando un contenedor para lo q viene luego, en este caso un div//
	var contenedor = document.getElementById('contenedor'); 

	var paragraph = document.createElement('p'); //creando parrafo//
	paragraph.classList.add('color'); //agregando color al parrafo//
	var nodoText = document.createTextNode(tweets); // le estas diciendo al comentario que es un nodo de texto//
	paragraph.appendChild(nodoText); // le dijimos q p es padre de este nodo de txto//

	newTweets.appendChild(paragraph); //Meter tweets a párrafo
	contenedor.appendChild(newTweets); //Meter contenidos a contenedor
	btn.disabled = true;
}


//Función para limtar el número de caracteres
function charactLimit(){
	var tweet = document.getElementById("tweet").value; //Variable donde se almacena valor de cada tweet
	var contador = document.getElementById("inp");//Variable para definir el contador
	var boton = document.getElementById("btn"); //Variable para definir el botón
	var contadorMax = 140; //Variable para definir la cantidad máxima de caracteres
	contador.innerHTML = contadorMax - tweet.length; //Modificar el contador para que a 140 se le reste el largo del tweet
	
	//Para habilitar/deshabilitar el botón dependiendo de la cantidad de caracteres
	if(tweet.length > contadorMax || tweet.length < 1){ // Si el largo del tweet es mayor que 140
		btn.disabled = true; // El botón se deshabilitará
	}else if(tweet.length < contadorMax){ //Si el largo del tweet es menor que 140
		btn.disabled = false; // El botón no se deshabilitará
	}

}

//Función para cambiar el color del contador dependiendo de la cantidad de caracteres restantes
function charColor(){
	var tweet = document.getElementById("tweet").value; //Variable donde se almacena valor de cada tweet
	var contador = document.getElementById("inp");//Variable para definir el contador
	var char = tweet.value.length;
	contador.innerText = 140 - caracteres;

		if (char >= 120 && char < 130){
			contador.style.color = "pink";
		}if (char >130) {
			contador.style.color = "blue";
		}else {
			contador.style.color = "red";
		}
	}

//Función para hacer crecer el textarea cuando se presiona enter
textarea.oninput = function(){
	var textarea = document.getElementById("tweet");
	var heightLimit = 200;

	textarea.style.height = "";
 	textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";

 	}

//↓ intentos fallidos ↓

	/*if(contador.innerHTML > 100) {
		contador.style.color = "black";
	}if (contador.innerHTML > 140) {
		contador.style.color = "blue"
	}if(contador.innerHTML == 140) {
		btn.disabled = true;
	}*/

//Función para hacer crecer el textarea cuando se presiona enter
	/*var textarea = document.getElementById("tweet");
	var heightLimit = 200;

	textarea.oninput = function() {
	textarea.style.height = "";
 	textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";

 	}*/

	/*var textarea = document.getElementById("tweet");
	var heightLimit = 200;

	textarea.oninput = function() {
	textarea.style.height = "";
 	textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
	};*/
	


	/*if(tweet.length > contadorMax){ // Si el largo del tweet es mayor que 140
		btn.disabled = true; // El botón se deshabilitará
	}if(tweet.length < contadorMax){ //Si el largo del tweet es menor que 140
		btn.disabled = false; // El botón no se deshabilitará
	}
}
function colorTweet(){
	var tweet = document.getElementById("tweet").value; //Variable donde se almacena valor de cada tweet
	var contador = document.getElementById("inp");//Variable para definir el contador
	var contadorMax = 140; //Variable para definir la cantidad máxima de caracteres
	if(tweet.length =< 120 && >=130){
		contador.style.color = "pink";
	}if(tweet.length =<130 && <=140){
		contador.style.color = "blue";
	}
}*/