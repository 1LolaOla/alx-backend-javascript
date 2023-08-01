// 4-update_grade_by_city.js

/**
 * Updates student grades for a specific city based on the given newGrades array.
 * @param {Array} students - Array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - Array of objects with studentId and grade properties.
 * @returns {Array} - Array of students for the given city with updated grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (matchedGrade) {
      return { ...student, grade: matchedGrade.grade };
    } else {
      return { ...student, grade: 'N/A' };
    }
  }).filter((student) => student.location === city);
}

export default updateStudentGradeByCity;

