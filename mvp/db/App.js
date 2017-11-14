var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/itemdatabase');
var autoIncrement = require('mongoose-auto-increment');
var db = mongoose.connection;
var collection = db.collection('Items');

autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { console.log('connected, bruh')});

let itemsSchema = mongoose.Schema({
	itemName: { type : String, unique : true, dropDups: true, required: true },
	quantity: Number,
	purpose: String,
});

itemsSchema.plugin(autoIncrement.plugin, 'Items');

let Items = mongoose.model('Items',itemsSchema);

let memo = (item, callback) => {
	var doc = {
		itemName: item.itemName,
		quantity: item.quantity,
		purpose: item.purpose,
	}
	var newItem = new Items(doc);
	
	newItem.save(function(err, data) {
		if (err) {console.log(err)}
		else {console.log('data retrieved')} 
	}).then( () => {
		console.log('running line 33');
		if (callback) {
			console.log('running line 34');
			callback()};
		})
}

module.exports.memo = memo;
module.exports.Items = Items;