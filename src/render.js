
const render = ({userList, users, userMap, curr}) => {
    const html = `
        ${ users.map( (user, idx) => `
            <li>
             <a href = '#${idx}'>${user.name}</a>
             ${
                    curr === idx ? `
                    <ul>
                        ${
                            userMap[user.name].map( user =>
                                `<li>
                                ${JSON.stringify(user)}
                                </li>
                                `)
                        }
                    </ul>` : ''
               }
            </li>
        `).join('')}
    `;
   userList.innerHTML = html;
};

module.exports = render;