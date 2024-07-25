import React, { createContext, useState } from 'react';

export const PitContext = createContext();

export default function PitProvider({ children }) {
  const [myPitCon, setMyPitCon] = useState([]);

  return (
    <PitContext.Provider value={{ myPitCon, setMyPitCon }}>
      {children}
    </PitContext.Provider>
  );
}
