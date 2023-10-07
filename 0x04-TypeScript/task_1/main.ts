class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;
  private otherAttributes: { [key: string]: any } = {};

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = true; // Set to default value
    this.location = ""; // Set to default value
  }

  setFullTimeEmployee(value: boolean) {
    this.fullTimeEmployee = value;
  }

  setYearsOfExperience(value?: number) {
    this.yearsOfExperience = value;
  }

  setLocation(value: string) {
    this.location = value;
  }

  setAttribute(key: string, value: any) {
    this.otherAttributes[key] = value;
  }

  getAttributes() {
    return { ...this.otherAttributes };
  }
}

// Usage example:

const teacher = new Teacher("John", "Doe");
teacher.setFullTimeEmployee(true);
teacher.setYearsOfExperience(5);
teacher.setLocation("New York");
teacher.setAttribute("contract", true);

console.log("Teacher Object:", teacher);
console.log("Teacher Attributes:", teacher.getAttributes());
