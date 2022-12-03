const express =require('express')
const router = express.Router()

const {
    readTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    readTodo
} = require('../controllers/todos')

router.get('/', readTodos)
router.post('/', createTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)
router.get('/:id', readTodo)

module.exports = router