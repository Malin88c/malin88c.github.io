
				const list = [{
				word: 'katt'
				, translation: 'cat'
				, id: 1
			}, {
				word: 'hav'
				, translation: 'ocean'
				, id: 2
			},
			{
				word: 'katt'
				, translation: 'cat'
				, id: 3
			},
			{
				word: 'häst'
				, translation: 'horse'
				, id: 4
			},
			{
				word: 'apa'
				, translation: 'monkey'
				, id: 5
			},
			{
				word: 'ananas'
				, translation: 'pineapple'
				, id: 6
			}];


		class TranslatedList extends React.Component{

		render(){
		const newList = this.props.lista.map(item => <li key ={item.id}>{item.word + ' = ' + item.translation}</li>);
		return <ol>{newList}</ol>
		}

		}

		ReactDOM.render
		(
		<TranslatedList lista={list}/>, document.getElementById('react-app')
		);