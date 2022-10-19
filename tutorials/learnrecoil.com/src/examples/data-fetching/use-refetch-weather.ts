import { useSetRecoilState } from 'recoil';

import { weatherRequestIdAtom } from './async-state';

export function useRefetchWeather(userId: number | undefined) {
  const setRequestId = useSetRecoilState(weatherRequestIdAtom(userId));
  return () => setRequestId(id => id + 1);
}
