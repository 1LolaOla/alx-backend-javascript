/**
 * Updates student grades for a specific city based on the given newGrades array.
 * @param {Array} students - Array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - Array of objects with studentId and grade properties.
 * @returns {Array} - Array of students for the given city with updated grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  }).filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
