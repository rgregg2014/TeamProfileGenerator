// DEPENDENCIES =============================================================
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// DATA AND VARIABLES =======================================================
const employees = [];

// SECONDARY FUNCTIONS ======================================================

function genHeadHTML() {
  // Generates head info for HTML page
  // Template literal with head information, Bootstrap link, document title, header info
  const htmlHead = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <title>My Team Profile</title>
    </head>
    <body>
    <div class="staffCard" style = "display:flex; justify-content: space-evenly;
    align-items: center;">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
          <p class="lead">
            To add members, please refer to the JavaScript application associated
            with this repository.
          </p>
        </div>
      </div>`;

  // Writes new file into dist folder, catches any errors and prints to console
  fs.writeFile("./dist/autoTeamProfile.html", htmlHead, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Your file has been started!");
}

function addStaffCard(member) {
  // Adds info from prompts into staff card <div>s
  return new Promise(function (resolve, reject) {
    // Defines universal info from classes as variables
    const name = member.getName();
    const role = member.getRole();
    const id = member.getID();
    const email = member.getEmail();
    let data = "";

    // Checks for specific role and populates staffCard <div>s accordingly
    if (role === "Manager") {
      const officeNumber = member.getOfficeNumber();
      data = ` <div class="card bg-light mb-3" style="max-width: 18rem">
        <div class="card-header">Manager</div>
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Employee ID: ${id}</p>
          <a href="mailto: ${email}"
            ><p class="card-text">Email Address: ${email}</p></a
          >
          <p class="card-text">Office Number: ${officeNumber}</p>
        </div>
      </div>`;
    } else if (role === "Engineer") {
      const github = member.getGitHub();
      data = `<div class="card bg-light mb-3" style="max-width: 18rem">
      <div class="card-header">Engineer</div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Employee ID: ${id}</p>
        <a href="mailto: ${email}"><p class="card-text">Email: ${email}</p></a>
        <a href="https://www.githib.com/${github}">
          <p class="card-text">Github Profile: ${github}</p>
        </a>
      </div>
    </div>`;
    } else {
      const school = member.getSchool();
      data = `<div class="card bg-light mb-3" style="max-width: 18rem">
        <div class="card-header">Intern</div>
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Employee ID: ${id}</p>
          <a href="mailto: ${email}"><p class="card-text">Email: ${email}</p></a>
          <p class="card-text">University: ${school}</p>
        </div>
      </div>`;
    }
    console.log("Adding your team members!");
    // Appends populated <div>s to header in HTML file
    fs.appendFile("./dist/autoTeamProfile.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function addHTMLFoot() {
  // Adds footer info to end of HTML file
  // Template literal for the bottom jumbotron with a link to my GH profile
  const htmlFoot = `</div>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <p class="lead">
      For more command line applications, please visit Rachel's 
      <a href="https://github.com/rgregg2014">GitHub Profile.</a>
    </p>
  </div>
</div>
</body>
</html>
`;
  // Appends foot to end of the HTML document, checks for errors and prints them to the console
  fs.appendFile("./dist/autoTeamProfile.html", htmlFoot, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Your document is finished!");
}

function genStaffCard() {
  // Prompt user with universal questions (name, role, id, email)
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your team member's name:",
        name: "staffName",
      },
      {
        type: "list",
        message: "Please select your team member's role:",
        choices: ["Manager", "Engineer", "Intern"],
        name: "staffRole",
      },
      {
        type: "input",
        message: "Please enter your team member's employee ID:",
        name: "staffID",
      },
      {
        type: "input",
        message: "Please enter your team member's email address:",
        name: "staffEmail",
      },
    ])
    // After universal questions, decide which job-secific question to ask
    // Passing the whole object into the function to ask last question and generate card
    .then(function ({ staffName, staffRole, staffID, staffEmail }) {
      let roleInfo = "";

      if (staffRole === "Manager") {
        roleInfo = "office number";
      } else if (staffRole === "Engineer") {
        roleInfo = "GitHub username";
      } else {
        roleInfo = "univerity affiliation";
      }
      // Ask job specific question
      // Ask if user wants to add additional members
      //TODO: The data for Intern is overriding everything and I can't figure out how to make it stop.

      inquirer
        .prompt([
          {
            type: "input",
            message: `Please enter your team member's ${roleInfo}:`,
            name: "roleInfo",
          },
          {
            type: "list",
            message: "Would you like to add additional team members?",
            choices: ["Yes", "No"],
            name: "additionalStaff",
          },
        ])
        // Decide which role class to grab and populate
        .then(function ({ roleInfo, additionalStaff }) {
          let newStaff = [];
          if (roleInfo === "office number") {
            newStaff = new Manager(staffName, staffID, staffEmail, roleInfo);
          } else if (roleInfo === "Github username") {
            newStaff = new Engineer(staffName, staffID, staffEmail, roleInfo);
          } else {
            newStaff = new Intern(staffName, staffID, staffEmail, roleInfo);
          }
          // Add newly created staff to array of staff members
          // More staff? Recall the function
          // No more staff? Move on
          employees.push(newStaff);
          addStaffCard(newStaff).then(function () {
            if (additionalStaff === "Yes") {
              genStaffCard();
            } else {
              addHTMLFoot();
            }
          });
        });
    });
}

// MASTER FUNCTION ==========================================================

function pageInit() {
  //runs on page init
  genHeadHTML();
  genStaffCard();
}

pageInit();
