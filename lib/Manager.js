const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, roleSpecific) {
    super(name, id, email);
    this.office = roleSpecific;
  }
 
  getOffice() {
    return this.office;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;