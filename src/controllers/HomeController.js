import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Miguel',
      sobrenome: 'dos anjos',
      email: 'miguel@gmail.com',
      idade: 6,
      peso: 24,
      altura: 1,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
