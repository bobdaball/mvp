var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var ItemRow = require('./ItemRow.js');

class GroceryTable extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() { 
		return (
			<div>
			<table>
				<thead>
					<tr>
						<th>item</th>
						<th>quantity</th>
						<th>purpose</th>
					</tr>
				</thead>
				<tbody>
					{this.props.listOfItems.map((curItem, index) => {
					<ItemRow key = {index} curItem = {curItem} />
					})}
				</tbody>
			</table>
			</div>
		)
	}
}

module.exports = GroceryTable;