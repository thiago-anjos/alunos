import User from '../models/User';

class UseController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((error) => error.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['ID não enviado'] });
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });
      const newDataUser = await user.update(req.body);
      return res.json(newDataUser);
    } catch (error) {
      return res.json(null);
    }
  }

  // delete
  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['ID não enviado'] });
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });
      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }
}
export default new UseController();
