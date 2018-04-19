"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reduxConnect=require("rufUtils/redux-connect"),_reduxConnect2=_interopRequireDefault(_reduxConnect),_http=require("rufUtils/http"),_http2=_interopRequireDefault(_http),_showModal=require("rufUtils/showModal"),_showModal2=_interopRequireDefault(_showModal),_DMForm=require("rufUtils/DMForm"),_DMForm2=_interopRequireDefault(_DMForm),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_customUserDetails=require("resources/assets/react-app/uiHooks/customUserDetails"),_customUserDetails2=_interopRequireDefault(_customUserDetails),UserDetails=function(e){function t(e,r){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return s.store=s.context.store,s}return _inherits(t,e),_createClass(t,[{key:"saveProfile",value:function(e){var t=this;return _http2.default.put("/data/settings",{settings:e}).then(function(r){if(r.user&&r.user.id){var s=e.email;t.props.user.email!=s?modal("Saved","A verification email has been sent to "+s+". Your email will not be changed until you click on the verification in the email."):t.store.dispatch({type:"TOASTR",message:["Your settings have been saved.","Success",{timeOut:5e3}]}),t.store.dispatch({type:"STORE_USER",user:e.user})}})}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(_DMForm2.default,{form:{fields:[{name:"first_name",label:"First name",inputType:"text",dataType:"string",errorMessage:"You must enter a first name",helpMessage:"",required:!0,value:this.props.user.first_name},{name:"last_name",label:"Last name",inputType:"text",dataType:"string",errorMessage:"You must enter a last name",helpMessage:"",required:!0,value:this.props.user.last_name},{name:"email",label:"Email address",inputType:"email",dataType:"string",errorMessage:"You must enter a valid email address",helpMessage:"",required:!0,value:this.props.user.email}],button:{text:"Save",class:"btn-primary",position:"left"},submit:this.saveProfile.bind(this)}}),_react2.default.createElement(_customUserDetails2.default,null))}}]),t}(_react2.default.Component);UserDetails.contextTypes={store:_propTypes2.default.object},module.exports=(0,_reduxConnect2.default)(UserDetails,{user:"user",toastr:"toastr"});