import { AtomEffect, DefaultValue } from 'recoil';

// TODO: Typing
export const persistEffect: AtomEffect<any> = ({ onSet, setSelf, node }: any) => {

  // Init from storage
  const stored = localStorage.getItem(node.key);
  if (stored !== null) {
    setSelf(JSON.parse(stored));
  }

  // Persist on storage on change
  onSet((newData: any) => {
    if (newData instanceof DefaultValue) {
      localStorage.removeItem(node.key);
    } else {
      localStorage.setItem(node.key, JSON.stringify(newData));
    }
  });
}
