require('dotenv').config()

const config = {
    production:{
        SECRET: process.env.SECRET_KEY,
        DATABASE: process.env.MONGODB_URI

    },
    default:{
        SECRET: 'env',
        DATABASE: 'env'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}