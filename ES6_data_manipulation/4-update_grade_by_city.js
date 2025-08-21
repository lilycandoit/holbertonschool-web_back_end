export default function updateStudentGradeByCity(students, city, updates) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(updates)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const found = updates.find((update) => update.studentId === student.id);

      return {
        ...student, // spread existing student properties
        grade: found ? found.grade : 'N/A', // assign grade if found, else "N/A"
      };
    });
}
