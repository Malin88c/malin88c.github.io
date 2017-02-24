		window.addEventListener('load', function () {
			let buttonFetch = document.getElementById('dataBtn');

			buttonFetch.addEventListener('click', function () {

            console.log('knappen trycktes på');
				let url = 'http://forverkliga.se/JavaScript/api/simple.php' +'?world=whatever'; 
				let one = document.getElementById('poulation');
				


				fetch(url)
					.then(function (response) {
						return response.json(); // JSON Promise
					})
					.then(function (json) {
						let div = document.getElementById('box');
						let totalPopulation;

                        for (var i = 0; i < json.length; i++){
                        	var obj = json[i];

							if(obj === 'object'){
								totalPopulation += obj.population;
							}

                            	}; 


                        	/*	for (var x in obj){
									if(x === 'population'){
										totalPopulation  += x.value;
									}

                        			/*div.innerHTML += `${x}: ${obj[x]}<br/>`;*/


								return totalPopulation;
					})
					.then(function(pop){
						one.innerHTML = 'I världen finns det ' + pop + ' människor'; 
					})

			});
        });