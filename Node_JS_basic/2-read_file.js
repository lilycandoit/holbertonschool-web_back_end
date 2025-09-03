const { log } = require('console');
const fs = require('fs');
const { queryObjects } = require('v8');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');

  if (lines <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const [, ...rows] = lines; 

  const students = rows.map((row) => row.trim()).filter((row) => row !== '');

  const total = students.length;

  const groups = {};
  students.forEach(student => {
    [firstname, , , field] = student.split(',');
    //console.log(firstname, field);

    if (!groups[field]) {
      groups[field] = [];
    }
    groups[field].push(firstname);
    //console.log(groups[field]);
  })

  //console.log(groups);
  console.log(`Number of students: ${total}`);

  for (const [field, list] of Object.entries(groups)) {
    console.log(
      `Number of students in ${field}: ${list.length}. List: ${list}`
    );
  }
}

module.exports = countStudents;