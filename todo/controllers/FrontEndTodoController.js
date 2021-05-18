const TodoService = require('../services/TodoService');

module.exports = class FrontEndTodoController {
  static async getAllTodos(req, res) {
    try {
      let allTodos = await TodoService.getAllTodos();
      res.render('maincrud', { todos: allTodos });
    } catch (error) {
      response.status(500).json({
        code: 'FAILED',
        success: null,
        error: error.message || 'Oops you cannot list all todos at the moment'
      });
    }
  }
  static async addTodo(req, res) {
    try {
      let description = req.body.description
      console.log(description);
     let newTodo = await TodoService.addTodo(req.body.description);

     res.render('maincrud', { todos: newTodo });
      
    } catch (error) {
      res.status(500).json({code: 'FAILED', success: null, error: error.message || "you cannot create todo for now" });
     
     }
      
    }

    static async deleteUniqId(req, res) {
      try {
        let itemsDeleted = await TodoService.deleteUniqId(req.params.id);
        
        res.render('maincrud', { todos: itemsDeleted });
       
        
         res.status(201).send({"message":"An item has been deleted" })

         res.status(200).json({ code: 'SUCCESS', 'success': itemsDeleted, error: null });
        
      } catch (error) {
         res.status(500).json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
    }
   }
  };
  
