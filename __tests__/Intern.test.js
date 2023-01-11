const Intern = require("../lib/Intern");

describe("Intern", () => {
  it('should have a school', () => {
    const intern = new Intern('Hayden', 1, 'hayden@email.com', 'school');
    expect(intern.getSchool()).toEqual('school');
  }); 
  
  it('should have a role', () => {
    const intern = new Intern('Hayden', 1, 'hayden@email.com', 'school');
    expect(intern.getRole()).toEqual('Intern');
  });    
});
