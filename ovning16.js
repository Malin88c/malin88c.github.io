class App extends React.Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData(this);

        this.state = {
            data: []
        }
    }

componentDidMount(){
    this.fetchData();
}

fetchData(){
    fetch('http://forverkliga.se/JavaScript/api/simple.php?world')
    .then(function(json){
       this.setState({data: json})
    })

    .then()
}
    render(){
        <div>
            <h3>Countries</h3>
            <div>{this.state.data}</div>
        </div>
    }
}

class CountriesComponent extends React.Component{
    render(){
        <ul></ul>
    }
} 

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)