import Application from './app'
const port = 3000
const database = 'mongodb://localhost:27017/shop';
new Application({ port, database })