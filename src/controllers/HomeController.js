class HomeController {
  async index(req, res) {
    res.json('Home index');
  }
}
export default new HomeController();
