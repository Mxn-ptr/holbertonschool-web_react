interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
	new (firstName: string, lastName: string): IStudentClass;
}

interface IStudentClass {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements IStudentClass {
	constructor(private firstName: string, private lastName: string) {}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return this.firstName;
	}
}

