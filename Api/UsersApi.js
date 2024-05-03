const axios = require('axios');
const api = axios.create({
    baseURL:"http://localhost:8000/users/",
    headers: {
        'Content-Type': 'application/json'
    }
})
console.log('api')
exports.getUserById = (id) => {
    return api.get(`/${id}`)
}

exports.addUser = (user) => {
    return api.post('/',user)
}

exports.updateUser = (user) => {
    return api.put(`/${id}`)
}

exports.DeleteUser  = (user)=> {
    return api.delete(`/${id}`)
}