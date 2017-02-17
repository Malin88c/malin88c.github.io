	const list = [{
		word: 'katt'
		, translation: 'cat'
		, id: 1
	}, {
		word: 'hav'
		, translation: 'ocean'
		, id: 2
	}]

	class TranslateList extends React.Component {

		const newList = this.props.lista.map(item => < li key = {
				item.id
			} > {
				item.katt
			} = {
				item.translation
			} < /li> )

			render() {
				return ( < ul > {
						newList
					} < /ul> )
				}
			}
		}
	}

	ReactDOM.render( < TranslateList lista = {
		list
	}, document.getElementById('react-app') / > )