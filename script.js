// function as constructor
// function Book(name, author, year) {
//   this.name = name;
//   this.author = author;
//   this.year = year;
//   this.getInfo = () => {
//     console.log(`Knygą ${this.name} parašė ${this.author}`);
//   };
//   this.getBookAge = () => {
//     const date = new Date();
//     const age = date.getFullYear() - this.year;
//     console.log(`Knygai yra ${age} metai`);
//   };
// }

// class as constructor
class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    console.log(`Knygą ${this.name} parašė ${this.author}`);
  }

  getBookAge() {
    const date = new Date();
    const age = date.getFullYear() - this.year;
    console.log(`Knygai yra ${age} metai`);
  }
}

const harryPotterBook = new Book("Haris Poteris", "J.K. Rowling", 1999);

harryPotterBook.getInfo();
harryPotterBook.getBookAge();

// Uzduotis nr. 2

class Movie {
  constructor(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = budget;
    this.income = income;
  }

  getIntroduction() {
    console.log(`${this.name} ${this.year} ${this.director}`);
  }

  getProfit(postFix) {
    const profit = this.income - this.budget;
    console.log(`Profit is: ${profit} ${postFix}`);
  }

  setName(value) {
    this.name = value;
  }
}

const movieName = "Matrix: Reloaded";
const authors = "Lana Wachowski and Lilly Wachowski";
const matrica = new Movie(movieName, 2003, authors, 150, 750);

matrica.getProfit("millions");

matrica.setName("Matrix: Resurrection");

// Uzduotis nr. 3

class Animal {
  constructor(color) {
    this.color = color;
  }

  getSpeed() {
    console.log("147 km/h");
  }
}

class Rabbit extends Animal {
  constructor(name, color) {
    super(color);

    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit", "Grey");
rabbit.getSpeed();
