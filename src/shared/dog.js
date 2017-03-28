export default class {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `wah,i am ${this.name}`;
  }

  barkInConsole() {
    /* eslint-disable no-console */
    console.log(this.bark());
    /* eslint-enable no-console */
  }
}
