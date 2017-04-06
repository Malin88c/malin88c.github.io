        
        
        class App extends React.Component{
            constructor(props){
                super(props);

                this.state = {
                    data: []
                }
            }

            componentDidMount(){

                let _this = this;

            fetch('http://forverkliga.se/JavaScript/api/simple.php?world')
            .then(function(response){
            
            return response.json();
            })

            .then(function(json){
                _this.setState({data: json})
            })
                }


                render(){
                    return(
                        <Countries data={this.state.data}/>
                    );
                }

            }

        
        
        class Countries extends React.Component{

            constructor(props){
                super(props);
            }

            render(){

                const list = this.props.data.map(
                    country => 
                    <li key={key++}>{country.name}</li>
                )



                return(
                    <ul>{list}</ul>
                );
            }
            
        }


        class Country extends React.Component{
            
        }



        ReactDom.render(<App/>, document.getElementById('app'));
