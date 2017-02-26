window.addEventListener('load', function () {

	var btn = document.getElementById('knappbtn');
	var list = document.getElementById('lista');


	btn.addEventListener('click', function () {

		var input = document.getElementById('message').value;

		var lista = document.getElementById('lista');

		var item = document.createElement('li');

		item.appendChild(document.createTextNode(input));
		lista.appendChild(item);
	});

	lista.addEventListener('click', function (e) {
		var textBox = document.getElementById('message');
		textBox.value = e.target.innerText;
		var listItems = list.getElementsByTagName('li');

		for (let i of listItems) {
			if(i !== e.target){
				i.style.background = 'none';
			}
			
		}

		if (e.target.style.backgroundColor !== 'hotpink') {
			e.target.style.backgroundColor = 'hotpink';
		}

		else{
			e.target.style.background = 'none';
			textBox.value = '';
		}

	});

});