"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java();
exports.react = new Subjects.React();
exports.cTeacher = {
    firstName: 'Paul',
    lastName: 'Dupont',
    experienceTeachingC: 3,
};
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequierements());
console.log(exports.cpp.getAvailableTeacher());
console.log('Java');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequierements());
console.log(exports.java.getAvailableTeacher());
console.log('React');
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequierements());
console.log(exports.react.getAvailableTeacher());
