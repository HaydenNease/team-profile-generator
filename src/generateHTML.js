const fs = require('fs');
const generateHTML = data => {
  fs.writeFile(`dist/team.html`, data, err => {
    err ? console.log(err) : console.log('Check the dist folder for your .html!')
  })
};

module.exports = generateHTML;