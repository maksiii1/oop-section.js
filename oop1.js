class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return `Зарпалата: ${this.days * this.rate}`;
  }

  getFullName() {
    return `Имя: ${this.name}, Фамилия ${this.surname}`;
  }
}

const worker = new Worker("Maks", "Saimon", 5000, 28);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName());
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
