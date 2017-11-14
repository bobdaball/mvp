var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

class ItemRow extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.curItem.itemName, 'itemName');
	}

	render(){return(<div>
							<tr>
								<td>{this.props.curItem.itemName}</td>
					 			<td>{this.props.curItem.quantity}</td>
					 			<td>{this.props.curItem.purpose}</td>
					 		</tr>
						</div>
					)
	}
}

module.exports = ItemRow;