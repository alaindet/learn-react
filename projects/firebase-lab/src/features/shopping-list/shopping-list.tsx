import { useCallback, useEffect, useState, useRef } from 'react';
import firebase from 'firebase';

import { firestore } from '../../core/firebase';
import { ShoppingListItem, ShoppingListItemUpdateDto, ShoppingListItemCreateDto } from './models';
import * as Components from './components';

export const FIREBASE_COLLECTION = 'shoppingList';

export const ShoppingListFeature = () => {

  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [item, setItem] = useState<ShoppingListItem | null>(null);
  const collection = useRef(firestore.collection(FIREBASE_COLLECTION));

  function addToItems(newItem: ShoppingListItem): void {
    const newItems = [...items, newItem];
    setItems(newItems);
  }

  function updateOnItems(newItem: ShoppingListItem): void {
    const newItems = items.map(item => item.id === newItem.id ? newItem : item);
    setItems(newItems);
  }

  function deleteFromItems(itemId: string): void {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
  }

  async function onCreate(dto: ShoppingListItemCreateDto): Promise<void> {
    let docRef: firebase.firestore.DocumentReference;
    docRef = await collection.current.add(dto);
    const id = docRef.id;
    const { name, quantity } = dto;
    addToItems({ id, name, quantity });
  };

  async function onUpdate(dto: ShoppingListItemUpdateDto): Promise<void> {
    const { id, name, quantity } = dto;
    const newItem = { name, quantity };
    await collection.current.doc(id).set(newItem);
    updateOnItems(dto);
    setItem(null);
  };

  async function onDelete(itemId: string): Promise<void> {
    await collection.current.doc(itemId).delete();
    deleteFromItems(itemId);
  };

  function onSelect(item: ShoppingListItem): void {
    setItem(item);
  }

  const transformItems = useCallback(
    (data: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
      return data.docs.map(doc => {
        const { id } = doc;
        const { name, quantity } = doc.data();
        return { id, name, quantity: +quantity };
      });
    },
    []
  );

  useEffect(() => {
    const fetchItems = async () => {
      const data = await collection.current.get();
      const fetchedItems = transformItems(data);
      setItems(fetchedItems);
    };
    fetchItems();
  }, [transformItems]);

  return (
    <>
      <h2>Shopping list</h2>
      {!!item && <Components.EditForm item={item} onSubmit={onUpdate} />}
      {!item && <Components.CreateForm onSubmit={onCreate} />}
      <Components.List items={items} onSelect={onSelect} onDelete={onDelete} />
    </>
  );
};
