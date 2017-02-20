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

		</FormComponent>
			</div>
    )
  }
}
class FormComponent extends React.Component {

  render() {
    return (
      <form>this.props.children</form>)
  };
}

class InputComponent extends React.Component {
  render() {
    return (
      <input type='text' onChange={this.props.changeEvent}/>
    )
  }
}

ReactDOM.render {
  <App/>,
  document.getElementById('app');

}