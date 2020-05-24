const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
const morgan = require('morgan')
// const {sequelize} = require('./models')
// const config = require('./configold/config')
// var mongoose = require('mongoose');

// // connection string using mongoose:
// // connection string using mongoose:

// var uri = 'mongodb://brian123:brian123@cluster-free1-shard-00-00-7juzj.mongodb.net:27017,cluster-free1-shard-00-01-7juzj.mongodb.net:27017' + 
// ',cluster-free1-shard-00-02-7juzj.mongodb.net:27017/test?ssl=true&replicaSet=cluster-free1-shard-0&authSource=admin&retryWrites=true'

// // var uri = 'mongodb://iambrian:bkcbkc07!@' +
// //   'MY_SERVER-shard-00-00-clv3h.mongodb.net:27017,' +
// //   'MY_SERVER-shard-00-01-clv3h.mongodb.net:27017,' +
// //   'MY_SERVER-shard-00-02-clv3h.mongodb.net:27017/MY_DATABASE' +
// //   'ssl=true&replicaSet=MY_REPLICASET_NAME-shard-0&authSource=MY_ADMIN_DATABASE';

// mongoose.connect(uri);
// // var db = mongoose.connection;


const app = express()
// app.use(morgan('combined'))
app.use(express.json())
// app.use(cors())

// require('./passport')
// API
configureAPI(app)

// require('./routes')(app)

app.listen(config.port)
    console.log(`Server started on port ${config.port}`)