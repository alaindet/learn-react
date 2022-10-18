export abstract class LocalStorage {
  store<T = any>(data: T, key: string): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  fetch<T = any>(key: string): T | null {
    const _data = localStorage.getItem(key);
    if (_data === null) return null;
    return JSON.parse(_data) as T;
  }

  exists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  clear(key: string): void {
    localStorage.removeItem(key);
  }
}
