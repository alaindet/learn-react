import { atom, selectorFamily } from 'recoil';

export const userIdAtom = atom<number | undefined>({
  key: 'userId',
  default: undefined,
});

// By default, any async function used in Recoil triggers <Suspense>
// NOTE: Selectors are cached, so HTTP calls inside a selector get cached by default
export const userAtom = selectorFamily({
  key: 'user',
  get: (userId: number | undefined) => async () => {
    if (userId === undefined) return;
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return (await fetch(url)).json();
  },
});
