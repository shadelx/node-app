const express = require('express')
const sequelize = require('../config/db');

async function readTodo(req, res) {
    //show all todo list
    const todos = await sequelize.models.todos.findAndCountAll();
    return res.status(200).json({ data: todos})
}

async function createTodo(req, res){
    const { body } = req;
    const todo = await sequelize.models.todos.create({
        user: body.user,
        body: body.body,
    });
    await todo.save()
    return res.status(201).json( { data: todo });
}

async function updateTodo(req,res){
    const { body, params: { id } }=req;
    const todo = await sequelize.models.todos.findByPk(id);
    if(!todo){return res.status(404).json({ code: 404, message:'todo not found'})}
    const updatedTodo = await todo.update({
        user: body.user,
        body: body.body,
    })
    return res.json({   data: updatedTodo});
}

async function deleteTodo(req,res){
    const { body, params: { id } }=req;
    const todo = await sequelize.models.todos.findByPk(id);
    if(!todo){return res.status(404).json({ code: 404, message:'todo not found'})}
    await todo.destroy()
    return res.json();
}

module.exports = {
    readTodo,
    createTodo,
    updateTodo,
    deleteTodo
}