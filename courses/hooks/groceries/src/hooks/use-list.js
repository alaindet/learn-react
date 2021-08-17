import React from 'react';

export function useList(initialList) {

  const [list, setList] = React.useState(initialList);

  return {
    list,
    removeItem(index) {
      const newList = list.filter((item, i) => i !== index);
      setList(newList);
    },
    removeWithCaloriesMoreThan(threshold) {
      const newList = list.filter(item => item.calories < threshold);
      setList(newList);
    },
    saveItem(index, newItem) {
      const newList = list.map((item, i) => (i === index) ? newItem : item);
      setList(newList);
    }
  };
}
