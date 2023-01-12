teamCards = []

const generateTeamCards = function (employees) {
    employees.map(employee => {
        console.log(employee);
        if (employee.getRole() === 'Manager') {
            teamCards.push(`\n
                <article>
                    <h2>${employee.name}</h2>
                    <ul>
                        <li>Role: ${employee.getRole()}</li>
                        <li>ID: ${employee.id}</li>
                        <li>Email: ${employee.email}</li>
                        <li>Office Number: ${employee.office}</li>
                    </ul>
                </article>`)
        } else if (employee.getRole() === 'Engineer') {
            teamCards.push(`\n
                <article>
                    <h2>${employee.name}</h2>
                    <ul>
                        <li>Role: ${employee.getRole()}</li>
                        <li>ID: ${employee.id}</li>
                        <li>Email: ${employee.email}</li>
                        <li>GitHub: <a href="${employee.getGitHub()}">${employee.gitHub}</a></li>
                    </ul>
                </article>
        `)
        } else {
            teamCards.push(`\n 
                <article>
                    <h2>${employee.name}</h2>
                    <ul>
                        <li>Name: ${employee.getRole()}</li>
                        <li>ID: ${employee.id}</li>
                        <li>Email: ${employee.email}</li>
                        <li>School: ${employee.getSchool()}</li>
                    </ul>
                </article>`
                )
        }
    });
    return teamCards.join('');
}

module.exports = generateTeamCards;