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
      input2: value2,
      errormessage: '',     
    }, () => this.getSum())
  }

  choiceOfOperator(event){
  let value1 = document.getElementById('input1').value;
  let value2 = document.getElementById('input2').value; 

    let op = event.target.value;
    this.setState({
      input1: value1,
      input2: value2,
      errormessage: '',  
      operator: op
    }, () => this.getSum())


  }

getSum(){
 let input1 = this.state.input1;
 let input2 = this.state.input2;
 let sum = 0;

 
for (var i=0; i < input1.length; i++) { 
     if(input1.charAt(i) !== '0'){
       break;
     }
   else{
     input1 = input1.substring(1);
   }}
  for (var i=0; i < input1.length; i++) { 
     if(input2.charAt(i) !== '0'){
       break;
     }
   else{
     input2 = input1.substring(1);
   }}


 if(!isFinite(input1) || !isFinite(input2))
 { 
   this.setState({ errormessage:  'Ange två tal som är giltiga' , result: 'Error'}); 
   }

   else{
      input1 = parseFloat(this.state.input1);
      input2 = parseFloat(this.state.input2);


  if(this.state.operator === 'divide' && input2 == 0) {
    this.setState({errormessage: 'Not allowed to divide by zero', result:'Error'})
  }
   
  else{
    if(this.state.operator === 'add')
    { 
      sum = input1 + input2; 
    } 
    else if(this.state.operator === 'subtract')
    { 
      sum = input1 - input2
    } 
    else if(this.state.operator === 'divide')
    { 
        sum = input1 / input2 
    } 
    else if(this.state.operator === 'multiply')
    { 
      sum = input1 * input2 
    } 
    this.setState({result: sum, errormessage:'' }); }


}   }

  
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-2">
          <h1>Övning 15</h1>
          <div className="col-md-8 form-container container">
            <h3>Calculator</h3>
            <FormComponent>
              <div className="form-group">
                <input id='input1' className="form-control" type='text' value={this.state.input1} onChange={this.inputChange}/>

                <select className="form-control" value={this.state.operator} onChange={this.choiceOfOperator}>
                                <option value="add">+</option>
                                <option value="subtract">-</option>
                                <option value="divide">/</option>
                                <option value="multiply">*</option>
                              </select>

                <input id='input2' className='form-control' type='text' value={this.state.input2} onChange={this.inputChange} />          <span className="eq">=</span>
                <ResultComponent result={ this.state.result} />
              </div>
            </FormComponent>
                    
              <h3>{this.state.errormessage}</h3>
          </div>
        </div>
      </div>
    )
  }
}

class FormComponent extends React.Component {
  render() {
    return (
      <form className='form-inline'>{this.props.children}</form>)
  };
}

class ResultComponent extends React.Component{
  render(){
    return(
      <input type='text' className='form-control' readOnly value={this.props.result}/>  
  )}
}



ReactDOM.render (
	  <App/>,
  document.getElementById('app')
)