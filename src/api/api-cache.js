class ApiCache {
  constructor(store = null) {
    this.store = store || localStorage;
  }

  put(key, value, daysToExpire = 7) {
    const expires = new Date();
    expires.setDate(expires.getDate() + daysToExpire);

    this.store.setItem(key, JSON.stringify({ value, expires }));
  }

  get(key) {
    const item = JSON.parse(this.store.getItem(key));

    if (item && (new Date(item.expires)).getTime() > (new Date()).getTime()) {
      return item.value;
    }

    return null;
  }
}

export { ApiCache };
