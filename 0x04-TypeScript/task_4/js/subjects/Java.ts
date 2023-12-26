// js/subjects/Java.ts
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements() {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher() {
      if (this.teacher?.experienceTeachingJava !== undefined) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
