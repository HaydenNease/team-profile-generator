const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, roleSpecific) {
    super(name, id, email);
    this.office = roleSpecific;
  }
}

module.exports = Manager;
