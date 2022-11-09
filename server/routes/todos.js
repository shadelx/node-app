const express =require('express')
const router = express.Router()

const {
    readTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todos')

router.get('/', readTodo)
router.post('/', createTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)

module.exports = router