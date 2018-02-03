"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactRedux=require("react-redux"),_reactRouterDom=require("react-router-dom"),_reactstrap=require("reactstrap"),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_ProfilePic=require("./ProfilePic"),_ProfilePic2=_interopRequireDefault(_ProfilePic),_UserDetails=require("./UserDetails"),_UserDetails2=_interopRequireDefault(_UserDetails),_Security=require("./Security"),_Security2=_interopRequireDefault(_Security),_ChangeEmail=require("./ChangeEmail"),_ChangeEmail2=_interopRequireDefault(_ChangeEmail),_Teams=require("./Teams/Teams"),_Teams2=_interopRequireDefault(_Teams),_reduxConnect=require("rufUtils/redux-connect"),_reduxConnect2=_interopRequireDefault(_reduxConnect),_customSettings=require("../../../../../../../../../../../resources/assets/react-app/uiHooks/customSettings"),_customSettings2=_interopRequireDefault(_customSettings),Settings=function(e){function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={tab:0,isOpen:!1},r.tabs=[{title:"Your details",url:"",component:_react2.default.createElement(_UserDetails2.default,null),text:"If you need to update your account details, you can do that here."},{title:"Security",url:"security",component:_react2.default.createElement(_Security2.default,null),text:"If you want to change your password, please enter your existing password and the new password you would like to use."},{title:"Profile picture",url:"profile",component:_react2.default.createElement(_ProfilePic2.default,null),text:"Here you can upload a profile photo to your account"},{title:"Verify Email",url:"changeEmail",dontShow:!0,component:_react2.default.createElement(_ChangeEmail2.default,{location:r.props.location})}];var a="./ruf-tag/src/resources/assets/js/src/app/Auth/TagSettings/components/TagSettings",n=require.context("../../../../../../../../../",!0,/^\.\/ruf\-tag\/src\/resources\/assets\/js\/src\/app\/Auth\/TagSettings\/components\/TagSettings/);if(n.keys().indexOf(a)>=0){var s=n(a);r.tabs=r.tabs.concat({title:"Tags",url:"tags",component:_react2.default.createElement(s,null)})}r.props.website.multiAccounts&&r.tabs.push({title:r.props.website.multiAccounts.pluralLabel,url:"multiAccounts",component:_react2.default.createElement(_Teams2.default,null)}),r.tabs=r.tabs.concat(_customSettings2.default);var o=r.props.location.pathname.split("/")[2];for(var u in r.tabs)o==r.tabs[u].url&&(r.state.tab=parseInt(u));return r}return _inherits(t,e),_createClass(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.location.pathname.replace(/\/settings\/?/,"");for(var r in this.tabs)t==this.tabs[r].url&&this.setState({tab:parseInt(r)})}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"container"},_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-12 mb-3 mx-auto"},_react2.default.createElement("h3",null,"Settings")),this.tabs.map(function(e,t){return e.dontShow?null:_react2.default.createElement("div",{className:"col-12 col-lg-6 mb-3",key:t},_react2.default.createElement("div",{className:"card mx-auto",style:{maxWidth:"500px"}},_react2.default.createElement("div",{className:"card-header"},e.title),_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("div",{className:"card-text mb-2",style:{minHeight:"136px",padding:"2rem 1rem",backgroundColor:"#e9ecef"}},e.text),_react2.default.createElement("div",{className:"card-text"},e.component))))})))}}]),t}(_react2.default.Component);module.exports=(0,_reactRouterDom.withRouter)((0,_reduxConnect2.default)(Settings,{website:"website"}));