namespace Subjects {
	export interface ITeacher {
		experienceTeachingJava?: number;
	}
	export class Java extends Subject {
		getRequierements(): string {
			return 'Here is the list of requierements for Java';
		}
		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingJava)
				return `Available Teacher: ${this.teacher.firstName}`;
			else
				return 'No available teacher';
		}

	}
}
