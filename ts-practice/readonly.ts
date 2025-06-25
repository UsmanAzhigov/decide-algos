// type Keys = keyof typeof todo;
// type Values = typeof todo[Keys];

type Todo = {
  title: string;
  description: string;
  description1: string;
};

interface MyReadonly<K> {
  readonly [key: string]: K[keyof K];
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
  description1: 'string',
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
