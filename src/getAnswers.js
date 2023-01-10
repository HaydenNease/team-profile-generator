const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

employees = [];
idNumber = 1;

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
    type: 'input',
    name: 'roleSpecific',
    message: "Enter manager's office number:",
    when(answers) {
      return answers.role === 'Manager'
    }
  },
  {
    type: 'input',
    name: 'roleSpecific',
    message: "Enter engineer's GitHub username:",
    when(answers) {
      return answers.role === 'Engineer'
    }
  },
  {
    type: 'input',
    name: 'roleSpecific',
    message: "Enter intern's university:",
    when(answers) {
      return answers.role === 'Intern'
    }
  },
  {
    type: "confirm",
    name: "addEmployee",
    message: "Would you like to add another employee?",
  },
];

const recursion = (answers) => {
  if (answers.addEmployee) {
    idNumber++;
    return getAnswers();
  } else {
    return (employees);
  }
}

const getAnswers = function () {
  return inquirer.prompt(questions).then((answers) => {
    if (answers.role === 'Manager') {
      const manager = new Manager(answers.name, idNumber, answers.email, answers.roleSpecific);
      employees.push(manager);
      return recursion(answers);
    }
    if (answers.role === 'Engineer') {
      const engineer = new Engineer(answers.name, idNumber, answers.email, answers.roleSpecific);
      employees.push(engineer);
      return recursion(answers);
    }
    if (answers.role === 'Intern') {
      const intern = new Intern(answers.name, idNumber, answers.email, answers.roleSpecific);
      employees.push(intern);
      return recursion(answers);
    }
  })
};

module.exports = getAnswers;