
const gymModules = require('../modules/gymModules')

const getAllUsers = async (_request , response) =>{
const users = await gymModules.getAllUsers();
return response.status(200).json(users)
}

const addUser = async(request,response) =>{
const createduser = await gymModules.addUser(request.body);
return response.status(201).json(createduser)
}

const deleteUser = async(request, response) =>{
    const {id} = request.params;
    await gymModules.deleteUser(id)
    return response.status(204).json()
}

const updateUser = async(request, response) => {

    const {id} = request.params;

    await gymModules.updateUser(id,request.body);
    return response.status(204).json()

}

module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser
}