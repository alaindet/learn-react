// Thanks to
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import { createContext, useReducer, useContext, ReactNode, Reducer } from 'react';

import { Action, State, INITIAL_STATE, devMainReducer } from 'src/store';

export interface BattlingTanksContext {
  state: State;
  dispatch: (action: Action) => void;
}

const BattlingTanksContextPrivate = createContext<(
  BattlingTanksContext | undefined
)>(undefined);

const BattlingTanksProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<State, any>>(
    devMainReducer,
    INITIAL_STATE
  );

  const value = { state, dispatch };

  return (
    <BattlingTanksContextPrivate.Provider value={value}>
      {children}
    </BattlingTanksContextPrivate.Provider>
  );
};

const useBattlingTanks = () => useContext(BattlingTanksContextPrivate);

export {
  BattlingTanksProvider,
  useBattlingTanks,
};
