const bcrypt = require('bcryptjs');



const users = [
    {
        name:'Muhammad Hassan Atiq',
        email:'admin123@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
},
{
    name:'Muhammad Hussain',
    email:'hussain123@example.com',
    password:bcrypt.hashSync('123456',10)
},
]

module.exports = users
    
