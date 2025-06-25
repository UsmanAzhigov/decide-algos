// T extends Promise<infer U> — проверяется, является ли T промисом.

// infer U — говорит TypeScript: “если T — промис, вытащи из него тип, который внутри, и назови его U”.

// ? U : T — если T действительно промис, верни U (внутренний тип), иначе верни T как есть.

type ExampleType = Promise<string>;

type MyAwaited<T> = T extends Promise<infer U> ? U : T;

type Result = MyAwaited<ExampleType>; // string
