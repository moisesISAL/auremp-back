module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb+srv://moises:Auremp2021@strapi.anh9r.mongodb.net/Strapi?retryWrites=true&w=majority',
        srv: true,
        port: 27017,
        database: 'Strapi',
      },
      options: {
        authenticationDatabase: null,
        ssl: true
      },
    },
  },
})
