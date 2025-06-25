// // 1.5 алгоритм

// // Реализовать структуру данных MaxStack, в которой есть методы:
// // pop() – удаляет и возвращает последний добавленный элемент за O(1), кидает исключение или возвращает ошибку, если стек пустой
// // push(value) – добавляет элемент в стек за O(1)
// // max() – возвращает максимальное значение среди всех элементов стека за O(1), кидает исключение или возвращает ошибку, если стек пустой
// // Пример:
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10
// // 11
// // 12
// // 13
// // MaxStack stack;
// stack.push(2);
// // max = 2, stack = [2]
// stack.push(1);
// // max = 2, stack = [2, 1]
// stack.push(3);
// // max = 3, stack = [2, 1, 3]
// stack.push(3);
// // max = 3, stack = [2, 1, 3, 3]
// stack.pop(); // 3
// // max = 3, stack = [2, 1, 3]
// stack.pop(); // 3
// // max = 2, stack = [2, 1]
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// stack = MaxStack()
// stack.push(2)
// # max = 2, stack = [2]
// stack.push(1)
// # max = 2, stack = [2, 1]
// stack.push(3)
// # max = 3, stack = [2, 1, 3]
// stack.push(3)
// # max = 3, stack = [2, 1, 3, 3]
// stack.pop() # 3
// # max = 3, stack = [2, 1, 3]
// stack.pop() # 3
// # max = 2, stack = [2, 1]
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// /**
//  * Реализовать структуру данных MaxStack, в которой есть методы:
//  * pop() – удаляет и возвращает последний добавленный элемент за O(1),
//  *         кидает исключение или возвращает ошибку, если стек пустой
//  * push(value) – добавляет элемент в стек за O(1)
//  * max() – возвращает максимальное значение среди всех элементов стека за O(1),
//  *         кидает исключение или возвращает ошибку, если стек пустой
//  */

// // code here

// const stack = new MaxStack();
// stack.push(2);
// // max = 2, stack = [2]
// stack.push(1);
// // max = 2, stack = [2, 1]
// stack.push(3);
// // max = 3, stack = [2, 1, 3]
// stack.push(3);
// // max = 3, stack = [2, 1, 3, 3]
// stack.pop(); // 3
// // max = 3, stack = [2, 1, 3]
// stack.pop(); // 3
// // max = 2, stack = [2, 1]

class MaxStack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop();
  }
  max() {
    return Math.max(...this.stack);
  }
}

const stack = new MaxStack();
stack.push(2);
console.log(stack);
// max = 2, stack = [2]
stack.push(1);
console.log(stack);
// max = 2, stack = [2, 1]
stack.push(3);
console.log(stack);

// max = 3, stack = [2, 1, 3]
stack.push(3);
console.log(stack);
// max = 3, stack = [2, 1, 3, 3]
stack.pop(); // 3
console.log(stack);
// max = 3, stack = [2, 1, 3]
stack.pop(); // 3
console.log(stack.max());
// max = 2, stack = [2, 1]
