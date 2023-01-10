const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, roleSpecific) {
    super(name, id, email);
    this.github = 'https://github.com/' + roleSpecific + '/';
  }
}

module.exports = Engineer;
