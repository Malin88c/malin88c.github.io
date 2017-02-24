		window.addEventListener('load', function () {
			let buttonFetch = document.getElementById('dataBtn');

			buttonFetch.addEventListener('click', function () {

            console.log('knappen trycktes på');
				let url = 'http://forverkliga.se/JavaScript/api/simple.php' +'?world=whatever'; ;


				fetch(url)
					.then(function (response) {
						return response.json(); // JSON Promise
					})
					.then(function (json) {
						let div = document.getElementById('box');
						for (let x in json) {
							div.innerHTML += x + ' : ' + json[x] + '<br/>';
						}
					});

			});
        });