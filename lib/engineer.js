const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, empID, email, gitHub) {
    // Inherits from "Employee"
    super(name, empID, email);
    // Specific to "Engineer"
    this.gitHub = gitHub;
  }
  //grabs GH username from inquirer prompts
  getGitHub() {
    return this.gitHub;
  }
  //overridden to engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
