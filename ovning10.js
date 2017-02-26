window.addEventListener('load', function () {

	var btnAdd = document.getElementById('knappbtn');
	var btnRemove = document.getElementById('deletebtn');
	var btnEdit = document.getElementById('editbtn');
	var list = document.getElementById('lista');

	let selectedItem;


	btnAdd.addEventListener('click', function () {

		var input = document.getElementById('message').value;

		if (input !== '') {
			var lista = document.getElementById('lista');

			var item = document.createElement('li');

			item.appendChild(document.createTextNode(input));
			lista.appendChild(item);
		}

	});

	lista.addEventListener('click', function (e) {
		selectedItem = e.target;
		var textBox = document.getElementById('message');
		textBox.value = e.target.innerText;
		var listItems = list.getElementsByTagName('li');

		for (let i of listItems) {
			if (i !== e.target) {
				i.style.background = 'none';
			}

		}

		if (e.target.style.backgroundColor !== 'hotpink') {
			e.target.style.backgroundColor = 'hotpink';
		} else {
			e.target.style.background = 'none';
			textBox.value = '';
		}

	});

	btnEdit.addEventListener('click', function (e) {
		var textBox = document.getElementById('message');

		if (textBox.value && selectedItem) {

			selectedItem.innerText = textBox.value;
		}

	});

	btnRemove.addEventListener('click', function (e) {

		var textBox = document.getElementById('message');

		if (textBox.value && selectedItem) {
			var lista = document.getElementById('lista');

			lista.removeChild(selectedItem);

			textBox.value = '';
		}



	});



});