const Manager = require("../../lib/manager");
const test = require("jest");

describe("Manager", () => {
  it("Can set office number via constructor argument", () => {
    const officeNumber = 100;
    const employee = new Manager("Rae", 52, "email", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  it("Can get an office number with method getOfficeNumber()", () => {
    const officeNumber = 72;
    const employee = new Manager("Rae", 52, "email", officeNumber);
    expect(employee.getOfficeNumber()).toBe(officeNumber);
  });

  it("Can get a role with method getRole()", () => {
    const role = "Manager";
    const employee = new Manager("Rae", 52, "rgregg2014", 72);
    expect(employee.getRole()).toBe(role);
  });
});
