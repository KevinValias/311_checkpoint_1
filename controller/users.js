const users = require('./../data/index')
let counter = users.length+1

// listUsers  
const listUsers = (req, res) => {
res.json(users)
}

// showUser
const showUser = (req, res) => {
    res.json(users.id)
}

// createUser
const createUser = (req, res) => {
    users.push({id: counter++, ...req.body})
    res.json(users[users.length -1])
}

// updateUser
const updateUser = (req, res) => {
    let foundUser = users.find(user => user.id === parseInt(req.params.id))
    foundUser.name = req.body.name ? req.body.name : foundUser.name
    foundUser.username = req.body.username ? req.body.username : foundUser.username
    foundUser.email = req.body.email ? req.body.email : foundUser.email
    foundUser.address = req.body.address ? req.body.address : foundUser.address
    foundUser.phone = req.body.phone ? req.body.phone : foundUser.phone
    foundUser.website = req.body.website ? req.body.website : foundUser.website
    foundUser.company = req.body.company ? req.body.company : foundUser.company
     res.json(foundUser)
}

//  deleteUser
const deleteUser = (req, res) => {
    let foundUser = users.find(user => user.id === parseInt(req.params.id))
    if (foundUser) {
        foundUser.isActive = false
        res.send(`${req.params.id} is gone`)
    } else {
        res.status(400).json({message: `No user with the id of ${req.params.userId}`})
    }
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser,
} 