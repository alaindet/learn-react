export const pickClassNames = (classMap) => {

  let classNames = '';

  for (const className in classMap) {
    if (classMap[className]) {
      classNames += className + ' ';
    }
  }

  if (classNames === '') {
    return classNames;
  }

  return classNames.slice(0, -1);
};
