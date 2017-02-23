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
    this.setState({
      input1: getElementById('input1').value,
      input2: getElementById('input2').value      
    }, () => getSum())
  }

getSum(){
 let input1 = this.state.input1;
 let input2 = this.state.input2;
 let sum = 0;
 
if(Number.NaN(input1) || Number.NaN(input2) ){
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
		      <InputComponent id='input1' changeEvent={this.inputChange}/>
				  <InputComponent id='input2' changeEvent={this.inputChange} />
          <ResultComponent result = {this.props.result} changeEvent={this.resultChange} />
          <ErrorMessageComponent />
		    </FormComponent>
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

class InputComponent extends React.Component {
  render() {
    return (
      <input className='inputField' type='text' onChange={this.props.changeEvent}/>
    )
  }
}

class ResultComponent extends React.Component{

constructor(){
  super();
  this.resultChange = this.resultChange.bind(this);
  this.state = {
    resultValue: ''
  };
}

resultChange(event){
  this.setState({
  resultValue: getSum()
  })
}



  render(){

    return(
    <input type='text' readOnly onChange={this.props.changeEvent}/>  
    )
  }
}

class ErrorMessageComponent extends React.Component{
  render(){
    return(
    <label>ErrorErrorError</label>
    )
  }
}

ReactDOM.render (
	  <App/>,
  document.getElementById('app')
)

