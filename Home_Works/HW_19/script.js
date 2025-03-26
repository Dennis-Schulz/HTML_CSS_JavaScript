const counter = {
  count: 0,
  increment() {
    this.count += 1;
  },
  decrement() {
    this.count -= 1;
  },
}

counter.increment();
console.log(counter.count);
counter.decrement();
console.log(counter.count);