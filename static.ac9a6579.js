(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _semanticUiReact.Responsive,
        _extends({}, _semanticUiReact.Responsive.onlyComputer, { style: { flex: 1 } }),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { inverted: true, vertical: true, style: { padding: '5em 0em', backgroundColor: '#2A2A2A' } },
          _react2.default.createElement(
            _semanticUiReact.Container,
            null,
            _react2.default.createElement(
              _semanticUiReact.Grid,
              { divided: true, inverted: true, stackable: true },
              _react2.default.createElement(
                _semanticUiReact.Grid.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 4 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'ABOUT SOLITRADE' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      null,
                      'We support customers around the world by offering a robust portfolio of the highest quality building products.'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 4 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'SITE MAP' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { link: true, inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/about' },
                      'About Us'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/products' },
                      'Products'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/community' },
                      'Our Community'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/contact' },
                      'Contact'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 4 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'PRODUCTS' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { link: true, inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/products' },
                      'Thermal and Accoustical Insulation'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/products' },
                      'Waterproofing Coatings and Systems'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/products' },
                      'Glass and other products'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 4 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'CONTACT' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'phone' }),
                      '+1-864-498-8691'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'mail' }),
                      'info@solitrade.com'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'point' }),
                      'CHARLOTTE, SC 28203 (USA)'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { color: 'black', inverted: true, vertical: true, style: { padding: '2em 0em' } },
          _react2.default.createElement(
            _semanticUiReact.Container,
            { textAlign: 'center' },
            'Copyright \xA9 2018 Solitrade Group. All Rights Reserved.'
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

var MobileFooter = function (_Component2) {
  _inherits(MobileFooter, _Component2);

  function MobileFooter() {
    _classCallCheck(this, MobileFooter);

    return _possibleConstructorReturn(this, (MobileFooter.__proto__ || Object.getPrototypeOf(MobileFooter)).apply(this, arguments));
  }

  _createClass(MobileFooter, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _semanticUiReact.Responsive,
        _semanticUiReact.Responsive.onlyMobile,
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { inverted: true, vertical: true, style: { padding: '3em 0em', backgroundColor: '#2A2A2A' } },
          _react2.default.createElement(
            _semanticUiReact.Container,
            null,
            _react2.default.createElement(
              _semanticUiReact.Grid,
              { divided: true, inverted: true },
              _react2.default.createElement(
                _semanticUiReact.Grid.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 8 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'ABOUT SOLITRADE' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      null,
                      'We support customers around the world by offering a robust portfolio of the highest quality building products.'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 8 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'SITE MAP' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { link: true, inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/about' },
                      'About Us'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/products' },
                      'Products'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/community' },
                      'Our Community'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/contact' },
                      'Contact'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 8 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'PRODUCTS' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { link: true, inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/products' },
                      'Thermal and Accoustical Insulation'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/products' },
                      'Waterproofing Coatings and Systems'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a', href: '/products' },
                      'Glass and other products'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 8 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'CONTACT' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'phone' }),
                      '+1-864-498-8691'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'mail' }),
                      'info@solitrade.com'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: 'point' }),
                      'CHARLOTTE, SC 28203 (USA)'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { color: 'black', inverted: true, vertical: true, style: { padding: '2em 0em' } },
          _react2.default.createElement(
            _semanticUiReact.Container,
            { textAlign: 'center' },
            'Copyright \xA9 2018 Solitrade Group. All Rights Reserved.'
          )
        )
      );
    }
  }]);

  return MobileFooter;
}(_react.Component);

var ResponsiveFooter = function ResponsiveFooter(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      Footer,
      null,
      children
    ),
    _react2.default.createElement(
      MobileFooter,
      null,
      children
    )
  );
};

exports.default = ResponsiveFooter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _simple_logo = __webpack_require__(9);

var _simple_logo2 = _interopRequireDefault(_simple_logo);

var _name = __webpack_require__(32);

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesktopContainer = function (_Component) {
  _inherits(DesktopContainer, _Component);

  function DesktopContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DesktopContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DesktopContainer.__proto__ || Object.getPrototypeOf(DesktopContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.hideFixedMenu = function () {
      return _this.setState({ fixed: false });
    }, _this.showFixedMenu = function () {
      return _this.setState({ fixed: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DesktopContainer, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var fixed = this.state.fixed;


      return _react2.default.createElement(
        _semanticUiReact.Responsive,
        _semanticUiReact.Responsive.onlyComputer,
        _react2.default.createElement(
          _semanticUiReact.Visibility,
          {
            once: false,
            onBottomPassed: this.showFixedMenu,
            onBottomPassedReverse: this.hideFixedMenu
          },
          _react2.default.createElement(
            _semanticUiReact.Segment,
            {
              textAlign: 'center',
              style: { padding: '0em 0em' },
              vertical: true,
              inverted: true
            },
            _react2.default.createElement(
              _semanticUiReact.Menu,
              {
                fixed: fixed ? 'top' : null,
                inverted: !fixed
                // pointing={!fixed}
                // secondary={!fixed}
                , size: 'large'
              },
              _react2.default.createElement(
                _semanticUiReact.Container,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: 'https://www.linkedin.com/company/solitrade-group' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { href: 'https://www.linkedin.com/company/solitrade-group' },
                    ' ',
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'linkedin in' })
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: '/' },
                  'HOME'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: '/about' },
                  'ABOUT US'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: '/products' },
                  'PRODUCTS'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Dropdown,
                  { text: 'OUR COMMUNITY', pointing: true, className: 'link item' },
                  _react2.default.createElement(
                    _semanticUiReact.Dropdown.Menu,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Dropdown.Item,
                      { href: '/community' },
                      'US'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Dropdown.Item,
                      { href: '/events' },
                      'EVENTS'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: '/contact' },
                  'CONTACT US'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { position: 'right' },
                  _react2.default.createElement(
                    _semanticUiReact.Button,
                    { as: 'a', href: 'http://sales.solitrade.com' },
                    'Log in'
                  )
                )
              )
            )
          )
        ),
        children
      );
    }
  }]);

  return DesktopContainer;
}(_react.Component);

DesktopContainer.propTypes = {
  children: _propTypes2.default.node
};

var MobileContainer = function (_Component2) {
  _inherits(MobileContainer, _Component2);

  function MobileContainer() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, MobileContainer);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = MobileContainer.__proto__ || Object.getPrototypeOf(MobileContainer)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {}, _this2.handlePusherClick = function () {
      var sidebarOpened = _this2.state.sidebarOpened;


      if (sidebarOpened) _this2.setState({ sidebarOpened: false });
    }, _this2.handleToggle = function () {
      return _this2.setState({ sidebarOpened: !_this2.state.sidebarOpened });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(MobileContainer, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var sidebarOpened = this.state.sidebarOpened;


      return _react2.default.createElement(
        _semanticUiReact.Responsive,
        _semanticUiReact.Responsive.onlyMobile,
        _react2.default.createElement(
          _semanticUiReact.Sidebar.Pushable,
          null,
          _react2.default.createElement(
            _semanticUiReact.Sidebar,
            { as: _semanticUiReact.Menu, animation: 'uncover', inverted: true, vertical: true, visible: sidebarOpened },
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/' },
              'HOME'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/about' },
              'ABOUT US'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/products' },
              'PRODUCTS'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/community' },
              'US'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/events' },
              'EVENTS'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/contact' },
              'CONTACT US'
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Sidebar.Pusher,
            {
              dimmed: sidebarOpened,
              onClick: this.handlePusherClick,
              style: { minHeight: '100vh' }
            },
            _react2.default.createElement(
              _semanticUiReact.Segment,
              {
                inverted: true,
                textAlign: 'center',
                style: { padding: '0em 0em' },
                vertical: true,
                basic: true
              },
              _react2.default.createElement(
                _semanticUiReact.Menu,
                { inverted: true, secondary: true, size: 'large' },
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { onClick: this.handleToggle },
                  _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar', size: 'large' })
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { position: 'right' },
                  _react2.default.createElement(_semanticUiReact.Image, { src: _name2.default, size: 'small' })
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { position: 'right' },
                  _react2.default.createElement(_semanticUiReact.Image, { src: _simple_logo2.default, size: 'mini' })
                )
              )
            ),
            children
          )
        )
      );
    }
  }]);

  return MobileContainer;
}(_react.Component);

MobileContainer.propTypes = {
  children: _propTypes2.default.node
};

var ResponsiveContainer = function ResponsiveContainer(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      DesktopContainer,
      null,
      children
    ),
    _react2.default.createElement(
      MobileContainer,
      null,
      children
    )
  );
};

ResponsiveContainer.propTypes = {
  children: _propTypes2.default.node
};

exports.default = ResponsiveContainer;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _reactStatic = __webpack_require__(5);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

var _logo = __webpack_require__(30);

var _logo2 = _interopRequireDefault(_logo);

var _simple_logo = __webpack_require__(9);

var _simple_logo2 = _interopRequireDefault(_simple_logo);

var _backb = __webpack_require__(31);

var _backb2 = _interopRequireDefault(_backb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomepageHeading = function HomepageHeading(_ref) {
  var mobile = _ref.mobile;
  return _react2.default.createElement(
    _semanticUiReact.Container,
    { text: true },
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_semanticUiReact.Image, { centered: true, src: _logo2.default, size: 'large' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _semanticUiReact.Button,
      { primary: true, size: 'big', href: 'about' },
      'MORE INFO'
    ),
    '\xA0',
    _react2.default.createElement(
      _semanticUiReact.Button,
      { primary: true, size: 'big', href: 'contact' },
      'CONTACT US'
    )
  );
};

HomepageHeading.propTypes = {
  mobile: _propTypes2.default.bool

  /* Heads up!
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
   * It can be more complicated, but you can create really flexible markup.
   */
};
var DesktopContainer = function (_Component) {
  _inherits(DesktopContainer, _Component);

  function DesktopContainer() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, DesktopContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = DesktopContainer.__proto__ || Object.getPrototypeOf(DesktopContainer)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {}, _this.hideFixedMenu = function () {
      return _this.setState({ fixed: false });
    }, _this.showFixedMenu = function () {
      return _this.setState({ fixed: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DesktopContainer, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var fixed = this.state.fixed;


      return _react2.default.createElement(
        _semanticUiReact.Responsive,
        _semanticUiReact.Responsive.onlyComputer,
        _react2.default.createElement(
          _semanticUiReact.Visibility,
          {
            once: false,
            onBottomPassed: this.showFixedMenu,
            onBottomPassedReverse: this.hideFixedMenu
          },
          _react2.default.createElement(
            _semanticUiReact.Segment,
            {
              textAlign: 'center',
              style: { minHeight: 600, padding: '0em 0em', backgroundImage: 'url(' + _backb2.default + ')', backgroundSize: 'cover', backgroundPosition: 'center' },
              vertical: true
            },
            _react2.default.createElement(
              _semanticUiReact.Menu,
              {
                fixed: fixed ? 'top' : null,
                inverted: !fixed
                // pointing={!fixed}
                // secondary={!fixed}
                , size: 'large'
              },
              _react2.default.createElement(
                _semanticUiReact.Container,
                { style: {} },
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: 'https://www.linkedin.com/company/solitrade-group' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { href: 'https://www.linkedin.com/company/solitrade-group' },
                    ' ',
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'linkedin in' })
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: '/' },
                  'HOME'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: '/about' },
                  'ABOUT US'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: '/products' },
                  'PRODUCTS'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Dropdown,
                  { text: 'OUR COMMUNITY', pointing: true, className: 'link item' },
                  _react2.default.createElement(
                    _semanticUiReact.Dropdown.Menu,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Dropdown.Item,
                      { href: '/community' },
                      'US'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Dropdown.Item,
                      { href: '/events' },
                      'EVENTS'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', href: '/contact' },
                  'CONTACT US'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { position: 'right' },
                  _react2.default.createElement(
                    _semanticUiReact.Button,
                    { as: 'a', href: 'http://sales.solitrade.com' },
                    'Log in'
                  )
                )
              )
            ),
            _react2.default.createElement(HomepageHeading, null)
          )
        ),
        children
      );
    }
  }]);

  return DesktopContainer;
}(_react.Component);

DesktopContainer.propTypes = {
  children: _propTypes2.default.node
};

var MobileContainer = function (_Component2) {
  _inherits(MobileContainer, _Component2);

  function MobileContainer() {
    var _ref3;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, MobileContainer);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref3 = MobileContainer.__proto__ || Object.getPrototypeOf(MobileContainer)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {}, _this2.handlePusherClick = function () {
      var sidebarOpened = _this2.state.sidebarOpened;


      if (sidebarOpened) _this2.setState({ sidebarOpened: false });
    }, _this2.handleToggle = function () {
      return _this2.setState({ sidebarOpened: !_this2.state.sidebarOpened });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(MobileContainer, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var sidebarOpened = this.state.sidebarOpened;


      return _react2.default.createElement(
        _semanticUiReact.Responsive,
        _semanticUiReact.Responsive.onlyMobile,
        _react2.default.createElement(
          _semanticUiReact.Sidebar.Pushable,
          null,
          _react2.default.createElement(
            _semanticUiReact.Sidebar,
            { as: _semanticUiReact.Menu, animation: 'uncover', inverted: true, vertical: true, visible: sidebarOpened },
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/' },
              'HOME'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/about' },
              'ABOUT US'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/products' },
              'PRODUCTS'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/community' },
              'US'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/events' },
              'EVENTS'
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { as: 'a', href: '/contact' },
              'CONTACT US'
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Sidebar.Pusher,
            {
              dimmed: sidebarOpened,
              onClick: this.handlePusherClick,
              style: { minHeight: '100vh' }
            },
            _react2.default.createElement(
              _semanticUiReact.Segment,
              {
                inverted: true,
                textAlign: 'center',
                style: { minHeight: 500, padding: '0em 0em', backgroundImage: 'url(' + _backb2.default + ')', backgroundSize: 'cover', backgroundPosition: 'center' }
                // style={{ minHeight: 350, padding: '1em 0em' }}
                , vertical: true,
                basic: true
              },
              _react2.default.createElement(
                _semanticUiReact.Menu,
                { inverted: true, pointing: true, size: 'large' },
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { onClick: this.handleToggle },
                  _react2.default.createElement(_semanticUiReact.Icon, { name: 'sidebar', size: 'large' })
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { position: 'right' },
                  _react2.default.createElement(_semanticUiReact.Image, { src: _simple_logo2.default, size: 'mini' })
                )
              ),
              _react2.default.createElement(HomepageHeading, { mobile: true })
            ),
            children
          )
        )
      );
    }
  }]);

  return MobileContainer;
}(_react.Component);

MobileContainer.propTypes = {
  children: _propTypes2.default.node
};

var ResponsiveContainer = function ResponsiveContainer(_ref4) {
  var children = _ref4.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      DesktopContainer,
      null,
      children
    ),
    _react2.default.createElement(
      MobileContainer,
      null,
      children
    )
  );
};

ResponsiveContainer.propTypes = {
  children: _propTypes2.default.node
};

var HomepageLayout = function HomepageLayout() {
  return _react2.default.createElement(
    ResponsiveContainer,
    null,
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { style: { padding: '8em 0em' }, basic: true },
      _react2.default.createElement(
        _semanticUiReact.Grid,
        { container: true, stackable: true, divided: 'vertically' },
        _react2.default.createElement(
          _semanticUiReact.Grid.Row,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 8 },
            _react2.default.createElement(_semanticUiReact.Image, { src: 'http://solitrade.com/images/bullets/InternationalSales.jpg', size: 'medium', floated: 'left' }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'GLOBAL LOGISTICS EXPERTISE'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, { section: true }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h4' },
              'Efficient, secure and reliable delveries.'
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 8 },
            _react2.default.createElement(_semanticUiReact.Image, { src: 'http://solitrade.com/images/bullets/GlobalLogistics.jpg', size: 'medium', floated: 'left' }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'INTERNATIONAL SALES AND MARKETING'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, { section: true }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h4' },
              'Global network of customers and suppliers.'
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Grid.Row,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 8 },
            _react2.default.createElement(_semanticUiReact.Image, { src: 'http://solitrade.com/images/bullets/CustomerService.jpg', size: 'medium', floated: 'left' }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'OUTSTANDING CUSTOMER SERVICE'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, { section: true }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h4' },
              'We focus on our clients complete trust and satisfaction.'
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 8 },
            _react2.default.createElement(_semanticUiReact.Image, { src: 'http://solitrade.com/images/bullets/Valuation.jpg', size: 'medium', floated: 'left' }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'FOREIGN MARKET VALUATION'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, { section: true }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h4' },
              'Positioning products in the right market for success.'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { style: { padding: '8em 0em', backgroundColor: '#666666' }, vertical: true },
      _react2.default.createElement(
        _semanticUiReact.Container,
        { text: true, textAlign: 'center' },
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h2', style: { fontSize: '2em', color: '#FFFFFF' } },
          'WE ARE BUILT'
        ),
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h2', style: { fontSize: '2em', color: '#66BEFA' } },
          'TO HELP YOU BUILD'
        )
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = HomepageLayout;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/simple_logo.3424bf42.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _DesktopContainer = __webpack_require__(4);

var _DesktopContainer2 = _interopRequireDefault(_DesktopContainer);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveContainer = function ResponsiveContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DesktopContainer2.default,
      null,
      children
    )
  );
};

ResponsiveContainer.propTypes = {
  children: _propTypes2.default.node
};

var FormExampleSubcomponentControl = function (_Component) {
  _inherits(FormExampleSubcomponentControl, _Component);

  function FormExampleSubcomponentControl() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, FormExampleSubcomponentControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = FormExampleSubcomponentControl.__proto__ || Object.getPrototypeOf(FormExampleSubcomponentControl)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormExampleSubcomponentControl, [{
    key: 'render',
    value: function render() {
      var value = this.state.value;

      return _react2.default.createElement(
        ResponsiveContainer,
        null,
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '3em 0em' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Container,
            { text: true, textAlign: 'center' },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h1', style: { fontSize: '2em' } },
              'CONTACT US'
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '3% 25%' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Grid,
            { divided: 'vertically' },
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              { columns: 3 },
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { width: 10 },
                _react2.default.createElement(
                  _semanticUiReact.Form,
                  { action: 'http://solitrade.com/sendmail.php' },
                  _react2.default.createElement(
                    _semanticUiReact.Form.Group,
                    { widths: 'equal' },
                    _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, label: 'Name', placeholder: 'Name' }),
                    _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, label: 'Email', placeholder: 'Email' }),
                    _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, label: 'Phone', placeholder: 'Phone' })
                  ),
                  _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, label: 'Subject', placeholder: 'Subject' }),
                  _react2.default.createElement(_semanticUiReact.Form.TextArea, { label: 'About', placeholder: 'Tell us more' }),
                  _react2.default.createElement(
                    _semanticUiReact.Form.Button,
                    null,
                    'Submit'
                  )
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { style: { padding: '0em 5%' }, width: 6 },
                _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', content: 'CONTACT INFO' }),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { style: { padding: '1em 0em' } },
                  _react2.default.createElement(_semanticUiReact.Icon, { name: 'phone', color: 'blue', size: 'big' }),
                  '+1-864-498-8691'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { style: { padding: '1em 0em' } },
                  _react2.default.createElement(_semanticUiReact.Icon, { name: 'mail', color: 'blue', size: 'big' }),
                  'info@solitrade.com'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { style: { padding: '1em 0em' } },
                  _react2.default.createElement(_semanticUiReact.Icon, { name: 'point', color: 'blue', size: 'big' }),
                  'CHARLOTTE, SC 28203 (USA)'
                )
              )
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return FormExampleSubcomponentControl;
}(_react.Component);

exports.default = FormExampleSubcomponentControl;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _DesktopContainer = __webpack_require__(4);

var _DesktopContainer2 = _interopRequireDefault(_DesktopContainer);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponsiveContainer = function ResponsiveContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DesktopContainer2.default,
      null,
      children
    )
  );
};

ResponsiveContainer.propTypes = {
  children: _propTypes2.default.node
};

var PageLayout = function PageLayout() {
  return _react2.default.createElement(
    ResponsiveContainer,
    null,
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { style: { padding: '3% 0%' }, vertical: true },
      _react2.default.createElement(
        _semanticUiReact.Container,
        { text: true, textAlign: 'center' },
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h1', style: { fontSize: '2em' } },
          'PRODUCTS'
        )
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Grid,
      {
        container: true,
        stackable: true,
        divided: 'vertically',
        style: { padding: '3% 0%' }
      },
      _react2.default.createElement(
        _semanticUiReact.Grid.Row,
        null,
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 5 },
          _react2.default.createElement(_semanticUiReact.Image, { src: 'http://solitrade.com/images/products/insulation.png', centered: true, size: 'large' }),
          _react2.default.createElement(
            _semanticUiReact.Segment,
            { basic: true },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'THERMAL AND ACCOUSTICAL INSULTATION'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, null),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h5' },
              'Exclusive sales representative of Knauf Insulation North America products for Latin America.'
            ),
            _react2.default.createElement(
              _semanticUiReact.Grid,
              null,
              _react2.default.createElement(
                _semanticUiReact.Grid.Row,
                { columns: 2 },
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  null,
                  _react2.default.createElement(_semanticUiReact.Image, { centered: true, src: 'http://solitrade.com/images/products/knauf.png', size: 'tiny' })
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  null,
                  _react2.default.createElement(_semanticUiReact.Image, { centered: true, src: 'http://solitrade.com/images/products/logo-silvercote.png', size: 'tiny' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 5 },
          _react2.default.createElement(_semanticUiReact.Image, { src: 'http://solitrade.com/images/products/otherproducts.png', centered: true, size: 'large' }),
          _react2.default.createElement(
            _semanticUiReact.Segment,
            { basic: true },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'WATERPROOFING COATINGS AND SYSTEMS'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, null),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'Distribution of waterproofing products, coatings and acoustical mats. '
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Grid,
            null,
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              { columns: 2 },
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                null,
                _react2.default.createElement(_semanticUiReact.Image, { centered: true, src: 'http://solitrade.com/images/products/insudry.png', size: 'tiny' })
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                null,
                _react2.default.createElement(_semanticUiReact.Image, { centered: true, src: 'http://solitrade.com/images/products/garland.png', size: 'tiny', style: { padding: '0em -30em' } })
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 5 },
          _react2.default.createElement(_semanticUiReact.Image, { src: 'http://solitrade.com/images/products/glass.png', centered: true, size: 'large' }),
          _react2.default.createElement(
            _semanticUiReact.Segment,
            { basic: true },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'GLASS AND OTHER BUILDING MATERIALS'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, null),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'We distribute high quality glass at competitive prices.'
            )
          )
        )
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = PageLayout;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _DesktopContainer = __webpack_require__(4);

var _DesktopContainer2 = _interopRequireDefault(_DesktopContainer);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponsiveContainer = function ResponsiveContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DesktopContainer2.default,
      null,
      children
    )
  );
};

ResponsiveContainer.propTypes = {
  children: _propTypes2.default.node
};

var PageLayout = function PageLayout() {
  return _react2.default.createElement(
    ResponsiveContainer,
    null,
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { style: { padding: '3em 0em' }, vertical: true },
      _react2.default.createElement(
        _semanticUiReact.Container,
        { text: true, textAlign: 'center' },
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h1', style: { fontSize: '2em' } },
          'OUR COMMUNITY'
        )
      )
    ),
    _react2.default.createElement(_semanticUiReact.Image, { centered: true, src: 'http://solitrade.com/images/resources/new-business-map.png' }),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = PageLayout;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _DesktopContainer = __webpack_require__(4);

var _DesktopContainer2 = _interopRequireDefault(_DesktopContainer);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponsiveContainer = function ResponsiveContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DesktopContainer2.default,
      null,
      children
    )
  );
};

ResponsiveContainer.propTypes = {
  children: _propTypes2.default.node
};

var PageLayout = function PageLayout() {
  return _react2.default.createElement(
    ResponsiveContainer,
    null,
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { style: { padding: '3em 0em' }, vertical: true },
      _react2.default.createElement(
        _semanticUiReact.Container,
        { text: true, textAlign: 'center' },
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h1', style: { fontSize: '2em' } },
          'ABOUT US'
        )
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Grid,
      {
        container: true,
        stackable: true,
        divided: 'vertically',
        style: { padding: '3% 0%' }
      },
      _react2.default.createElement(
        _semanticUiReact.Grid.Row,
        null,
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 8 },
          _react2.default.createElement(_semanticUiReact.Image, { src: 'http://solitrade.com/images/resources/solitrade-aerial.jpg', centered: true })
        ),
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 8 },
          _react2.default.createElement(
            _semanticUiReact.Segment,
            { basic: true },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'SALES AND MARKETING'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, { section: true }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h4' },
              'Solitrade Group supports customers around the world by offering a robust portfolio of the highest quality building products. By focusing on a seamless customer experience, we ensure that our customers can spend their time focusing on what they do best\u2014build their business.'
            ),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3' },
              'GLOBAL BRAND AND PRODUCT REPRESENTATION'
            ),
            _react2.default.createElement(_semanticUiReact.Divider, { section: true }),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h4' },
              'As a global trading group, we carefully screen manufacturers from around the world and compile only the best collection of glass, insulation and other building products. Our goal is to ensure that our clients have all the highest quality products they need to be successful in an increasingly competitive construction marketplace.'
            )
          )
        )
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = PageLayout;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _DesktopContainer = __webpack_require__(4);

var _DesktopContainer2 = _interopRequireDefault(_DesktopContainer);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactStatic = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

var path = 'http://sales.solitrade.com/';
function get_link(lenguage) {
  if (lenguage == "en") {
    return "events";
  } else {
    return "eventos";
  }
}
function format_events(events) {
  var formatted_events = events.map(function (event) {
    return {
      header: event.name,
      description: event.description,
      // href: event.id + '/',
      href: '/events/' + get_link(event.language) + '/' + event.name.replace(/\s+/g, '-').toLowerCase() + '/',
      image: path + event.images[0].src
    };
  });

  return formatted_events;
}
var ResponsiveContainer = function ResponsiveContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DesktopContainer2.default,
      null,
      children
    )
  );
};

exports.default = (0, _reactStatic.withRouteData)(function (_ref2) {
  var events = _ref2.events;
  return _react2.default.createElement(
    ResponsiveContainer,
    null,
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { style: { padding: '3em 0em' }, vertical: true },
      _react2.default.createElement(
        _semanticUiReact.Container,
        { text: true, textAlign: 'center' },
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h1', style: { fontSize: '2em' } },
          'Events'
        )
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { basic: true },
      _react2.default.createElement(_semanticUiReact.Card.Group, {
        items: format_events(events.events),
        centered: true
      })
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _DesktopContainer = __webpack_require__(4);

var _DesktopContainer2 = _interopRequireDefault(_DesktopContainer);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactStatic = __webpack_require__(5);

var _reactGridGallery = __webpack_require__(33);

var _reactGridGallery2 = _interopRequireDefault(_reactGridGallery);

var _reactImageGallery = __webpack_require__(34);

var _reactImageGallery2 = _interopRequireDefault(_reactImageGallery);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = "http://sales.solitrade.com";
//
function format_images_slider(images_json) {
  var images = images_json.map(function (image) {
    return {
      original: path + image.src,
      thumbnail: path + image.src
    };
  });

  return images;
}
var ResponsiveContainer = function ResponsiveContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DesktopContainer2.default,
      null,
      children
    )
  );
};

function format_images_gallery(images_json) {
  var images = images_json.map(function (image) {
    return {
      src: path + image.src,
      thumbnail: path + image.src,
      thumbnailWidth: 800,
      thumbnailHeight: 600
    };
  });

  return images;
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref2) {
  var event = _ref2.event;
  return _react2.default.createElement(
    ResponsiveContainer,
    null,
    ',',
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { style: { padding: '3em 0em' }, basic: true, vertical: true },
      _react2.default.createElement(
        _semanticUiReact.Container,
        { text: true, textAlign: 'center' },
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h1', style: { fontSize: '2em' } },
          event.name
        ),
        _react2.default.createElement(_semanticUiReact.Divider, { color: 'blue' })
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Container,
      { style: { padding: '2em 6em' } },
      _react2.default.createElement(_reactImageGallery2.default, { items: format_images_slider(event.images) })
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _DesktopContainer = __webpack_require__(4);

var _DesktopContainer2 = _interopRequireDefault(_DesktopContainer);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponsiveContainer = function ResponsiveContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DesktopContainer2.default,
      null,
      children
    )
  );
};

ResponsiveContainer.propTypes = {
  children: _propTypes2.default.node
};

var PageLayout = function PageLayout() {
  return _react2.default.createElement(
    ResponsiveContainer,
    null,
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { style: { padding: '3em 0em' }, vertical: true },
      _react2.default.createElement(
        _semanticUiReact.Container,
        { text: true, textAlign: 'center' },
        _react2.default.createElement(
          _semanticUiReact.Header,
          { as: 'h1', style: { fontSize: '2em' } },
          'Page Not Found'
        )
      )
    ),
    _react2.default.createElement(_semanticUiReact.Grid, {
      container: true,
      stackable: true,
      divided: 'vertically',
      style: { padding: '3% 0%' }
    }),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = PageLayout;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _reactHotLoader = __webpack_require__(20);

var _reactStaticRoutes = __webpack_require__(21);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};
//

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(22);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(23);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(24);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _reactUniversalComponent = __webpack_require__(26);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Index',
  file: '/home/davidsrn/NUU/Solitrade-GitPages/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Index', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Index');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Index';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/ContactUs',
  file: '/home/davidsrn/NUU/Solitrade-GitPages/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/ContactUs', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/ContactUs');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/ContactUs';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Products',
  file: '/home/davidsrn/NUU/Solitrade-GitPages/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Products', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Products');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Products';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Community',
  file: '/home/davidsrn/NUU/Solitrade-GitPages/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/Community', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Community');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/Community';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/AboutUs',
  file: '/home/davidsrn/NUU/Solitrade-GitPages/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/AboutUs', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/AboutUs');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/AboutUs';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Events',
  file: '/home/davidsrn/NUU/Solitrade-GitPages/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/Events', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Events');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/Events';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Event',
  file: '/home/davidsrn/NUU/Solitrade-GitPages/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/containers/Event', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Event');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/containers/Event';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/davidsrn/NUU/Solitrade-GitPages/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 7

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(27);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(28);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(29);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(7);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.e70ee3ee.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/backb.7759e887.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/name.5518818c.png";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-grid-gallery");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-image-gallery");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-image-gallery/styles/css/image-gallery.css");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-css/semantic.min.css");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.ac9a6579.js.map