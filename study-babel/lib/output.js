'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'ギークラボ';

var company = '（株） 日本システム技研';

var Figure = function () {
  function Figure() {
    _classCallCheck(this, Figure);
  }

  _createClass(Figure, [{
    key: 'getArea',
    value: function getArea(x, y) {
      return x * y;
    }
  }]);

  return Figure;
}();

console.log(name);
console.log(company);
