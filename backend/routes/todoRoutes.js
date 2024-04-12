const express = require('express');
const router = express.Router();
const { createDB,createTable,createList, showTodos, singleTodo, updateTodo, deleteSingleTodo } = require('../controllers/todoController');



//Routes

// /api/job/create
router.get('/create/database', createDB);
router.get('/create/table', createTable);
router.post('/create/list', createList);
router.get('/show/todos', showTodos);
router.get('/todo/:id', singleTodo);
router.put('/update/todo/:id', updateTodo);
router.delete('/delete/todo/:id', deleteSingleTodo);



module.exports = router;