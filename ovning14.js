	const list = [{
		word: 'katt'
		, translation: 'cat'
		, id: 1
	}, {
		word: 'hav'
		, translation: 'ocean'
		, id: 2
	}];


class TranslatedList extends React.Component{

render(){
const newList = this.props.lista.map(item => <li key ={item.id}>{item.word + ' på engelska är ' + item.translation}</li>);
return <ul>{newList}</ul>
}

}

ReactDOM.render
(
  <TranslatedList lista={list}/>, document.getElementById('react-app')
);