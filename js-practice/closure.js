function closure() {
  let count = 0;

  return function () {
    count++; // тут пример замыкания, так как вложенная функция запомнила внешнюю переменную из родительской функции
    return count;
  };
}

const counter = closure();
console.log(counter());
