"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_image=require("rufUtils/image"),_image2=_interopRequireDefault(_image),_fontAwesome=require("font-awesome/css/font-awesome.css"),_fontAwesome2=_interopRequireDefault(_fontAwesome),TeamMembers=function(e){function t(e,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return _inherits(t,e),_createClass(t,[{key:"deleteUser",value:function(e){this.props.deleteUser(e)}},{key:"render",value:function(){var e=this,t=this.props.members;return _react2.default.createElement("tbody",null,_react2.default.createElement("tr",null,_react2.default.createElement("td",{colSpan:"5"},_react2.default.createElement("h5",{className:"card-title"},this.props.type," users"))),Object.keys(t).map(function(r){var a=t[r];return _react2.default.createElement("tr",{key:r},_react2.default.createElement("td",null,a.image&&_react2.default.createElement("img",{src:(0,_image2.default)(a.image,50)})),_react2.default.createElement("td",null,a.first_name),_react2.default.createElement("td",null,a.email||a.last_name),_react2.default.createElement("td",null,255==a.role&&_react2.default.createElement("i",{className:"fa fa-star",style:{color:"#FFD700"},"aria-hidden":"true"})),e.props.owner==a.uid?_react2.default.createElement("td",null):_react2.default.createElement("td",{onClick:e.deleteUser.bind(e,r)},_react2.default.createElement("i",{className:"fa fa-remove fa-2x","aria-hidden":"true"})))}))}}]),t}(_react2.default.Component);module.exports=TeamMembers;