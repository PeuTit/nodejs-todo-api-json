import { BaseTodo, Todo } from "../models/todo";
import { Todos } from "../models/todos";

// Local object
let todos: Todos = {
  1: {
    id: 1,
    title: "Do laundry",
    description: "I need to do the laundry before packing my things",
    isDone: false,
    image: "https://img.icons8.com/small/16/000000/washing-machine.png",
  },
  2: {
    id: 2,
    title: "Pack my things",
    description: "Let's go Romania!!!",
    isDone: false,
    image: "https://img.icons8.com/small/16/000000/suitcase.png",
  },
};

// Create
export const create = async (newTodo: BaseTodo): Promise<Todo> => {
  const id = new Date().valueOf();

  todos[id] = {
    id,
    ...newTodo,
  };

  return todos[id];
};

// Read
export const findAll = async (): Promise<Todo[]> => Object.values(todos);

export const find = async (id: number): Promise<Todo> => todos[id];

// Update
export const update = async (
  id: number,
  updatedTodo: BaseTodo
): Promise<Todo | null> => {
  const todo = await todos[id];

  if (!todo) {
    return null;
  }

  todos[id] = { id, ...updatedTodo };

  return todos[id];
};

// Delete
export const remove = async (id: number): Promise<void | null> => {
  const todo = await find(id);

  if (!todo) {
    return null;
  }

  delete todos[id];
};
