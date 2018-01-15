'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _PDFOperator2 = require('../../PDFOperator');

var _PDFOperator3 = _interopRequireDefault(_PDFOperator2);

var _utils = require('../../../../utils');

var _validate = require('../../../../utils/validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable new-cap */


/**
Set the specified parameters in the graphics state. dictName shall be the name
of a graphics state parameter dictionary in the ExtGState subdictionary of the
current resource dictionary.
*/
var gs = function (_PDFOperator) {
  _inherits(gs, _PDFOperator);

  // TODO: See if the "dictName" must be preceded by a "/" or not...
  function gs(dictName) {
    _classCallCheck(this, gs);

    var _this = _possibleConstructorReturn(this, (gs.__proto__ || Object.getPrototypeOf(gs)).call(this));

    _initialiseProps.call(_this);

    (0, _validate.validate)(dictName, _lodash2.default.isString, 'gs operator arg "dictName" must be a string.');
    _this.dictName = dictName;
    return _this;
  }

  return gs;
}(_PDFOperator3.default);

gs.of = function (dictName) {
  return new gs(dictName);
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.toString = function () {
    return _this2.dictName + ' gs\n';
  };

  this.bytesSize = function () {
    return _this2.toString().length;
  };

  this.copyBytesInto = function (buffer) {
    return (0, _utils.addStringToBuffer)(_this2.toString(), buffer);
  };
};

exports.default = gs;