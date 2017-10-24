'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var PostLink = function PostLink(props) {
    return _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?title=' + props.title }, _react2.default.createElement('a', null, props.title)));
};

var Index = function Index(props) {
    return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', null, 'Batman TV Show'), _react2.default.createElement('ul', null, props.shows.map(function (_ref) {
        var show = _ref.show;
        return _react2.default.createElement('li', { key: show.id }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id }, _react2.default.createElement('a', null, show.name)));
    })));
};

Index.getInitialProps = async function () {
    var res = await (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');
    var data = await res.json();
    return {
        shows: data
    };
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RMaW5rIiwicHJvcHMiLCJpZCIsInRpdGxlIiwiSW5kZXgiLCJzaG93cyIsIm1hcCIsInNob3ciLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sV0FBVyxTQUFYLEFBQVcsZ0JBQUE7V0FDYixnQkFBQSxjQUFBLE1BQ0ksc0JBQUEscUJBQUEsV0FBTSxZQUFVLE1BQWhCLEFBQXNCLElBQU0sdUJBQXFCLE1BQWpELEFBQXVELEFBQ25ELHlCQUFBLGNBQUEsS0FBSSxZQUhDLEFBQ2IsQUFDSSxBQUNJLEFBQVU7QUFIdEI7O0FBUUEsSUFBTSxRQUFRLFNBQVIsQUFBUSxhQUFTLEFBQ25COzJCQUNJLHlCQUFBLFNBQ0ksc0JBQUEsY0FBQSxNQUFBLE1BREosQUFDSSxBQUNBLG1DQUFBLGNBQUEsTUFFUSxZQUFBLEFBQU0sTUFBTixBQUFZLElBQUksZ0JBQUE7WUFBQSxBQUFFLFlBQUYsQUFBRTtlQUNkLGdCQUFBLGNBQUEsUUFBSSxLQUFLLEtBQVQsQUFBYyxBQUNWLHNCQUFBLHFCQUFBLFdBQU0sWUFBVSxLQUFoQixBQUFxQixJQUFNLG9CQUFrQixLQUE3QyxBQUFrRCxBQUM5QyxzQkFBQSxjQUFBLEtBQUksV0FIQSxBQUNaLEFBQ0ksQUFDSSxBQUFTO0FBUnJDLEFBQ0ksQUFFSSxBQUVRLEFBV25CLE9BZk87QUFGUjs7QUFtQkEsTUFBQSxBQUFNLGtCQUFrQixrQkFBaUIsQUFDckM7UUFBTSxNQUFNLE1BQU0saUNBQWxCLEFBQWtCLEFBQU0sQUFDeEI7UUFBTSxPQUFPLE1BQU0sSUFBbkIsQUFBbUIsQUFBSSxBQUN2Qjs7ZUFBQSxBQUFPLEFBQ0ksQUFFZDtBQUhVLEFBQ0g7QUFKUjs7a0JBUWUsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvQmVsaW5kYS93b3Jrc3BhY2UvcmVhY3QtbWFwIn0=