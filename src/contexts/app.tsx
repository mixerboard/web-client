import { createContext, FC, useReducer, useContext } from "react";

type Action =
  | { type: "setSelectedSource"; selectedSource: musicServiceId }
  | { type: "setLibrary"; library: Library }
  | { type: "setSelectedTarget"; selectedTarget: musicServiceId }
  | { type: "setPushResult"; pushResult: PushResult };
type Dispatch = (action: Action) => void;
type State = {
  selectedSource: musicServiceId | null;
  library: Library;
  selectedTarget: musicServiceId | null;
  pushResult: PushResult;
};

const initialState: State = {
  selectedSource: null,
  library: { tracks: [], albums: [], playlists: [] },
  selectedTarget: null,
  pushResult: {
    pushed: { tracks: [], albums: [], playlists: [] },
    failed: { tracks: [], albums: [], playlists: [] },
  },
};

const AppStateContext = createContext<State | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setSelectedSource":
      return { ...state, selectedSource: action.selectedSource };
    case "setLibrary":
      return { ...state, library: action.library };
    case "setSelectedTarget":
      return { ...state, selectedTarget: action.selectedTarget };
    case "setPushResult":
      return { ...state, pushResult: action.pushResult };
    default:
      throw new Error("Unhandled action type.");
  }
};

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }

  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }

  return context;
};

const useApp: () => (State | Dispatch)[] = () => {
  const appState = useAppState();
  const appDispatch = useAppDispatch();

  return [appState, appDispatch];
};

export { AppProvider, useApp };
