
const interval = setInterval(() =>{
	let position = random(1,4);
	switch(position){
		case 1: document.getElementById('imagen-ventana').src="../img/1.jpg"; break;
		case 2: document.getElementById('imagen-ventana').src="../img/2.jpg"; break;
		case 3: document.getElementById('imagen-ventana').src="../img/3.jpg"; break;
		case 4: document.getElementById('imagen-ventana').src="../img/deporte.jpg"; break;
		default: document.getElementById('imagen-ventana').src="../img/1.jpg"; break;	
	}
},3000);

let random = (min, max) => {
	 return Math.floor((Math.random() * (max - min + 1)) + min); 
}


