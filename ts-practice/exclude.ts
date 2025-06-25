type MyExclude<T, U> = T extends U ? never : T; // never потому что он обозначает что такого типа не существует

type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
