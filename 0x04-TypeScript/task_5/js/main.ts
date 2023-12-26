// task_5/js/main.ts

// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: string;
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: string;
}

// Define sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand,
  };
}

// Define sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand,
  };
}
