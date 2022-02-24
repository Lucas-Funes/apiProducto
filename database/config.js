const mongoose = require('mongoose');

const dbConection =  async () =>{
    try{

        await mongoose.connect( process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindandModify: true
        })

        console.log('Base de datos funcionando')

    } catch(error){
        console.log(error);
        throw new Error('Erro a la hora de iniciar la base de datos')
    }
}


module.exports = {
    dbConection
}