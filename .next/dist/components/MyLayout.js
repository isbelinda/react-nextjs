'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ddd'
};

var Layout = function Layout(props) {
    return _react2.default.createElement('div', { style: layoutStyle }, _react2.default.createElement(_Header2.default, null), props.children);
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNO1lBQWMsQUFDUixBQUNSO2FBRmdCLEFBRVAsQUFDVDtZQUhKLEFBQW9CLEFBR1I7QUFIUSxBQUNoQjs7QUFLSixJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7V0FDWCxnQkFBQSxjQUFBLFNBQUssT0FBTCxBQUFZLEFBQ1IsK0RBREosQUFFTSxhQUhLLEFBQ1gsQUFFWTtBQUhoQjs7a0JBT2UsQSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvQmVsaW5kYS93b3Jrc3BhY2UvcmVhY3QtbWFwIn0=