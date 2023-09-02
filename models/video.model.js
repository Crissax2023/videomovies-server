const { Schema,model } = require('mongoose')

const videoSchema =new Schema({
    title:String,
    year: Number,
    director: String,
    duracion:String,
    genero: String,
    url:String,
    comentarios:[{type:Schema.Types.ObjectId, ref:'comentario'}]
})

module.exports = model('video',videoSchema)