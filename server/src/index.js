const app = require('./app');
const port = 27017;

app.listen(port, ()=>{
    console.log(`Server is Running at http://localhost:${port}`)
})