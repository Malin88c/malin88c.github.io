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
		return (<p>{list}<p>);
	}
}


      ReactDOM.render(
        <h1>TEST</h1>,
        document.getElementById('react-app')
      );