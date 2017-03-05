		window.addEventListener('load', function () {
			let buttonXML = document.getElementById('XMLknapp');

			buttonXML.addEventListener('click', function () {

				let url = 'http://forverkliga.se/JavaScript/api/simple.php';
				let ajax = new XMLHttpRequest();
				ajax.open('get', url);
				ajax.onreadystatechange = function () {
					if (ajax.status == 200 && ajax.readyState == 4) {
						let responseJson = JSON.parse(ajax.responseText)
						let div = document.getElementById('box');

						for (let x in responseJson) {
							div.innerHTML += x + ' : ' + responseJson[x] + '<br/>';
						}
						div.innerHTML += '--------------------------------------------------------------' + '<br/>';
					}


				}
				ajax.send();

			});

			let buttonFetch = document.getElementById('FetchKnapp');

			buttonFetch.addEventListener('click', function () {

				let url = 'http://forverkliga.se/JavaScript/api/simple.php';


				fetch(url)
					.then(function (response) {
						return response.json(); // JSON Promise
					})
					.then(function (json) {
						let div = document.getElementById('box');
						for (let x in json) {
							div.innerHTML += x + ' : ' + json[x] + '<br/>';
						}
						div.innerHTML += '--------------------------------------------------------------' + '<br/>';
					});

			});

			let buttonQuery = document.getElementById('QueryKnapp');

			buttonQuery.addEventListener('click', function () {
				let url = 'http://forverkliga.se/JavaScript/api/simple.php' + '?key=value';

				fetch(url)
					.then(function (response) {
						return response.json();
					})
					.then(function (json) {
						let div = document.getElementById('box');
						for (let x in json) {
							div.innerHTML += x + ' : ' + json[x] + '<br/>';
						}
						div.innerHTML += '--------------------------------------------------------------' + '<br/>';
					});
			});


		});