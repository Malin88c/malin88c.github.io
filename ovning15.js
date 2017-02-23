class App extends React.Component {

  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      input1: 0,
      input2: 0,
      result: 0,
      errormessage: ''
    };
  }

  inputChange(event) {
  let value1 = document.getElementById('input1').value;
  let value2 = document.getElementById('input2').value; 

    this.setState({
      input1: value1,
      input2: value2     
    }, () => this.getSum())
  }

getSum(){
 let input1 = parseFloat(this.state.input1);
 let input2 = parseFloat(this.state.input2);
 let sum = 0;
 
if(Number.isNaN(input1) || Number.isNaN(input2) ){
  this.setState({errormessage: 'Ogiltiga tal', result: NaN })
}

else{
  sum = input1 + input2;

  this.setState({result: sum, errormessage: ''});
}
}
  
  render() {
    return (
      <div id='app'>
			  <FormComponent>
		      <input id='input1' type='text' value={this.state.input1} onChange={this.inputChange}/>
          <p>+</p>
				  <input id='input2' type='text' value={this.state.input2} onChange={this.inputChange} />
          <p>=</p>
          <ResultComponent result = {this.state.result} />          
		    </FormComponent>
        <p>{this.state.errormessage}</p>
			</div>
    )
  }
}
class FormComponent extends React.Component {
  render() {
    return (
      <form>{this.props.children}</form>)
  };
}

class ResultComponent extends React.Component{
  render(){
    return(
      <input type='text' readOnly value={this.props.result}/>  
  )}
}



ReactDOM.render (
	  <App/>,
  document.getElementById('app')
)

