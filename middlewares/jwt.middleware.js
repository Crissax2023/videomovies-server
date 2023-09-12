const {expressjwt:jwt} =require('express-jwt')


const isAuthenticated = jwt({
    secret: process.env.SECRET_KEY,
    algorithms:['HS256'],
    requestProperty:'payload',
    getToken:getTokenfromHeaders
})

function getTokenfromHeaders (req) {

    if(req.headers.authorization && req.headers.authorization.split(' ')[0]==='Bearer')
    {
        return req.headers.authorization.split(' ')[1]
    }

    return null
}

module.exports = {
    isAuthenticated
}
