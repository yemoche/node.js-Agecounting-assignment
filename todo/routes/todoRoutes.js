const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

//const { getAllTodos, addTodo, getUniqId, deleteUniqId} = ('../controllers/TodoController')

router.get('/',TodoController.getAllTodos);

router.post('/',TodoController.addTodo);

    
router.get('/:id', TodoController.getUniqId);
  
router.delete('/:id',TodoController.deleteUniqId);



module.exports = router;
