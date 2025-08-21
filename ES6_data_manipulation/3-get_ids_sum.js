export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  const sumOfIds = students.reduce((acc, student) => acc + student.id, 0);
  return sumOfIds;
}
