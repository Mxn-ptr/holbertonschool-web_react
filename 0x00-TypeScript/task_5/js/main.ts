interface MajorCredits {
	credits: number;
	brand: 'Brand1';
}

interface MinorCredits {
	credits: number;
	brand: 'Brand2';
}

function sumMajorCredits(subject1: number , subject2: number ): number {
	return subject1 + subject2;
}

function sumMinorCredits(subject1: number , subject2: number ): number {
	return subject1 + subject2;
}
