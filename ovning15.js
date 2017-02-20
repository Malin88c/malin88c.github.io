class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      inputValue: ''
    };
  }
  inputChange(event) {
    console.log('App.inputChange körs')
    this.setState({
      inputValue: event.target.value
    })
  }
  render () {
    return (
      <div id="app">
      <FormComponent>
      <button>button</button> <br/>
      <InputComponent changeEvent={this.inputChange} />
      </FormComponent>
      <Info text={this.state.inputValue} />
      </div>
    );
  }
}

class FormComponent extends React.Component {
  render() {
    return (
      <form>
      {this.props.children}
      </form>
    );
  }
}


class InputComponent extends React.Component {
  render() {
    return (
      <input 
        onChange={this.props.changeEvent} />
    );
  }
}
class Info extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);