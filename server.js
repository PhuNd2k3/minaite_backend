require('dotenv').config()
process.env.TZ = 'Europe/London'
const http = require('http')
const app = require('./app')
const port = process.env.PORT || 8000

const server = http.createServer(app)

server.listen(port, function (error) {
    if (error) {
        console.log('Server start failed :(', error)
    } else {
        console.log(`Server listening on port ${port}...`)
    }
})
