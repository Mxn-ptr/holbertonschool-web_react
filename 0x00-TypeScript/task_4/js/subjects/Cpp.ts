namespace Subjects {
	export interface ITeacher {
		experienceTeachingC?: number;
	}
	
	export class Cpp extends Subject {
		getRequierements(): string {
			return 'Here is a list of requirements for Cpp';
		}
		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingC)
				return `Available Teacher: ${this.teacher.firstName}`;
			else
				return 'No available teacher';
		}
	}
}
