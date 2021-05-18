const Mongoose = require("mongoose");


const todoSchema = Mongoose.Schema({
    uniqueId: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require: true
    },
    isCompleted: {
        type:Boolean,
        default:false
    },
    
});

const Todo = Mongoose.model('todos', todoSchema)

module.exports = Todo;