// bind

const person = {
  name: 'Usman',
  sayHello() {
    console.log(`Привет, я ${this.name}`);
  },
};

const say = person.sayHello.bind(person);

say();

// call

function greet(greeting, punctuation) {
  console.log(
    `${greeting}, я ${this.name} и мне ${this.age} лет ${punctuation}`,
  );
}

const usman = {
  name: 'USMAN',
  age: 19,
};

greet.call(usman, 'Привет', '👋'); // а тут привязываю
greet('Привет', '👋'); // не привязываю контектст

// apply

function sum(a, b) {
  console.log(this + b);
}

const num = 123;

sum.apply(num, [, 2]);
