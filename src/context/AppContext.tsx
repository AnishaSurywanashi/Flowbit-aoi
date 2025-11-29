// src/context/AppContext.tsx
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [layerVisible, setLayerVisible] = useState(true);

  return (
    <AppContext.Provider value={{ layerVisible, setLayerVisible }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);

// import { createContext, useContext, useState } from "react";

// const AppContext = createContext(null);

// export const AppProvider = ({ children }) => {
//   const [layerVisible, setLayerVisible] = useState(true);

//   return (
//     <AppContext.Provider value={{ layerVisible, setLayerVisible }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useApp = () => useContext(AppContext);
