"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UseController {
  async store(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((error) => error.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      console.log('USER ID', req.userId);
      console.log('USER EMAIl', req.userEmail);
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });
      const newDataUser = await user.update(req.body);
      const { id, nome, email } = newDataUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });
      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.json(null);
    }
  }
}
exports. default = new UseController();
