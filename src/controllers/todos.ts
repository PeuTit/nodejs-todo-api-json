import express, { Request, Response } from "express";
import { BaseTodo, Todo } from "../models/todo";
import * as TodoServices from "../services/todos";

// Router definition
export const todosController = express.Router();

// GET todos
todosController.get("/", async (_req: Request, res: Response) => {
  try {
    const todos: Todo[] = await TodoServices.findAll();

    res.status(200).send(todos);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET todos/:id
todosController.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const todo: Todo = await TodoServices.find(id);

    if (!todo) return res.status(200).json(todoNotFound);

    return res.status(200).send(todo);
  } catch (e: any) {
    return res.status(500).send(e.message);
  }
});

// POST todos
todosController.post("/", async (req: Request, res: Response) => {
  try {
    const todo: BaseTodo = req.body;

    const newTodo = await TodoServices.create(todo);

    return res.status(201).json(newTodo);
  } catch (e: any) {
    return res.status(500).send(e.message);
  }
});

// PUT todos/:id
todosController.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const newTodo: Todo = req.body;
    const existingTodo: Todo = await TodoServices.find(id);

    if (!existingTodo) return res.status(200).json(todoNotFound);

    const updatedTodo = await TodoServices.update(id, newTodo);

    return res.status(200).json(updatedTodo);
  } catch (e: any) {
    return res.status(500).send(e.message);
  }
});

// DELETE todos/:id
todosController.delete("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const existingTodo: Todo = await TodoServices.find(id);

    if (!existingTodo) return res.status(200).json(todoNotFound);

    await TodoServices.remove(id);

    return res.sendStatus(204);
  } catch (e: any) {
    return res.status(500).send(e.message);
  }
});

// Helper methods
const todoNotFound = {
  status: "Not found!",
};
