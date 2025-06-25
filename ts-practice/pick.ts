interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// наследуем ключи T для K, чтобы ограничить второй аргумент дженерика типа первого аргумента
type MyPick<T, K extends keyof T> = {
  [key in K]: T[K];
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  description: '', // это правильно
};
