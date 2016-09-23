class ApiCache {
  constructor(store = null) {
    this.store = store || localStorage;
  }

  put(key, value) {
    this.store.setItem(key, JSON.stringify(value));
  }

  get(key) {
    return this.store.getItem(key);
  }
}

export { ApiCache };
