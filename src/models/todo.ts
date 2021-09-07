export interface BaseTodo {
  title: string;
  description: string;
  isDone: boolean;
  image: string;
}

export interface Todo extends BaseTodo {
  id: number;
}
