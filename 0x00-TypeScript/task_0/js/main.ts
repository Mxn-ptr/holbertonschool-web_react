interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Jean',
	lastName: 'Dupont',
	age: 21,
	location: 'Paris',
};

const student2: Student = {
	firstName: 'Paul',
	lastName: 'Will',
	age: 23,
	location: 'New York',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell();
	const locationCell = row.insertCell();
	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
});

document.body.appendChild(table);
