const { v4: uuidv4 } = require('uuid');
//const { prototype } = require('../controllers/TodoController');
//const TodoService = require('../services/TodoService');
const Todo = require('../models/mongoose/Toddo');
const config = require('../configs/configs')

const Model = require('../models/sequelize');

// CRUD
//const todosDB = [];

module.exports = class TodoService {
  /**
   *
   * @param {string} description The description of the Todo
   */

  
  static async addTodo(description) {
  
  //   let newTodo = new Todo({
  //   uniqueId: uuidv4(),
  //   description,
  //   isCompleted: false

  // });
  // return newTodo.save();
  let newTodo = Model.Todo.create({
    uniqueId: uuidv4(),
    description,
    isCompleted: false

   });

    return newTodo;
  };
      // return todosDB.sort((a, b) => {
      //   var nameA = a.description.toUpperCase();
      //   var nameB = b.description.toUpperCase();
      //   if (nameA < nameB) {
      //     return -1;
      //   }
      //   if (nameA > nameB) {
      //     return 1;
      //   }
      //   return 0;
      // });
        //return todosDB.sort((a,b) => (a.description > b.description) ? 1 : -1);

    static async getAllTodos(description){
        //return Todo.find().sort({ description: 1 });
        
        const allTodos = await Model.Todo.findAll();
        return allTodos
        console.log(allTodos())
        
        // return Model.Todo.findAll({
        //   where: {
        //     description,
        //   }
        // }); //Sequelize on Mysql
        //return Todo.findAll();
    }
       

    static async getUniqId(id) {
      const unitIdentifier = await Model.Todo.findOne({ where: { uniqueid: id } });
      return unitIdentifier;
      unitIdentifier();
      // return Model.Todo.findbypk({ uniqueId: id});//mongoose approach
    }

    // static async getTodoByProperty(property) {
    //   return Todo.findOne({ uniqueId:id});
    // }

    static async deleteUniqId(id) {
      //return Todo.findOneAndDelete(id);
      //return Todo.findOneAndRemove({ uniqueId: id});//Mongoose approach
       let newDeleteId = await Model.Todo.destroy({ where: { id: id } });
        //sequelize approach, one item in the table
      // let newDeleteId = await Model.Todo.destroy({uniqueid: id})
      //  truncation: true;//sequelize approach delete all items
       return newDeleteId;
       
       
    }

  };
    
    //Mongoose Approach
  // static async addTodo(description) {
  //       //const user = req.body

  //       //todosDB.push({...user, uniqueId: uuidv4(), description:description, isCompleted:false });


  //       let newTodo = {
  //           "uniqueId": uuidv4(),
  //           "description": description,
  //           "isCompleted": false
  //         }
  //       todosDB.push(newTodo);
  //       return newTodo;
        
  // };

  // static getUniqId (todoId) {
  //       let foundTodo = todosDB.find((todo) => todo.uniqueId == todoId)
  //       return foundTodo;
  // };

//   static deleteUniqId(todoId) {

//       let toDelete = todosDB.find((todo) => todo.uniqueId == todoId)
//       let index = todosDB.indexOf(toDelete)
//       if (index > -1) {
//       todosDB.splice(index, 1) 
//     }
//     return toDelete;
//   }
// };  