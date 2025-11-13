class EventEmitter {
  map = new Map();

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    let value = this.map.get(eventName);
    if (value) {
      value.push(callback);
      this.map.set(eventName, value);
    } else {
      this.map.set(eventName, [callback]);
    }

    return {
      unsubscribe: () => {
        let value = this.map.get(eventName);
        let idx = value.indexOf(callback);
        value.splice(idx, 1);
        this.map.set(eventName, value);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    let fun = this.map.get(eventName);
    let ans = [];
    if (fun) {
      for (let i = 0; i < fun.length; i++) {
        ans.push(fun[i](...args));
      }
    }
    return ans;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
