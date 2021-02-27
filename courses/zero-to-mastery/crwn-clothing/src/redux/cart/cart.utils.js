export const addItemToCart = (items, item) => {

  const existing = items.find(anItem => anItem.id === item.id);

  if (existing) {
    const quantity = existing.quantity + 1;
    const newItem = {...item, quantity};
    return items.map(anItem => item.id === anItem.id ? newItem : anItem);
  }

  const newItem = {...item, quantity: 1};
  return [...items, newItem];
};
