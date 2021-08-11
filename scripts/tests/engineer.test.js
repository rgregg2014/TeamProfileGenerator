const test = require("jest");
const Engineer = require("../../lib/engineer");

describe("Engineer", () => {
  it("Can set a github user via constructor argument", () => {
    const GH = "githubUser";
    const employee = new Engineer("Rae", 52, "email", GH);
    expect(employee.gitHub).toBe(GH);
  });

  it("Can get a Github username with method getGitHub()", () => {
    const GH = "githubUser";
    const employee = new Engineer("Rae", 52, "email", GH);
    expect(employee.getGitHub()).toBe(GH);
  });

  it("Can get a role with method getRole()", () => {
    const role = "Engineer";
    const employee = new Engineer("Rae", 52, "rgregg2014", "gitHub");
    expect(employee.getRole()).toBe(role);
  });
});
