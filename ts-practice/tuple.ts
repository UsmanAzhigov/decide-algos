type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type result = TupleToObject<typeof tuple>;
