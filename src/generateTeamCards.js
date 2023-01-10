teamCards = []

const generateTeamCards = function (employees) {
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i]);
        if (employees[i].role === 'Manager') {
            teamCards.push(`<article>
                <h2>Manager</h2>
                <ul>
                    <li>Name: ${employees[i].name}</li>
                    <li>ID: ${i}</li>
                    <li>Email: ${employees[i].email}</li>
                    <li>Office Number: ${employees[i].roleSpecific}</li>
                </ul>
            </article>
            `)
        } else if (employees[i].role === 'Engineer') {
            teamCards.push( `<article>
            <h2>Engineer</h2>
            <ul>
                <li>Name: ${employees[i].name}</li>
                <li>ID: ${i}</li>
                <li>Email: ${employees[i].email}</li>
                <li>GitHub: <a href="https://github.com/${employees[i].roleSpecific}">person</a></li>
            </ul>
        </article>
        `)
        } else {
            teamCards.push(`<article>
            <h2>Intern</h2>
            <ul>
                <li>Name: ${employees[i].name}</li>
                <li>ID: ${i}</li>
                <li>Email: ${employees[i].email}</li>
                <li>School: ${employees[i].roleSpecific}</li>
            </ul>
        </article>
        `)
        }
    };
    return teamCards;
}

module.exports = generateTeamCards;