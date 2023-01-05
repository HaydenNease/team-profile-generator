const fs = require('fs');
const generateHTML = data => {
  fs.writeFile(`project-index.html`, data, err => {
    err ? console.log(err) : console.log('Generating HTML')
  })
};

module.exports = generateHTML;