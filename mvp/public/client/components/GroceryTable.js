'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var ItemRow = require('./ItemRow.js');

var GroceryTable = function (_React$Component) {
	_inherits(GroceryTable, _React$Component);

	function GroceryTable(props) {
		_classCallCheck(this, GroceryTable);

		return _possibleConstructorReturn(this, (GroceryTable.__proto__ || Object.getPrototypeOf(GroceryTable)).call(this, props));
	}

	_createClass(GroceryTable, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'table',
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'item'
							),
							React.createElement(
								'th',
								null,
								'quantity'
							),
							React.createElement(
								'th',
								null,
								'purpose'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						this.props.listOfItems.map(function (curItem, index) {
							React.createElement(ItemRow, { key: index, curItem: curItem });
						})
					)
				)
			);
		}
	}]);

	return GroceryTable;
}(React.Component);

module.exports = GroceryTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0dyb2NlcnlUYWJsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJSZWFjdERPTSIsIiQiLCJJdGVtUm93IiwiR3JvY2VyeVRhYmxlIiwicHJvcHMiLCJsaXN0T2ZJdGVtcyIsIm1hcCIsImN1ckl0ZW0iLCJpbmRleCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRQyxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUlDLFdBQVdELFFBQVEsV0FBUixDQUFmO0FBQ0EsSUFBSUUsSUFBSUYsUUFBUSxRQUFSLENBQVI7QUFDQSxJQUFJRyxVQUFVSCxRQUFRLGNBQVIsQ0FBZDs7SUFFTUksWTs7O0FBQ0wsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxSEFDWEEsS0FEVztBQUVsQjs7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBREQsTUFERDtBQVFDO0FBQUE7QUFBQTtBQUNFLFdBQUtBLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQ2hELDJCQUFDLE9BQUQsSUFBUyxLQUFPQSxLQUFoQixFQUF1QixTQUFXRCxPQUFsQztBQUNDLE9BRkE7QUFERjtBQVJEO0FBREEsSUFERDtBQWtCQTs7OztFQXhCeUJULE1BQU1XLFM7O0FBMkJqQ0MsT0FBT0MsT0FBUCxHQUFpQlIsWUFBakIiLCJmaWxlIjoiR3JvY2VyeVRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBJdGVtUm93ID0gcmVxdWlyZSgnLi9JdGVtUm93LmpzJyk7XG5cbmNsYXNzIEdyb2NlcnlUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdCAgc3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkgeyBcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDx0YWJsZT5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0aD5pdGVtPC90aD5cblx0XHRcdFx0XHRcdDx0aD5xdWFudGl0eTwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+cHVycG9zZTwvdGg+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmxpc3RPZkl0ZW1zLm1hcCgoY3VySXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHQ8SXRlbVJvdyBrZXkgPSB7aW5kZXh9IGN1ckl0ZW0gPSB7Y3VySXRlbX0gLz5cblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm9jZXJ5VGFibGU7Il19