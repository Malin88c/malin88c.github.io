var btn = document.getElementById('knappbtn');
var input = document.getElementById('message');


document.addEventListener('click', function(input, btn){
	var lista = document.getElementById('lista');
	
	lista.push(input.innerHTML);
});
