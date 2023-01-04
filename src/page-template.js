// create the team
const generateTeamMembers = (employees) => {
    `for (let i = 0; i < employees.length; i++) {
        const ${employees[i].name} = new ${employees[i].role} (${employees[i].name}, ${i}, ${employees[i].email}, ${employees[i].roleSpecific});
          console.log(${employees[i].name})
    };`
}
// export function to generate entire page
module.exports = (employees) => {
    // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE
};
