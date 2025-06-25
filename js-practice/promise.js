const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve('Данные получены!');
      } else {
        reject('Ошибка при получении данных.');
      }
    }, 1000);
  });
};

getData()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const promise = new Promise((resolve, reject) => {
  resolve();
});

console.log(promise.then((result) => console.log(result)));
