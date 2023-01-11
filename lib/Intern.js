const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, roleSpecific){
    super(name, id, email)
    this.school = roleSpecific;
  }
  
  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;