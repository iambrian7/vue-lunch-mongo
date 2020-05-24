const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  
  uri: 'mongodb://brian123:brian123@cluster-free1-shard-00-00-7juzj.mongodb.net:27017,cluster-free1-shard-00-01-7juzj.mongodb.net:27017' + 
',cluster-free1-shard-00-02-7juzj.mongodb.net:27017/test?ssl=true&replicaSet=cluster-free1-shard-0&authSource=admin&retryWrites=true',
  // db: {
  //   database: process.env.DB_NAME || 'tabtracker',
  //   user: process.env.DB_USER || 'tabtracker',
  //   password: process.env.DB_PASS || 'tabtracker',
  //   options: {
  //     dialect: process.env.DIALECT || 'sqlite',
  //     host: process.env.HOST || 'localhost',
  //     storage: path.resolve(__dirname, '../../tabtracker.sqlite')
  //   }
  // },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
