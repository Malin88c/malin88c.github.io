class App extends React.Component {

  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.choiceOfOperator = this.choiceOfOperator.bind(this);
    this.state = {
      input1: 0,
      input2: 0,
      result: 0,
      operator: 'add',
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

  choiceOfOperator(event){

    let op = event.target.value;
    this.setState({
      operator: op
    }, () => this.getSum())


  }

getSum(){
 let input1 = parseFloat(this.state.input1);
 let input2 = parseFloat(this.state.input2);
 let sum = 0;
 
if(Number.isNaN(input1) || Number.isNaN(input2) ){
  this.setState({errormessage: 'Ogiltiga tal', result: NaN })
}

else if(this.state.operator === 'add'){
  sum = input1 + input2;
}
else if(this.state.operator === 'subtract'){
  sum = input1 - input2
}
else if(this.state.operator === 'divide'){
  sum = input1 / input2
}
else if(this.state.operator === 'multiply'){
  sum = input1 * input2
}
  this.setState({result: sum, errormessage: ''});
}

  
  render() {
    return (
      <div id='app'>
			  <FormComponent>
		      <input id='input1' type='text' value={this.state.input1} onChange={this.inputChange}/> 

          <select value={this.state.operator} onChange={this.choiceOfOperator}>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="divide">/</option>
            <option value="multiply">*</option>
          </select>

				  <input id='input2' type='text' value={this.state.input2} onChange={this.inputChange} /> = 
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

