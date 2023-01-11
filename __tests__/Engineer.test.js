const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('should have a Github', () => {
    const engineer = new Engineer('Hayden', 1, 'hayden@email.com', 'username');
    expect(engineer.getGitHub()).toEqual('https://github.com/username/');
  });    

  it('should have a role', () => {
    const engineer = new Engineer('Hayden', 1, 'hayden@email.com', 'username');
    expect(engineer.getRole()).toEqual('Engineer');
  });    
});
