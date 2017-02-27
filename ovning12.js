		window.addEventListener('load', function () {

			HideList();

			let buttonFetch = document.getElementById('dataBtn');

			buttonFetch.addEventListener('click', function () {
				ShowList();
				console.log('knappen trycktes på');
				let url = 'http://forverkliga.se/JavaScript/api/simple.php' + '?world=whatever';
				let one = document.getElementById('poulation');
				let two = document.getElementById('europe');
				let three = document.getElementById('zimbabwe');
				let four = document.getElementById('min');
				let five = document.getElementById('continent')

				fetch(url)
					.then(function (response) {
						if (!response.ok) {
							throw Error('Could not fetch data');
						}
						return response.json();
					})
					.then(function (json) {
						let div = document.getElementById('box');
						let totalPopulation = 0;
						let europePopulation = 0;
						let zimbabweWomen = 0;
						let minPopulation = 0;
						let minCountry = '';
						let minContinent = '';
						let minPopulationContinent = 0;
						let highestContinent = '';
						let highestPopulation = 0;

						let populations = {
							asia: 0,
							africa: 0,
							oceania: 0,
							southAmerica: 0,
							northAmerica: 0,
							europe: 0
						}


						for (var i = 0; i < json.length; i++) {
							var obj = json[i];
							totalPopulation += obj.population;

							if (minPopulation === 0) {
								minPopulation = obj.population;
								minCountry = obj.name;
							} else if (obj.population < minPopulation) {
								minPopulation = obj.population
								minCountry = obj.name;
							}

							if (obj.continent === 'Europe') {
								europePopulation += obj.population;
							}
							if (obj.name === 'Zimbabwe') {
								zimbabweWomen += obj.pFemale * obj.population;
							}

							switch (obj.continent) {
								case 'Europe':
									populations.europe += obj.population;
									break;

								case 'Asia':
									populations.asia += obj.population;
									break;

								case 'North America':
									populations.northAmerica += obj.population;
									break;

								case 'South America':
									populations.southAmerica += obj.population;
									break;

								case 'Oceania':
									populations.oceania += obj.population;
									break;
							}

						};

						for (let c in populations) {
							if (populations[c] > highestPopulation) {
								highestContinent = c;
								highestPopulation = populations[c];
							}
						}

						return [totalPopulation, europePopulation, zimbabweWomen, minCountry, highestContinent];
					})
					.then(function (answers) {
						one.innerHTML = 'Hur många människor finns det i hela världen? <br/> <em>Svar: </em> I världen finns det ' + answers[0] + ' människor';
						two.innerHTML = 'Hur många människor finns i Europa? <br/> <em>Svar: </em> I europa finns det ' + answers[1] + ' människor';
						three.innerHTML = 'Hur många kvinnor finns det i Zimbabwe? <br/> <em>Svar: </em>I Zimbabwe finns det ' + answers[2] + ' kvinnor';
						four.innerHTML = 'Vilket land har minst befolkning? <br/> <em>Svar: </em>Landet med minst befolkning är ' + answers[3];
						five.innerHTML = 'Vilken kontinent har högst befolkning? <br/> <em>Svar: </em>Kontinenten med högst befolkning är ' + answers[4];
					})

			});
		});

		function HideList() {
			let one = document.getElementById('poulation');
			let two = document.getElementById('europe');
			let three = document.getElementById('zimbabwe');
			let four = document.getElementById('min');
			let five = document.getElementById('continent')

			one.style.visibility = 'hidden';
			two.style.visibility = 'hidden';
			three.style.visibility = 'hidden';
			four.style.visibility = 'hidden';
			five.style.visibility = 'hidden';
		}


		function ShowList() {
			let one = document.getElementById('poulation');
			let two = document.getElementById('europe');
			let three = document.getElementById('zimbabwe');
			let four = document.getElementById('min');
			let five = document.getElementById('continent')
			let buttonFetch = document.getElementById('dataBtn');
			let answersHead = document.getElementById('answersHead');
			


			one.style.visibility = 'visible';
			two.style.visibility = 'visible';
			three.style.visibility = 'visible';
			four.style.visibility = 'visible';
			five.style.visibility = 'visible';
			buttonFetch.style.visibility = 'hidden';
			answersHead.innerText = 'The answers to all your questions';

			
		}