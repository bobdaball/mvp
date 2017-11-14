'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var ManipulateList = require('./ManipulateList.js');
var ItemRow = require('./ItemRow.js');
var GroceryTable = require('./GroceryTable.js');

var GroceryList = function (_React$Component) {
  _inherits(GroceryList, _React$Component);

  function GroceryList(props) {
    var _this;

    _classCallCheck(this, GroceryList);

    (_this = _possibleConstructorReturn(this, (GroceryList.__proto__ || Object.getPrototypeOf(GroceryList)).call(this, props)), _this), _this.state = {
      listOfItems: []
    };
    _this.addItem = _this.addItem.bind(_this);
    _this.getRequest = _this.getRequest.bind(_this);
    return _this;
  }

  _createClass(GroceryList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getRequest();
    }
  }, {
    key: 'getRequest',
    value: function getRequest() {
      var _this2 = this;

      $.get("/itemdb", function (data) {
        console.log('get request success!');
        var tempList = _this2.state.listOfItems.slice();
        tempList.push(data);
        console.log(tempList, 'tempList');
        _this2.setState({ listOfItems: tempList });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('hr', null),
        React.createElement(GroceryTable, { listOfItems: this.state.listOfItems }),
        React.createElement('hr', null),
        React.createElement(ManipulateList, { addItem: this.addItem })
      );
    }
  }, {
    key: 'addItem',
    value: function addItem(grocery) {
      console.log('attempting to add Item');

      $.post('/itemdb', grocery, function (data) {
        console.log('sending data to be added', data);
      }); //.then( () => {console.log('it is chaining')})
    }
  }]);

  return GroceryList;
}(React.Component);

module.exports = GroceryList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0dyb2NlcnlMaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiJCIsIk1hbmlwdWxhdGVMaXN0IiwiSXRlbVJvdyIsIkdyb2NlcnlUYWJsZSIsIkdyb2NlcnlMaXN0IiwicHJvcHMiLCJzdGF0ZSIsImxpc3RPZkl0ZW1zIiwiYWRkSXRlbSIsImJpbmQiLCJnZXRSZXF1ZXN0IiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZW1wTGlzdCIsInNsaWNlIiwicHVzaCIsInNldFN0YXRlIiwiZ3JvY2VyeSIsInBvc3QiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJQyxXQUFXRCxRQUFRLFdBQVIsQ0FBZjtBQUNBLElBQUlFLElBQUlGLFFBQVEsUUFBUixDQUFSOztBQUVBLElBQUlHLGlCQUFpQkgsUUFBUSxxQkFBUixDQUFyQjtBQUNBLElBQUlJLFVBQVVKLFFBQVEsY0FBUixDQUFkO0FBQ0EsSUFBSUssZUFBZUwsUUFBUSxtQkFBUixDQUFuQjs7SUFFTU0sVzs7O0FBQ0wsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsdUhBQU1BLEtBQU4sWUFDQSxNQUFLQyxLQUFMLEdBQWE7QUFDWkMsbUJBQWM7QUFERixLQURiO0FBSUMsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYixPQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQixPQUFsQjtBQU5nQjtBQU9sQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsVUFBTDtBQUNBOzs7aUNBRWE7QUFBQTs7QUFDYlYsUUFBRVcsR0FBRixDQUFNLFNBQU4sRUFBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0EsWUFBSUMsV0FBVyxPQUFLVCxLQUFMLENBQVdDLFdBQVgsQ0FBdUJTLEtBQXZCLEVBQWY7QUFDQUQsaUJBQVNFLElBQVQsQ0FBY0wsSUFBZDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZQyxRQUFaLEVBQXNCLFVBQXRCO0FBQ0EsZUFBS0csUUFBTCxDQUFjLEVBQUNYLGFBQWFRLFFBQWQsRUFBZDtBQUNELE9BTkQ7QUFPQTs7OzZCQUVRO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDQSx1Q0FEQTtBQUVDLDRCQUFDLFlBQUQsSUFBYyxhQUFlLEtBQUtULEtBQUwsQ0FBV0MsV0FBeEMsR0FGRDtBQUdBLHVDQUhBO0FBSUMsNEJBQUMsY0FBRCxJQUFnQixTQUFXLEtBQUtDLE9BQWhDO0FBSkQsT0FERjtBQVFBOzs7NEJBR09XLE8sRUFBUztBQUNoQk4sY0FBUUMsR0FBUixDQUFZLHdCQUFaOztBQUVEZCxRQUFFb0IsSUFBRixDQUFPLFNBQVAsRUFBa0JELE9BQWxCLEVBQTJCLFVBQUNQLElBQUQsRUFBVTtBQUNsQ0MsZ0JBQVFDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q0YsSUFBeEM7QUFDQSxPQUZILEVBSGlCLENBS2I7QUFDSDs7OztFQTFDdUJmLE1BQU13QixTOztBQThDaENDLE9BQU9DLE9BQVAsR0FBaUJuQixXQUFqQiIsImZpbGUiOiJHcm9jZXJ5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBNYW5pcHVsYXRlTGlzdCA9IHJlcXVpcmUoJy4vTWFuaXB1bGF0ZUxpc3QuanMnKTtcbnZhciBJdGVtUm93ID0gcmVxdWlyZSgnLi9JdGVtUm93LmpzJyk7XG52YXIgR3JvY2VyeVRhYmxlID0gcmVxdWlyZSgnLi9Hcm9jZXJ5VGFibGUuanMnKTtcblxuY2xhc3MgR3JvY2VyeUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHQgIHN1cGVyKHByb3BzKSxcblx0ICB0aGlzLnN0YXRlID0ge1xuXHQgIFx0bGlzdE9mSXRlbXMgOiBbXVxuXHQgIH1cblx0ICBcdHRoaXMuYWRkSXRlbSA9IHRoaXMuYWRkSXRlbS5iaW5kKHRoaXMpO1xuXHQgIFx0dGhpcy5nZXRSZXF1ZXN0ID0gdGhpcy5nZXRSZXF1ZXN0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcbiBcdFx0dGhpcy5nZXRSZXF1ZXN0KCk7XG4gIH1cblxuICBnZXRSZXF1ZXN0ICgpIHtcbiAgXHQkLmdldChcIi9pdGVtZGJcIiwoZGF0YSkgPT4ge1xuICAgXHQgY29uc29sZS5sb2coJ2dldCByZXF1ZXN0IHN1Y2Nlc3MhJyk7XG4gICBcdCB2YXIgdGVtcExpc3QgPSB0aGlzLnN0YXRlLmxpc3RPZkl0ZW1zLnNsaWNlKCk7XG4gICBcdCB0ZW1wTGlzdC5wdXNoKGRhdGEpO1xuICAgXHQgY29uc29sZS5sb2codGVtcExpc3QsICd0ZW1wTGlzdCcpO1xuICAgICB0aGlzLnNldFN0YXRlKHtsaXN0T2ZJdGVtczogdGVtcExpc3R9KTtcbiAgIH0pXG4gIH1cblxuXHRyZW5kZXIgKCkge1xuICBcdHJldHVybihcbiAgXHRcdFx0PGRpdj5cbiAgXHRcdFx0PGhyIC8+XG4gIFx0XHRcdFx0PEdyb2NlcnlUYWJsZSBsaXN0T2ZJdGVtcyA9IHt0aGlzLnN0YXRlLmxpc3RPZkl0ZW1zfSAvPlxuICBcdFx0XHQ8aHIgLz5cbiAgXHRcdFx0XHQ8TWFuaXB1bGF0ZUxpc3QgYWRkSXRlbSA9IHt0aGlzLmFkZEl0ZW19IC8+XG4gIFx0XHRcdDwvZGl2PlxuICBcdFx0KVxuICB9XG5cblxuICBhZGRJdGVtKGdyb2NlcnkpIHtcbiAgXHRjb25zb2xlLmxvZygnYXR0ZW1wdGluZyB0byBhZGQgSXRlbScpO1xuXG4gICQucG9zdCgnL2l0ZW1kYicsIGdyb2NlcnksIChkYXRhKSA9PiB7XG4gICAgXHRjb25zb2xlLmxvZygnc2VuZGluZyBkYXRhIHRvIGJlIGFkZGVkJywgZGF0YSk7XG4gICAgfSkvLy50aGVuKCAoKSA9PiB7Y29uc29sZS5sb2coJ2l0IGlzIGNoYWluaW5nJyl9KVxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm9jZXJ5TGlzdDtcbiJdfQ==