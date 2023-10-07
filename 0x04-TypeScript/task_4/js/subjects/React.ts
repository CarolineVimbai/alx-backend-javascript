// js/subjects/React.ts
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements() {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher() {
      if (this.teacher?.experienceTeachingReact !== undefined) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
