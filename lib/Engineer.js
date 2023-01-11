const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, roleSpecific) {
    super(name, id, email);
    this.gitHub = roleSpecific;
  }

  getGitHub() {
    return 'https://github.com/' + this.gitHub + '/';
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
