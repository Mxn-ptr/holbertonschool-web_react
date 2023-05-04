/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher = {
	firstName: 'Paul',
	lastName: 'Dupont',
	experienceTeachingC: 3,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequierements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequierements());
console.log(java.getAvailableTeacher());
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequierements());
console.log(react.getAvailableTeacher());
