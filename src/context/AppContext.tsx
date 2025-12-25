"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

interface AppContextType {
  finishedLoading: boolean;
  setFinishedLoading: (val: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [finishedLoading, setFinishedLoading] = useState(false);

  return (
    <AppContext.Provider value={{ finishedLoading, setFinishedLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
