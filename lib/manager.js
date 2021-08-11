const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, empID, email, officeNumber) {
    // Inherits from "Employee"
    super(name, empID, email);
    // Specific to "Manager"
    this.officeNumber = officeNumber;
  }
  // gets office number from inquirer prompts
  getOfficeNumber() {
    return this.officeNumber;
  }
  //overridden to manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
