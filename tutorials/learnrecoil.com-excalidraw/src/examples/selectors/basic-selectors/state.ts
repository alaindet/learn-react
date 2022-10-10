import { atom, selector } from 'recoil';

import { addCommission, removeCommission } from './utils';
import { ExchangeCommission } from './types';
import { EXCHANGE_RATE_USD_TO_EUR, EXCHANGE_RATE_EUR_TO_USD } from './data';

export const commissionAtom = atom<ExchangeCommission>({
  key: 'commission',
  default: {
    value: 5,
    enabled: false,
  },
});

export const commissionValueAtom = selector<ExchangeCommission['value']>({
  key: 'commission.value',
  get: ({ get }) => {
    const commission = get(commissionAtom);
    return commission.value;
  },
  set: ({ get, set }, value) => {
    const commission = get(commissionAtom);
    const newCommission = { ...commission, value } as ExchangeCommission;
    set(commissionAtom, newCommission);
  },
});

export const commissionEnabledAtom = selector({
  key: 'commission.enabled',
  get: ({ get }) => {
    const commission = get(commissionAtom);
    return commission.enabled;
  },
  set: ({ set, get }, enabled) => {
    const commission = get(commissionAtom);
    const newCommission = { ...commission, enabled } as ExchangeCommission;
    set(commissionAtom, newCommission);
  },
});

export const usdAtom = atom({
  key: 'usd',
  default: 1,
});

export const eurAtom = selector<number>({
  key: 'eur',
  get: ({ get }) => {
    let usd = get(usdAtom);
    const isCommissionEnabled = get(commissionEnabledAtom);

    // Remove commission
    // Atoms can get fetched conditionally
    if (isCommissionEnabled) {
      const commission = get(commissionValueAtom);
      usd = removeCommission(usd, commission);
    }

    return usd * EXCHANGE_RATE_USD_TO_EUR;
  },
  set: ({ get, set }, newEurVal) => {
    let newUsdVal = (newEurVal as number) * EXCHANGE_RATE_EUR_TO_USD;
    const isCommissionEnabled = get(commissionEnabledAtom);

    // Remove commission
    // Atoms can get fetched conditionally
    if (isCommissionEnabled) {
      const commission = get(commissionValueAtom);
      newUsdVal = removeCommission(newUsdVal, commission);
    }

    set(usdAtom, newUsdVal);
  },
});
