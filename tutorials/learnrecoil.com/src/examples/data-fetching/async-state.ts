import { atom, atomFamily, selectorFamily } from 'recoil';
import { getWeather } from './weather';

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

export const weatherRequestIdAtom = atomFamily({
  key: 'weatherRequestId',
  default: 0,
});

export const weatherAtom = selectorFamily({
  key: 'weather',
  get: (userId: number | undefined) => async ({ get }) => {
    if (userId === undefined) return;

    // weatherRequestId is a dependency, so getting it triggers recalculation
    // of this selector, hence refetching of HTTP resource
    get(weatherRequestIdAtom(userId));

    const user = get(userAtom(userId));
    return await getWeather(user.address.city);
  },
});
