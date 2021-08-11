class Employee {
  //Add a constructor
  constructor(name, empID, email) {
    this.name = name;
    this.empID = empID;
    this.email = email;
  }
  // grabs name from inquirer prompts, adds into HTML template literal
  getName() {
    return this.name;
  }
  // grabs id from inquirer prompts, adds into HTML template literal
  getID() {
    return this.empID;
  }
  // grabs email from inquirer prompts, adds into HTML template literal
  getEmail() {
    return this.email;
  }
  // grabs role from inquirer prompts, adds into HTML template literal
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
