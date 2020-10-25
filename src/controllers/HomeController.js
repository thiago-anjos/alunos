import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      nome: 'Raquel',
      sobrenome: 'barros',
      email: 'raquel@gmail.com',
      idade: 6,
      peso: 24,
      altura: 1,
    });
    res.json(newStudent);
  }
}
export default new HomeController();
