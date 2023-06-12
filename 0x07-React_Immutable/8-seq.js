import { Seq } from 'immutable';

const capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

const printBestStudents = (object) => {
  const students = Seq(object);
  const result = students
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
      };
    }).toJS();
  console.log(result);
};

export default printBestStudents;
