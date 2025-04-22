const express = require('express');
const app = express();
const cors = require('cors')
const userRoute = require('./routes/user.route.js')

require("./config/db");

app.use( express.urlencoded({extended:true}))
app.use( express.json() )
app.use( cors() );


// User Route
app.use( '/api/users', userRoute )






// Home Route
app.get('/', (req, res)=>{
    res.status(200).send('Server is Running its from 200 statuscode')
})


// Error Route
app.use((req, res, next )=>{
    res.status(404).json({
        'status' : '404',
        'message' : '404 Bad Request'
    })
})

// Server Error
app.use((err, req, res, next) => {
    console.log(err.message)
    res.status('500').json({
        'status' : '500',
        'message' : 'Server is Broken'
    })

})

module.exports = app