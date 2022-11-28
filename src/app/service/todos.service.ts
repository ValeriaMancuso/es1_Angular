import { Todo } from "../models/todo";

export async function getTodos(): Promise<Todo[]> {
  return (await fetch('assets/db.json')).json();

}

