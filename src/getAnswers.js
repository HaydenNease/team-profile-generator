const inquirer = require('inquirer');
const fs = require('fs');

let employees = {};

const questions = [
  {
    type: "input",
    name: "name",
    message: "Enter employee's name:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter employee's email address:",
  },
  {
    type: "list",
    name: "role",
    choices: ['Manager', 'Engineer', 'Intern'],
    message: "Enter employee's position:",
  },
  {
    type: "confirm",
    name: "addEmployee",
    message: "Would you like to add another employee?",
  },
];

const getAnswers = function () {
  return inquirer.prompt(questions).then((answers) => {
    if (answers.addEmployee) {
      employees += answers;
      return getAnswers();
    } else {
      employees += answers;
      return employees;
    }
  });
}

module.exports = getAnswers;