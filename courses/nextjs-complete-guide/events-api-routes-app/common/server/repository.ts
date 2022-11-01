import fs from 'fs';

export class Repository<T extends { [prop: string]: any }> {

  private items: T[] = [];
  private ids: { [id: string | number]: number } = {};

  constructor(
    private filePath: string,
    private idKey: string = 'id',
  ) {
    this.init();
    this.deserialize();
  }

  destroy() {
    this.serialize();
  }

  async getItems(): Promise<T[]> {
    return this.items;
  }

  async getItemById(id: string): Promise<T | null> {
    const index = this.ids[id] ?? null;
    if (index === undefined) return null;
    return this.items[index] ?? null;
  }

  async addItem(item: T) {
    this.items.push(item);
    const index = this.items.length - 1;
    const id = (item as any)[this.idKey];
    this.ids[id] = index;
    this.serialize();
  }

  async getFilteredItems(filter: (item: T) => boolean): Promise<T[]> {
    return this.items.filter(filter);
  }

  async getFilteredItem(filter: (item: T) => boolean): Promise<T | null> {
    return this.items.find(filter) ?? null;
  }

  private deserialize() {
    const fileContent = fs.readFileSync(this.filePath, { encoding: 'utf-8' });
    this.items = JSON.parse(fileContent) as T[];

    this.ids = {};
    this.items.forEach((item: any, index) => {
      const id = item[this.idKey];
      this.ids[id] = index;
    });
  }

  private async serialize() {
    const fileContent = JSON.stringify(this.items);
    fs.writeFileSync(this.filePath, fileContent);
  }

  private async init() {
    try {
      fs.accessSync(this.filePath);
      this.deserialize();
    } catch (error) {
      fs.writeFileSync(this.filePath, '[]');
    }
  }
}
