export default class Decorator {
  constructor(decorated) {
    this.decorated = decorated;
  }

  output(cities) {
    return this.decorated.output(cities);
  }
}
