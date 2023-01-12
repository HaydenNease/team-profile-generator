const Manager = require("../lib/Manager");

describe("Manager", () => {
  it('should have an officeNumber', () => {
    const manager = new Manager('Hayden', 1, 'hayden@email.com', 123);
    expect(manager.getOffice()).toEqual(123);
  });    

  it('should have a role', () => {
    const manager = new Manager('Hayden', 1, 'hayden@email.com', 123);
    expect(manager.getRole()).toEqual('Manager');
  });    
});