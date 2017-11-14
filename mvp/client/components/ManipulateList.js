var React = require('react');
var ReactDOM = require('react-dom');



class ManipulateList extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
   render () {
    console.log('can ManipulateList');
    
  	return (
  		<div>
  		<form name="itemAddition">
  			<input type = "text" name="itemName" placeholder="" />
  			<input type = "number" name="quantity" placeholder="1" />
  			<input type = "text" name = "purpose" placeholder="general" />
  			<button onClick = {this.handleSubmit}>Add Grocery</button>
  			</form>
  		</div>
  	)
  }

  handleSubmit(e) {
  	e.preventDefault();
  	var entry = document.forms.itemAddition;
  	this.props.addItem({itemName: entry.itemName.value, quantity: entry.quantity.value, purpose: entry.purpose.value});

  	entry.itemName.value = "";
  	entry.quantity.value = 0;
  	entry.quantity.purpose = "";
  }

}

module.exports = ManipulateList;