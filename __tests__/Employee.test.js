const Employee = require("../lib/Employee");

describe("Employee", () => {
  it('should have a name', () => {
    const employee = new Employee('Hayden', 1, "hayden@email.com");
    expect(employee.name).toEqual('Hayden');
  });
  it('should have an id', () => {
    const employee = new Employee('Hayden', 1, "hayden@email.com");
    expect(employee.id).toEqual(1);
  });
  it('should have an email', () => {
    const employee = new Employee('Hayden', 1, "hayden@email.com");
    expect(employee.email).toEqual('hayden@email.com');
  });
  it('should have a role', () => {
    const employee = new Employee('Hayden', 1, "hayden@email.com");
    expect(employee.getRole()).toEqual('Employee');
  });
});
