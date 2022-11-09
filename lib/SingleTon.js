class SingleTon {
  static instance;

  constructor() {
    if (SingleTon.instance) {
      return SingleTon.instance;
    }
    SingleTon.instance = this;
  }
}

export default SingleTon;
