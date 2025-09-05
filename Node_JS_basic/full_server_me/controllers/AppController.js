export default class AppController {
  static getHomepage(req, res) {
    res.status(200);
    res.type('text/plain');
    res.send('Hello Holberton School!');
  }
}
