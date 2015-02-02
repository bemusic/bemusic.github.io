webpackJsonp([3],{

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_x_EwgLpOGWo3vBIw4qcbQg = (Function('return this'))();
	if (!__cov_x_EwgLpOGWo3vBIw4qcbQg.__coverage__) { __cov_x_EwgLpOGWo3vBIw4qcbQg.__coverage__ = {}; }
	__cov_x_EwgLpOGWo3vBIw4qcbQg = __cov_x_EwgLpOGWo3vBIw4qcbQg.__coverage__;
	if (!(__cov_x_EwgLpOGWo3vBIw4qcbQg['/home/ubuntu/bemuse/src/coming-soon/index.js'])) {
	   __cov_x_EwgLpOGWo3vBIw4qcbQg['/home/ubuntu/bemuse/src/coming-soon/index.js'] = {"path":"/home/ubuntu/bemuse/src/coming-soon/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":1,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":22},"end":{"line":3,"column":37}}},"2":{"name":"main","line":10,"loc":{"start":{"line":10,"column":0},"end":{"line":10,"column":16}}},"3":{"name":"(anonymous_3)","line":15,"loc":{"start":{"line":15,"column":29},"end":{"line":15,"column":48}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":94}},"2":{"start":{"line":3,"column":39},"end":{"line":3,"column":91}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":20}},"4":{"start":{"line":6,"column":0},"end":{"line":6,"column":59}},"5":{"start":{"line":8,"column":0},"end":{"line":8,"column":30}},"6":{"start":{"line":10,"column":0},"end":{"line":21,"column":1}},"7":{"start":{"line":11,"column":2},"end":{"line":11,"column":42}},"8":{"start":{"line":12,"column":2},"end":{"line":12,"column":32}},"9":{"start":{"line":13,"column":2},"end":{"line":13,"column":29}},"10":{"start":{"line":15,"column":2},"end":{"line":18,"column":23}},"11":{"start":{"line":16,"column":4},"end":{"line":16,"column":57}},"12":{"start":{"line":17,"column":4},"end":{"line":17,"column":35}},"13":{"start":{"line":20,"column":2},"end":{"line":20,"column":33}},"14":{"start":{"line":22,"column":0},"end":{"line":22,"column":26}}},"branchMap":{"1":{"line":3,"type":"cond-expr","locations":[{"start":{"line":3,"column":70},"end":{"line":3,"column":84}},{"start":{"line":3,"column":87},"end":{"line":3,"column":90}}]},"2":{"line":3,"type":"binary-expr","locations":[{"start":{"line":3,"column":46},"end":{"line":3,"column":49}},{"start":{"line":3,"column":53},"end":{"line":3,"column":67}}]}},"code":["\"use strict\";","","var _interopRequire = function (obj) { return obj && obj.__esModule ? obj[\"default\"] : obj; };","","exports.main = main;","var template = _interopRequire(require(\"./template.jade\"));","","require(\"style!./style.scss\");","","function main() {","  var div = document.createElement(\"div\");","  div.className = \"coming-soon\";","  div.innerHTML = template();","","  require.ensure([\"./demo\"], function (require) {","    var button = div.querySelector(\".coming-soon--demo\");","    require(\"./demo\").main(button);","  }, \"comingSoonDemo\");","","  document.body.appendChild(div);","}","exports.__esModule = true;"]};
	}
	__cov_x_EwgLpOGWo3vBIw4qcbQg = __cov_x_EwgLpOGWo3vBIw4qcbQg['/home/ubuntu/bemuse/src/coming-soon/index.js'];
	__cov_x_EwgLpOGWo3vBIw4qcbQg.s['1']++;var _interopRequire=function(obj){__cov_x_EwgLpOGWo3vBIw4qcbQg.f['1']++;__cov_x_EwgLpOGWo3vBIw4qcbQg.s['2']++;return(__cov_x_EwgLpOGWo3vBIw4qcbQg.b['2'][0]++,obj)&&(__cov_x_EwgLpOGWo3vBIw4qcbQg.b['2'][1]++,obj.__esModule)?(__cov_x_EwgLpOGWo3vBIw4qcbQg.b['1'][0]++,obj['default']):(__cov_x_EwgLpOGWo3vBIw4qcbQg.b['1'][1]++,obj);};__cov_x_EwgLpOGWo3vBIw4qcbQg.s['3']++;exports.main=main;__cov_x_EwgLpOGWo3vBIw4qcbQg.s['4']++;var template=_interopRequire(__webpack_require__(19));__cov_x_EwgLpOGWo3vBIw4qcbQg.s['5']++;__webpack_require__(20);function main(){__cov_x_EwgLpOGWo3vBIw4qcbQg.f['2']++;__cov_x_EwgLpOGWo3vBIw4qcbQg.s['7']++;var div=document.createElement('div');__cov_x_EwgLpOGWo3vBIw4qcbQg.s['8']++;div.className='coming-soon';__cov_x_EwgLpOGWo3vBIw4qcbQg.s['9']++;div.innerHTML=template();__cov_x_EwgLpOGWo3vBIw4qcbQg.s['10']++;__webpack_require__.e/*nsure*/(4,function(require){__cov_x_EwgLpOGWo3vBIw4qcbQg.f['3']++;__cov_x_EwgLpOGWo3vBIw4qcbQg.s['11']++;var button=div.querySelector('.coming-soon--demo');__cov_x_EwgLpOGWo3vBIw4qcbQg.s['12']++;__webpack_require__(28).main(button);},0);__cov_x_EwgLpOGWo3vBIw4qcbQg.s['13']++;document.body.appendChild(div);}__cov_x_EwgLpOGWo3vBIw4qcbQg.s['14']++;exports.__esModule=true;


/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(23);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<p>BEAT☆MUSIC☆SEQUENCE</p><h1>Coming Soon</h1><ul><li><a href=\"https://github.com/bemusic/bemuse\">GitHub Project</a></li><li><a href=\"https://waffle.io/bemusic/bemuse\">Waffle.io Board</a></li><li><a href=\"/badgeboard/\">Badgeboard</a></li><li><a href=\"https://gitter.im/bemusic/bemuse\">Gitter Chat</a></li><li><a href=\"#\" class=\"coming-soon--demo\">Loading Demo</a></li></ul>");;return buf.join("");
	}

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ubuntu/bemuse/node_modules/style-loader/index.js!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/node_modules/sass-loader/index.js?outputStyle=expanded!/home/ubuntu/bemuse/src/coming-soon/style.scss", function() {
			var newContent = require("!!/home/ubuntu/bemuse/node_modules/style-loader/index.js!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/node_modules/sass-loader/index.js?outputStyle=expanded!/home/ubuntu/bemuse/src/coming-soon/style.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/node_modules/sass-loader/index.js?outputStyle=expanded!/home/ubuntu/bemuse/src/coming-soon/style.scss", function() {
			var newContent = require("!!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/node_modules/sass-loader/index.js?outputStyle=expanded!/home/ubuntu/bemuse/src/coming-soon/style.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	exports.push([module.id, ".coming-soon {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: 4s coming-soon--fade;\n          animation: 4s coming-soon--fade;\n  text-align: center; }\n  .coming-soon p {\n    margin: 0;\n    padding: 0;\n    font: 3vw Helvetica Neue, Helvetica, sans-serif;\n    color: #8b8685; }\n  .coming-soon h1 {\n    margin: 0;\n    padding: 0;\n    font: bold 8vw Helvetica Neue, Helvetica, sans-serif; }\n  .coming-soon ul {\n    margin: 48px 0 0;\n    padding: 0;\n    list-style: none; }\n  .coming-soon li {\n    display: inline-block;\n    margin: 0 5px; }\n  .coming-soon a {\n    display: inline-block;\n    color: #8b8685;\n    text-decoration: none;\n    border: 1px solid #656463;\n    padding: 4px 6px; }\n\n@-webkit-keyframes coming-soon--fade {\n  from {\n    opacity: 0; }\n\n  to {\n    opacity: 1; } }\n\n@keyframes coming-soon--fade {\n  from {\n    opacity: 0; }\n\n  to {\n    opacity: 1; } }\n", ""]);

/***/ }

});
//# sourceMappingURL=comingSoonMode-ee92dc5a9eedf9088f7e.js.map