import User from '../models/User';

class UseController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((error) => error.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
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
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
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
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });
      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.json(null);
    }
  }
}
export default new UseController();
