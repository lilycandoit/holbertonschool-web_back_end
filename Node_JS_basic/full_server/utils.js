import fs from 'fs/promises';

export default async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data
      .trim()
      .split('\n')
      .filter(Boolean); // shorthand to make sure no empty invalid lines
    // because empty string is Falsy in JS
    // same as: .filter(line => line != '')

    const [, ...rows] = lines;

    const studentsByField = {};

    rows.forEach((row) => {
      const [firstname, , , field] = row.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    return studentsByField;

  } catch (error) {
    throw new Error(`Error reading database: ${error.message}`);
  }
}
