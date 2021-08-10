const Employee = require("./employee.js");

class Manager extends Employee {
  constructor() {
    super(officeNumber);
    this.officeNumber = officeNumber;
  }
  //overridden to manager
  getRole() {}
}

module.exports = Manager;
