class FilterInput extends React.Component{

  constructor(props){
   super(props);
	}
	 
     handleChange = (e) => {
    this.props.filterList(e.target.value);
  }
   
  render(){
	
  	return(
    	<div>
    		Search:  <input placeholder="Filter Countries" onChange={this.handleChange} className="searchInput"></input>
        <hr/>
      </div>
    )
    }
}

class Country extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          inEdit: null,
          editText: null,
      }
  }


	editName = (countryName) => {
  	this.setState({ inEdit: 'name', editText: countryName});
  }
  
  editContinent = (continentName) => {
  	this.setState({ inEdit: 'continent', editText: continentName})
  }
  
  handleChange = (e) => {
    this.setState({ editText: e.target.value });
  }
  
  
  endEditName = () => {
    this.setState({ inEdit: null});
    this.props.updateCountryName(this.props.name, this.state.editText);
  }
  
  endEditContinent = () =>{
  	this.setState({ inEdit: null});
    this.props.updateContinent(this.props.name, this.state.editText)
  }
  
  render() {
  	 return (
    <div onClick={() => this.props.selectCountry(this.props.name)}>
      	<div>
                {this.props.name === this.props.selectedCountry ?
          <button className="deleteCountryBtn btn" onClick={() => this.props.deleteCountry(this.props.name)}>Delete <span className="glyphicon glyphicon-trash"></span></button> : ''
        }
        	{this.state.inEdit !== 'name' ?
          <span onClick={() => this.editName(this.props.name)} className="countryName" >{this.props.name}</span> :
          <input onChange={this.handleChange}  autoFocus onBlur={() => this.endEditName()} value={this.state.editText} /> }
        </div>
        <div>
        {this.state.inEdit !== 'continent' ?
                  <span onClick={() => this.editContinent(this.props.continent)}>{this.props.continent}</span> :
          <input onChange={this.handleChange}  autoFocus onBlur={() => this.endEditContinent()} value={this.state.editText} /> 
        }       
        </div>

        <hr/>
    </div>
  );
  }

 
};

const CountryList = (props) => {
	return (
  	<div>
        {props.countries.length === 0 ?        
        	<h3>Loading Countries...</h3> : '' }
        
        	{props.countries.map(country => <Country deleteCountry={props.deleteCountry} selectedCountry={props.selectedCountry} updateCountryName={props.updateCountryName} updateContinent={props.updateContinent} selectCountry={props.selectCountry} key={country.name} {...country} />)}
        <div>Number of countries: {props.countries.length}</div>  
   	</div>
    
  )
}

class App extends React.Component {

	componentDidMount() {
                
			let _this = this;

            fetch('https://forverkliga.se/JavaScript/api/simple.php?world')
            .then(function(response){
            
            return response.json();
            })

            .then(function(json){
                _this.setState({countries: json})
				_this.filterList('');
            })
  }
  
  deleteCountry = (country) => {
		  	this.setState(prevState => ({
    		filteredCountries: prevState.filteredCountries.filter(c => c.name != country)
    }));
  }

	state = {
  	countries: [],
    filteredCountries: [],
    selectedCountry: null,
  };
  
  selectCountry = (country) => {
  	this.setState({ selectedCountry: country});
  }
  
  updateCountryName = (countryName, newName) => {
  	
    if (newName.length === 0){
    	alert('Country cannot be empty.');
    	return;
    }
    
    let countryAlreadyExists = false;
  
  	this.state.countries.forEach(function(country) {
      if (country.name === newName && newName !== countryName) {
          alert('Country already exists!');
      		countryAlreadyExists = true;
      }
    });
    
    if(!countryAlreadyExists)
    {
      this.state.countries.forEach(function(country) {
        if (country.name === countryName) {
            country.name = newName;
        }
      });
    }
  
  }
  
  updateContinent = (countryName, newContinent) => {
  	this.state.countries.forEach(function(country){
    if(country.name === countryName){
    	country.continent = newContinent;
    }
    })
  }
  
  filterList = (filterText) => {
  	console.log(filterText);
    if(filterText.length === 0){
    	this.setState({filteredCountries: this.state.countries})
    }
    else{
    	let re = new RegExp(filterText, 'gi');
    	this.setState({filteredCountries: this.state.countries.filter(c => c.name.match(re) || c.continent.match(re))})
    }
  }
  
  
	render () {  
  	return (
    	<div>
      <FilterInput filterList={this.filterList} />
      	<CountryList deleteCountry={this.deleteCountry} selectedCountry={this.state.selectedCountry} selectCountry={this.selectCountry} countries={this.state.filteredCountries} updateCountryName={this.updateCountryName} updateContinent={this.updateContinent} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));