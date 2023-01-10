const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, roleSpecific){
    super(name, id, email)
    this.school = roleSpecific;
  }
}

module.exports = Intern;
