const connection = require("./connection")

const getAllUsers = async() =>{

    const [users] = await connection.execute('SELECT * FROM gymUsers')
    return users
}

const addUser = async(users) =>{
   
 const { name , adress , CPF , AGE } = users;

 
    const query = 'INSERT INTO gymUsers( name , adress , CPF , AGE) VALUES(?,?,?,?) '
    const [createdUser] = await connection.execute(query, [name , adress , CPF , AGE])
    return createdUser
}


const deleteUser = async(id) =>{

    const removeUser = await connection.execute('DELETE FROM gymUsers WHERE id = ?' , [id])
    return removeUser;
    
    }

    const updateUser = async(id , user) =>{
        
        const { name , adress , CPF , AGE } = user
        const query = 'UPDATE gymUsers SET name = ? , adress = ? , CPF = ? , AGE = ? WHERE id = ?'
        const update = await connection.execute(query , [name , adress , CPF , AGE , id])
        return update
    } 
module.exports = {
getAllUsers,
addUser,
deleteUser,
updateUser
}