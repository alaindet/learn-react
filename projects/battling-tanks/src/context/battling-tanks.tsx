// Thanks to
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import { createContext, useReducer, useContext, ReactNode, Reducer } from 'react';

import { Action, State, INITIAL_STATE, mainReducer } from 'src/store';

const BattlingTanksContext = createContext<(
  | { state: State, dispatch: (action: Action) => void }
  | undefined
)>(undefined);

const BattlingTanksProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<State, any>>(
    mainReducer,
    INITIAL_STATE
  );

  const value = { state, dispatch };

  return (
    <BattlingTanksContext.Provider value={value}>
      {children}
    </BattlingTanksContext.Provider>
  );
};

const useBattlingTanks = () => useContext(BattlingTanksContext);

export {
  BattlingTanksProvider,
  useBattlingTanks,
};
