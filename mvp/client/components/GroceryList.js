var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var ManipulateList = require('./ManipulateList.js');
var ItemRow = require('./ItemRow.js');
var GroceryTable = require('./GroceryTable.js');

class GroceryList extends React.Component {
	constructor(props) {
	  super(props),
	  this.state = {
	  	listOfItems : []
	  }
	  	this.addItem = this.addItem.bind(this);
	  	this.getRequest = this.getRequest.bind(this);
	}

	componentDidMount() {
 		this.getRequest();
  }

  getRequest () {
  	$.get("/itemdb",(data) => {
   	 console.log('get request success!');
   	 var tempList = this.state.listOfItems.slice();
   	 tempList.push(data);
   	 console.log(tempList, 'tempList');
     this.setState({listOfItems: tempList});
   })
  }

	render () {
  	return(
  			<div>
  			<hr />
  				<GroceryTable listOfItems = {this.state.listOfItems} />
  			<hr />
  				<ManipulateList addItem = {this.addItem} />
  			</div>
  		)
  }


  addItem(grocery) {
  	console.log('attempting to add Item');

  $.post('/itemdb', grocery, (data) => {
    	console.log('sending data to be added', data);
    })//.then( () => {console.log('it is chaining')})
  }

}

module.exports = GroceryList;
