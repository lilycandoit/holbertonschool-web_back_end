const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.trim().split('\n').filter(Boolean);
    // a trick to exclude empty for invalid row

    if (lines <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const [, ...rows] = lines;

    const total = rows.length;

    const groups = {};
    rows.forEach((student) => {
      [firstname, , , field] = student.split(',');
      //console.log(firstname, field);

      if (!groups[field]) {
        groups[field] = [];
      }
      groups[field].push(firstname);
      //console.log(groups[field]);
    });

    //console.log(groups);
    console.log(`Number of students: ${total}`);

    for (const [field, list] of Object.entries(groups)) {
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
