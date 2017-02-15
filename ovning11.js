		window.addEventListener('load', function () {
			let button = document.getElementById('knapp');

			button.addEventListener('click', function () {

				let url = 'http://forverkliga.se/JavaScript/api/simple.php';
				let ajax = new XMLHttpRequest();
				ajax.open('get', url);
				ajax.onreadystatechange = function () {
					if (ajax.status == 200 && ajax.readyState == 4)
						
						let responseJson = JSON.parse(ajax.responseText)
						      
					
					let x in responseJson{
						document.getElementById("box").innerHTML;
					}

				}
				ajax.send();

			});


		});