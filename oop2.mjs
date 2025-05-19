import { Worker } from "./oop1.mjs";

class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }

  getSalary() {
    return `Зарпалата: ${this.days * this.rate * this.workers}`;
  }
}

const boss = new Boss("Maks", "Saimon", 5000, 28, 8);
console.log(boss.name);
console.log(boss.surname);
console.log(boss.getFullName());
console.log(boss.rate);
console.log(boss.days);
console.log(boss.workers);
console.log(boss.getSalary());
