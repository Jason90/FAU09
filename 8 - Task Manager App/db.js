/**
 * localStorage=database
 * item=table
 */
class DbLocalStorage {
  constructor(key) {
    this.key = key;
  }

  select() {
    let items = [];
    let data = localStorage.getItem(this.key);
    if (data !== null) {
      //todo: return array, Json string or Json object？
      items = JSON.parse(data);
    }

    return items;
  }

  selectByIndex(index) {
    let items = this.select();
    if (items !== null && items.length > 0) {
      return items[index];
    } else {
      return null;
    }
  }

  insert(value) {
    let items = this.select();
    items.push(value);

    localStorage.setItem(this.key, JSON.stringify(items));
  }

  update(oldValue, newValue) {
    let items = this.select();
    const index = items.indexOf(oldValue);
    items[index] = newValue;

    localStorage.setItem(this.key, JSON.stringify(items));
  }

  delete(value) {
    let items = this.select();
    const index = items.indexOf(value);
    items.splice(index, 1);

    localStorage.setItem(this.key, JSON.stringify(items));
  }

  truncate() {
    localStorage.removeItem(this.key);
  }
}
export default DbLocalStorage;
