import SingleTon from "./SingleTon.js";

class Container extends SingleTon {
  dependencies = {};
  factories = {};

  constructor(...args) {
    super();
    if (args.length > 1) this.set(args);
  }

  set(args) {
    args
      .filter((arg) => typeof arg === "function")
      .forEach((v) => {
        const [line] = v.toString().split("\n");
        const [, variable] = line.split(" ");
        console.log(variable);
        this.factory(variable, v);
      });

    args
      .filter((arg) => typeof arg !== "function")
      .forEach((obj) => {
        for (const key in obj) {
          this.dependencies[key] = obj[key];
        }
      });
  }

  get(variable) {
    if (!this.dependencies[variable]) {
      const factory = this.factories[variable];
      this.dependencies[variable] = factory && this.inject(factory);
      if (!this.dependencies[variable]) {
        throw new Error(`Cannot find module : ${variable}`);
      }
    }
    return this.dependencies[variable];
  }

  register(prop, dep) {
    this.dependencies[prop] = dep;
  }

  factory(prop, dep) {
    this.factories[prop] = dep;
  }

  inject(factory) {
    console.log(factory);
    const args = this.getParameters(factory).map((v) => this.get(v));
    // TODO : 여기서 인스턴스 생성을 singleTon 으로가능할까..?
    // 하지만 하드코딩으로 싱글톤으로 구현하고싶지않다..
    // 그렇다고 상속으로 받아서 하기에도 그렇다..
    // ... 방법이없을까 proxy Reflect 으로 응용하면 어떻게 될거같은데..
    return new factory(...args);
  }

  getParameters(factory) {
    const [constructor] = factory
      .toString()
      .split("\n")
      .filter((v) => v.indexOf("constructor") > 0);

    const start = constructor.indexOf("(");
    const end = constructor.indexOf(")");
    const parameters = constructor.substring(start + 1, end).replace(/\s/g, "");

    return !parameters.length ? [] : parameters.split(",");
  }
}

export default Container;
