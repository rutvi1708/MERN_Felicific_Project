const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-express.js')
const AdminBroMongoose = require('admin-bro-mongoose')

const mongoose = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
})


const router = AdminBroExpress.buildRouter(adminBro)

module.exports = router