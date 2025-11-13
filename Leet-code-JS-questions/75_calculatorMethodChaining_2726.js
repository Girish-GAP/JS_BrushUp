class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.num = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.num = this.num + value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.num = this.num - value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.num = this.num * value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    this.num = this.num / value;
    if (value === 0) {
      throw "Division by zero is not allowed";
    }
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.num = this.num ** value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.num;
  }
}
