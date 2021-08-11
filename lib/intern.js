const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, empID, email, school) {
    // Inherits from "Employee"
    super(name, empID, email);
    // Specific to "Itern"
    this.school = school;
  }
  //gets school from inquirer prompts
  getSchool() {
    return this.school;
  }
  //overridden to Intern
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
