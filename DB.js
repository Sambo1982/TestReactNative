var RNDBModel = require('react-native-db-models')

var DB = {
    "app": new RNDBModel.create_db('app'),
    "colors": new RNDBModel.create_db('colors'),
}

module.exports = DB