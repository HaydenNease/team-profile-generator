const getAnswers = require('./src/getAnswers.js')
const generateTeamCards = require('./src/generateTeamCards.js');
const generateTemplate = require('./src/generateTemplate.js');
const generateHTML = require('./src/generateHTML.js');

getAnswers()
  .then(employees => {
    return generateTeamCards(employees);
  })
  .then(teamCards => {
    return generateTemplate(teamCards);
  })
  .then(template => {
    return generateHTML(template);
  })