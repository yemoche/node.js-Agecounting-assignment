const TodoService = require('../services/TodoService');
const { static } = require('express');
const Todo = require('../models/mongoose/Toddo');


module.exports = class TodoController {
  static async getAllTodos(req, res) {
    try {
      let allTodos = await TodoService.getAllTodos(req, res);

       res.status(200).json({ code: 'SUCCESS', 'success': allTodos, error: null });
    } catch (error) {
      res
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot access the database now' });
    }
  }
  static async addTodo(req, res) {
    try {
      let description = req.body.description
      console.log(description);
     let newTodo = await TodoService.addTodo(req.body.description);

     //res.send(`User with the name ${user.firstName} added to the database`);

     
     res.status(201).json({"code" :"SUCCESS", "success": newTodo, "error":null});
      
    } catch (error) {
      res.status(500).json({code: 'FAILED', success: null, error: error.message || "you cannot create todo for now" });
     
     }
      
    }
    static async getUniqId(req, res) {
      try {
        let todo = await TodoService.getUniqId(req.params.id)
        console.log(todo);

          res.status(200).json({"code" :"SUCCESS", 'success': todo, "error":null});
        
      } catch (error) {
        res.status(400).send({"message" : "You are missing vital credentials"})
      }
    }

    static async deleteUniqId(req, res) {
      try {
        let itemsDeleted = await TodoService.deleteUniqId(req.params.id);

        // if(itemsDeleted) {
        
         res.status(201).send({"message":"An item has been deleted" })

         res.status(200).json({ code: 'SUCCESS', 'success': itemsDeleted, error: null });
        
         
         //res.status(201).json({"code" :"SUCCESS", "success": itemsDeleted, "error":null});

      // } else {
      //   res.status(404).json({"code": "NOT FOUND", "success": {}, "error": true})
      //   }
      } catch (error) {
        //res.status(404).json({"code" :"NOT FOUND", "success" : {},"error": true});
         res.status(500).json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
    }
   }
  };
  



   