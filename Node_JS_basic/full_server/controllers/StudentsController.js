import readDatabase from '../utils.js';

export default class StudentsController {
  // first method
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      const header = 'This is the list of our students';
      const lines = [];

      const sortedFields = Object.keys(students).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );

      sortedFields.forEach((field) => {
        const names = students[field].sort();
        lines.push(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ', '
          )}`
        );
      });

      res.type('text/plain');
      res.status(200).send([header, ...lines].join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  // second method
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major != 'CS' && major != 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const studentsByMajor = students[major];

      res.status(200).send(`List: ${studentsByMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
