type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest,
]
  ? Equal<First, U> extends true // тут идет сравнение первого типа с тем, которым мы прокинули
    ? true
    : Includes<Rest, U> // тут уже рекурсивно проверяем остальные, получается каждый первый приходит но мы его сразу исключаем через infer
  : false;

type isPillarMen = Includes<
  ['Kars', 'Esidisi', 'Wamuu', 'Santana', 'Dio'],
  'Dio'
>; // expected to be `false`
