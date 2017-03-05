
class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: [],
			numberOfCountries : 0

		}
	}

	componentDidMount(){

	let _this = this;

		fetch('http://forverkliga.se/JavaScript/api/simple.php?world')
		.then(function(response){
		
		return response.json();
		})

		.then(function(json){
			let count = json.length;
			_this.setState({data: json, numberOfCountries: count})
		})
	}

deleteCountry(countryId) {

 let updatedList = this.state.data;
 updatedList.splice(countryId, 1);
 let count = updatedList.length;

 this.setState({ list: updatedList, numberOfCountries: count })  
}  


		render(){
			return(
			<div>
				<h3>List of Countries</h3>
				<CountriesList data={this.state.data} onDelete={this.deleteCountry.bind(this)}/>
				<h4>Det finns {this.state.numberOfCountries} länder i listan</h4>
			</div>
			)
		}

}

class CountriesList extends React.Component{
		constructor(props){
		super(props);
            this.state = {
                    selectedCountryId: null, 
            } 
		}

		clickFunction(countryId, event) {

		event.stopPropagation();


        if (event.target.id === 'deleteBtn') {
            this.props.onDelete(countryId);
            this.setState({
                selectedCountryId: null
            });
        } 
		
		else {	

			if(this.state.selectedCountryId !== countryId){

				this.setState({
                selectedCountryId:  countryId
            });
			}
			else{
				this.setState({			
                selectedCountryId: null
            });

			}	

        }
		}

		render(){
			const list = this.props.data.map((country, countryId) =>
            <li
                onClick={this.clickFunction.bind(this, countryId)}
                key={countryId}
                className='list-group'>
							
                Country:  {country.name} <br/> 
				Continent: {country.continent} <br/> 
                Population: {country.population} <br/> 

				{this.state.selectedCountryId === countryId &&
                    <button
                        id="deleteBtn"
                        onClick={this.clickFunction.bind(this, countryId)}
                        className={'btn trash-btn'}>
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                }
            </li>);

        return (
            <div>
                <ul className='list-group'>
                    {list}
                </ul>
            </div>
        );
	
}
}
	ReactDOM.render(
		<App/>,
		document.getElementById('app')
	)

