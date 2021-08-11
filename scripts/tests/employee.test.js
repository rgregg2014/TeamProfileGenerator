const test = require("jest");
const Employee = require("../../lib/employee");

describe("Employee", () => {
  it("Can generate a new instance of Employee", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  it("Sets a name with constructor arguments", () => {
    const name = "Rae";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  it("Sets an ID with constructor arguments", () => {
    const ID = 52;
    const employee = new Employee("Rae", ID);
    expect(employee.empID).toBe(ID);
  });

  it("Sets an email with constructor arguments", () => {
    const email = "example@email.com";
    const employee = new Employee("Rae", 52, email);
    expect(employee.email).toBe(email);
  });

  describe("getID", () => {
    it("Grabs ID number via the function getID()", () => {
      const ID = 52;
      const employee = new Employee("Rae", ID);
      expect(employee.getID()).toBe(ID);
    });
  });

  describe("getEmail", () => {
    it("Grabs email address via the function getEmail()", () => {
      const email = "example@email.com";
      const employee = new Employee("Rae", 52, email);
      expect(employee.getEmail()).toBe(email);
    });
  });

  describe("getRole", () => {
    it("Grabs employee role via the function getRole()", () => {
      const role = "Employee";
      const employee = new Employee("Rae", 52, "example@email.com", role);
      expect(employee.getRole()).toBe(role);
    });
  });
});
