const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
  .then(() => console.log('success'))
  .catch(() => console.log('error'));

setTimeout(() => controller.abort(), 100);
