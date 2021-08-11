const Intern = require("../../lib/intern");
const test = require("jest");

describe("Intern", () => {
  it("Can set school via constructor argument", () => {
    const school = "FSU";
    const employee = new Intern("Rae", 52, "email", school);
    expect(employee.school).toBe(school);
  });

  it("Can get a school with method getSchool()", () => {
    const school = "School University";
    const employee = new Intern("Rae", 52, "email", school);
    expect(employee.getSchool()).toBe(school);
  });

  it("Can get a role with method getRole()", () => {
    const role = "Intern";
    const employee = new Intern("Rae", 52, "rgregg2014", "FSU");
    expect(employee.getRole()).toBe(role);
  });
});
