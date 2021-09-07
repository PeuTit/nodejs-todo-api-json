import express, { Request, Response } from "express";
import { BaseTodo, Todo } from "../models/todo";
import * as TodoServices from "../services/todos";

// Router definition
export const todosController = express.Router();

// GET todos
todosController.get("/", async (req: Request, res: Response) => {
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

    if (!todo) {
      return res.status(200).send("Todo not found!");
    }

    res.status(200).send(todo);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST todos
todosController.post("/", async (req: Request, res: Response) => {
  try {
    const todo: BaseTodo = req.body;

    const newTodo = await TodoServices.create(todo);

    res.status(201).json(newTodo);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// PUT todos/:id
todosController.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const newTodo: Todo = req.body;
    const existingTodo: Todo = await TodoServices.find(id);

    if (!existingTodo) {
      return res.status(200).send("Todo not found!");
    }

    const updatedTodo = await TodoServices.update(id, newTodo);

    res.status(200).json(updatedTodo);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// DELETE todos/:id
todosController.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);

    await TodoServices.remove(id);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
