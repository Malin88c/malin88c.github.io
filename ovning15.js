class App extends React.Component {

  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      inputValue: ''
    };
  }
  inputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }
  render() {
    return (
      <div id='app'>
			  <FormComponent>
		      <InputComponent changeEvent={this.inputChange}/>
				  <InputComponent changeEvent={this.inputChange} />
          <ResultComponent changeEvent={this.resultChange} />
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
  this.state = {
    resultValue: ''
  };
}

resultChange(event){
  this.setState({
  resultValue: getSum()
  })
}

getSum(){
 let inputs = document.getElementsByClassName('inputField');
 let sum;
 
 for(i = 0; i < inputs.length; i++){
   sum += inputs[i].value;
 }
  return sum;
}

  render(){

    return(
    <input type='text' readOnly/>  
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

