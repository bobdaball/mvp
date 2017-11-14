'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var ItemRow = function (_React$Component) {
	_inherits(ItemRow, _React$Component);

	function ItemRow(props) {
		_classCallCheck(this, ItemRow);

		var _this = _possibleConstructorReturn(this, (ItemRow.__proto__ || Object.getPrototypeOf(ItemRow)).call(this, props));

		console.log(_this.props.curItem.itemName, 'itemName');
		return _this;
	}

	_createClass(ItemRow, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						this.props.curItem.itemName
					),
					React.createElement(
						'td',
						null,
						this.props.curItem.quantity
					),
					React.createElement(
						'td',
						null,
						this.props.curItem.purpose
					)
				)
			);
		}
	}]);

	return ItemRow;
}(React.Component);

module.exports = ItemRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0l0ZW1Sb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUmVhY3RET00iLCIkIiwiSXRlbVJvdyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImN1ckl0ZW0iLCJpdGVtTmFtZSIsInF1YW50aXR5IiwicHVycG9zZSIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRQyxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUlDLFdBQVdELFFBQVEsV0FBUixDQUFmO0FBQ0EsSUFBSUUsSUFBSUYsUUFBUSxRQUFSLENBQVI7O0lBRU1HLE87OztBQUNMLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1pBLEtBRFk7O0FBRWxCQyxVQUFRQyxHQUFSLENBQVksTUFBS0YsS0FBTCxDQUFXRyxPQUFYLENBQW1CQyxRQUEvQixFQUF5QyxVQUF6QztBQUZrQjtBQUdsQjs7OzsyQkFFTztBQUFDLFVBQU87QUFBQTtBQUFBO0FBQ1Y7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUssV0FBS0osS0FBTCxDQUFXRyxPQUFYLENBQW1CQztBQUF4QixNQUREO0FBRUU7QUFBQTtBQUFBO0FBQUssV0FBS0osS0FBTCxDQUFXRyxPQUFYLENBQW1CRTtBQUF4QixNQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUssV0FBS0wsS0FBTCxDQUFXRyxPQUFYLENBQW1CRztBQUF4QjtBQUhGO0FBRFUsSUFBUDtBQVFSOzs7O0VBZG9CWCxNQUFNWSxTOztBQWlCNUJDLE9BQU9DLE9BQVAsR0FBaUJWLE9BQWpCIiwiZmlsZSI6Ikl0ZW1Sb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5jbGFzcyBJdGVtUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJJdGVtLml0ZW1OYW1lLCAnaXRlbU5hbWUnKTtcblx0fVxuXG5cdHJlbmRlcigpe3JldHVybig8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0PHRkPnt0aGlzLnByb3BzLmN1ckl0ZW0uaXRlbU5hbWV9PC90ZD5cblx0XHRcdFx0XHQgXHRcdFx0PHRkPnt0aGlzLnByb3BzLmN1ckl0ZW0ucXVhbnRpdHl9PC90ZD5cblx0XHRcdFx0XHQgXHRcdFx0PHRkPnt0aGlzLnByb3BzLmN1ckl0ZW0ucHVycG9zZX08L3RkPlxuXHRcdFx0XHRcdCBcdFx0PC90cj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZW1Sb3c7Il19