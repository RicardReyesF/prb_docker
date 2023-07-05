const server = require('./src/app')
const { Characters, Films } = require('./src/database');

Films.list().then(res => console.log(res))


server.listen(7004,() =>{
    console.log('Conectado por el puerto 7004');
})