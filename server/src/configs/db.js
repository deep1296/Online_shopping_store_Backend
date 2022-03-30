const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect('mongodb+srv://meeshoTeam:meesho@cluster0.ql4yq.mongodb.net/Meesho_database?retryWrites=true&w=majority')
}

module.exports = connect