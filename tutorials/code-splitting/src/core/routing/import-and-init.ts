import React from 'react';

export const importAndInit = (
  importer: () => Promise<{ default: React.ComponentType<any>; }>,
  initFn: () => void,
): React.LazyExoticComponent<React.ComponentType<any>> => {
  return React.lazy(() => importer().then(component => {
    initFn();
    return component;
  }));
};
