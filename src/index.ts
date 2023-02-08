interface Tag {
  id: number;
  name: string;
}

interface Todo {
  id: string;
  content: string;
  isFinished: boolean;
  category: string;
  tags?: Tag[];
}

const todoList: Todo[] = [];

function addTodo(todo: Todo) {}

function getTodos(id?: string): Todo[] {
  const ret: Todo[] = [];
  return ret;
}

function updateTodo(id: string) {}

function deleteTodos(id: string) {}
