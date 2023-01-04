const inquirer = require('inquirer');
const fs = require('fs');

employees = [];

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

const getAnswers = function () {
  return inquirer.prompt(questions).then((answers) => {
    if (answers.addEmployee) {      
      employees.push(answers);
      return getAnswers();
    } else {
      employees.push(answers);
      return (employees);
    }
  });
}

module.exports = getAnswers;