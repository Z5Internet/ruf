"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactRouter=require("react-router"),_reduxConnect=require("rufUtils/redux-connect"),_reduxConnect2=_interopRequireDefault(_reduxConnect),_reactstrap=require("reactstrap"),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_http=require("../utils/http"),_http2=_interopRequireDefault(_http),_RightDropDownExtended=require("../../../../../../../../../resources/assets/react-app/components/RightDropDownExtended"),_RightDropDownExtended2=_interopRequireDefault(_RightDropDownExtended),_fontAwesome=require("font-awesome/css/font-awesome.css"),_fontAwesome2=_interopRequireDefault(_fontAwesome),RightDropDown=function(e){function t(e){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return _inherits(t,e),_createClass(t,[{key:"switchTeam",value:function(e,t){t.preventDefault(),window.reduxStore.dispatch({type:"STORE_USER",user:{currentTeam:{id:e}}})}},{key:"render",value:function(){var e=window.reduxStore.getState(),t=this;return _react2.default.createElement(_reactstrap.DropdownMenu,{right:!0},this.props.links.map(function(e){return _react2.default.createElement("span",{key:e.heading},_react2.default.createElement(_reactstrap.DropdownItem,{header:!0},e.heading),e.items.map(function(e){return _react2.default.createElement(_reactstrap.DropdownItem,{key:e.url},_react2.default.createElement(_reactRouter.Link,{to:e.url},e.link))}),_react2.default.createElement(_reactstrap.DropdownItem,{divider:!0}))}),e.website.multiAccounts?_react2.default.createElement("div",null,_react2.default.createElement(_reactstrap.DropdownItem,{header:!0},e.website.multiAccounts.pluralLabel),_react2.default.createElement(_reactstrap.DropdownItem,null,_react2.default.createElement(_reactRouter.Link,{to:"/settings/multiAccounts"},_react2.default.createElement("i",{className:"fa fa-fw fa-btn fa-plus"})," Add ",e.website.multiAccounts.label)),Object.keys(e.user.multiAccounts).length>1&&Object.keys(e.user.multiAccounts).map(function(r){var a=e.user.multiAccounts[r];return _react2.default.createElement(_reactstrap.DropdownItem,{key:"teamr"+a.id},_react2.default.createElement("a",{href:"#",onClick:t.switchTeam.bind(t,a.id)},_react2.default.createElement("i",{className:(0,_classnames2.default)("fa fa-fw fa-btn",a.id==e.user.currentTeam.id?"fa-check":"")})," ",e.user.multiAccounts[r].name))}),_react2.default.createElement(_reactstrap.DropdownItem,{divider:!0})):"",_react2.default.createElement(_reactstrap.DropdownItem,{header:!0},"Settings"),_react2.default.createElement(_reactstrap.DropdownItem,null,_react2.default.createElement(_reactRouter.Link,{to:"/settings"},_react2.default.createElement("i",{className:"fa fa-fw fa-btn fa-cog"}),"Your Settings")),_react2.default.createElement(_reactstrap.DropdownItem,{divider:!0}),_react2.default.createElement(_reactstrap.DropdownItem,{header:!0},"Support"),_react2.default.createElement(_reactstrap.DropdownItem,null,_react2.default.createElement("a",{style:{cursor:"pointer"}},_react2.default.createElement("i",{className:"fa fa-fw fa-btn fa-paper-plane"}),"Email Us")),_RightDropDownExtended2.default,_react2.default.createElement(_reactstrap.DropdownItem,null,_react2.default.createElement("a",{href:"/logout"},_react2.default.createElement("i",{className:"fa fa-fw fa-btn fa-sign-out"}),"Logout")))}}]),t}(_react.Component);module.exports=(0,_reduxConnect2.default)(RightDropDown,{user:"user",website:"website"});