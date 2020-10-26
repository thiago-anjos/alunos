import JWT from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Usuário ou senha inválidos'],
      });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }
    const { id } = user;
    const token = JWT.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return res.send({ token });
  }
}
export default new TokenController();
