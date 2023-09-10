const { Schema,model } = require('mongoose')

const comentariosSchema =new Schema({
    Nombre:String,
    Rating:Number,
    year:Number,
    comentarios:String,
    video:[{type:Schema.Types.ObjectId, ref:'video'}]
})

module.exports = model('comentario',comentariosSchema)