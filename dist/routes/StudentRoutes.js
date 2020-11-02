"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _StudentController = require('../controllers/StudentController'); var _StudentController2 = _interopRequireDefault(_StudentController);
var _LoginRequired = require('../middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);

const router = new (0, _express.Router)();

router.get('/', _StudentController2.default.index);
router.get('/:id', _StudentController2.default.show);

router.post('/', _LoginRequired2.default, _StudentController2.default.store);
router.put('/:id', _LoginRequired2.default, _StudentController2.default.update);
router.delete('/:id', _LoginRequired2.default, _StudentController2.default.delete);

exports. default = router;
