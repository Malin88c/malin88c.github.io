	const list = [{
		word: 'katt'
		, translation: 'cat'
		, id: 1
	}, {
		word: 'hav'
		, translation: 'ocean'
		, id: 2
	}];


class TestHej extends React.Component{

render(){
const newList = list.map(item => <li key ={item.id}>{item.word + '=' + item.translation}</li>);
return <ul>{newList}</ul>
}

}

ReactDOM.render
(
  <TestHej/>, document.getElementById('react-app')
);