'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var ManipulateList = function (_React$Component) {
  _inherits(ManipulateList, _React$Component);

  function ManipulateList(props) {
    _classCallCheck(this, ManipulateList);

    var _this = _possibleConstructorReturn(this, (ManipulateList.__proto__ || Object.getPrototypeOf(ManipulateList)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ManipulateList, [{
    key: 'render',
    value: function render() {
      console.log('can ManipulateList');

      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { name: 'itemAddition' },
          React.createElement('input', { type: 'text', name: 'itemName', placeholder: '' }),
          React.createElement('input', { type: 'number', name: 'quantity', placeholder: '1' }),
          React.createElement('input', { type: 'text', name: 'purpose', placeholder: 'general' }),
          React.createElement(
            'button',
            { onClick: this.handleSubmit },
            'Add Grocery'
          )
        )
      );
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var entry = document.forms.itemAddition;
      this.props.addItem({ itemName: entry.itemName.value, quantity: entry.quantity.value, purpose: entry.purpose.value });

      entry.itemName.value = "";
      entry.quantity.value = 0;
      entry.quantity.purpose = "";
    }
  }]);

  return ManipulateList;
}(React.Component);

module.exports = ManipulateList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL01hbmlwdWxhdGVMaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiTWFuaXB1bGF0ZUxpc3QiLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW50cnkiLCJkb2N1bWVudCIsImZvcm1zIiwiaXRlbUFkZGl0aW9uIiwiYWRkSXRlbSIsIml0ZW1OYW1lIiwidmFsdWUiLCJxdWFudGl0eSIsInB1cnBvc2UiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJQyxXQUFXRCxRQUFRLFdBQVIsQ0FBZjs7SUFJTUUsYzs7O0FBQ0wsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWkEsS0FEWTs7QUFFbEIsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUZrQjtBQUdsQjs7Ozs2QkFDVztBQUNUQyxjQUFRQyxHQUFSLENBQVksb0JBQVo7O0FBRUQsYUFDQztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsWUFBTSxNQUFLLGNBQVg7QUFDQyx5Q0FBTyxNQUFPLE1BQWQsRUFBcUIsTUFBSyxVQUExQixFQUFxQyxhQUFZLEVBQWpELEdBREQ7QUFFQyx5Q0FBTyxNQUFPLFFBQWQsRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxhQUFZLEdBQW5ELEdBRkQ7QUFHQyx5Q0FBTyxNQUFPLE1BQWQsRUFBcUIsTUFBTyxTQUE1QixFQUFzQyxhQUFZLFNBQWxELEdBSEQ7QUFJQztBQUFBO0FBQUEsY0FBUSxTQUFXLEtBQUtILFlBQXhCO0FBQUE7QUFBQTtBQUpEO0FBREEsT0FERDtBQVVBOzs7aUNBRVlJLEMsRUFBRztBQUNmQSxRQUFFQyxjQUFGO0FBQ0EsVUFBSUMsUUFBUUMsU0FBU0MsS0FBVCxDQUFlQyxZQUEzQjtBQUNBLFdBQUtWLEtBQUwsQ0FBV1csT0FBWCxDQUFtQixFQUFDQyxVQUFVTCxNQUFNSyxRQUFOLENBQWVDLEtBQTFCLEVBQWlDQyxVQUFVUCxNQUFNTyxRQUFOLENBQWVELEtBQTFELEVBQWlFRSxTQUFTUixNQUFNUSxPQUFOLENBQWNGLEtBQXhGLEVBQW5COztBQUVBTixZQUFNSyxRQUFOLENBQWVDLEtBQWYsR0FBdUIsRUFBdkI7QUFDQU4sWUFBTU8sUUFBTixDQUFlRCxLQUFmLEdBQXVCLENBQXZCO0FBQ0FOLFlBQU1PLFFBQU4sQ0FBZUMsT0FBZixHQUF5QixFQUF6QjtBQUNBOzs7O0VBNUIwQm5CLE1BQU1vQixTOztBQWdDbkNDLE9BQU9DLE9BQVAsR0FBaUJuQixjQUFqQiIsImZpbGUiOiJNYW5pcHVsYXRlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxuXG5cbmNsYXNzIE1hbmlwdWxhdGVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXHR9XG4gICByZW5kZXIgKCkge1xuICAgIGNvbnNvbGUubG9nKCdjYW4gTWFuaXB1bGF0ZUxpc3QnKTtcbiAgICBcbiAgXHRyZXR1cm4gKFxuICBcdFx0PGRpdj5cbiAgXHRcdDxmb3JtIG5hbWU9XCJpdGVtQWRkaXRpb25cIj5cbiAgXHRcdFx0PGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lPVwiaXRlbU5hbWVcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gIFx0XHRcdDxpbnB1dCB0eXBlID0gXCJudW1iZXJcIiBuYW1lPVwicXVhbnRpdHlcIiBwbGFjZWhvbGRlcj1cIjFcIiAvPlxuICBcdFx0XHQ8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInB1cnBvc2VcIiBwbGFjZWhvbGRlcj1cImdlbmVyYWxcIiAvPlxuICBcdFx0XHQ8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTdWJtaXR9PkFkZCBHcm9jZXJ5PC9idXR0b24+XG4gIFx0XHRcdDwvZm9ybT5cbiAgXHRcdDwvZGl2PlxuICBcdClcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcdHZhciBlbnRyeSA9IGRvY3VtZW50LmZvcm1zLml0ZW1BZGRpdGlvbjtcbiAgXHR0aGlzLnByb3BzLmFkZEl0ZW0oe2l0ZW1OYW1lOiBlbnRyeS5pdGVtTmFtZS52YWx1ZSwgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LnZhbHVlLCBwdXJwb3NlOiBlbnRyeS5wdXJwb3NlLnZhbHVlfSk7XG5cbiAgXHRlbnRyeS5pdGVtTmFtZS52YWx1ZSA9IFwiXCI7XG4gIFx0ZW50cnkucXVhbnRpdHkudmFsdWUgPSAwO1xuICBcdGVudHJ5LnF1YW50aXR5LnB1cnBvc2UgPSBcIlwiO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYW5pcHVsYXRlTGlzdDsiXX0=