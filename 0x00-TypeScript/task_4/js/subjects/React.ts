namespace Subjects {
	export interface ITeacher {
		experienceTeachingReact?: number;
	}
	export class React extends Subject {
		getRequierements(): string {
			return 'Here is the list of requierements for React';
		}
		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingReact)
				return `Available Teacher: ${this.teacher.firstName}`;
			else
				return 'No available teacher';
		}

	}
}
