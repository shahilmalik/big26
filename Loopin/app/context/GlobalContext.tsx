import React, { createContext, useState, useContext } from "react";

type GlobalContextType = {
  theme: "dark" | "light" | "native";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light" | "native">>;
  toggleTheme: () => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light" | "native">("native");
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "native";
      return "light";
    });
  };
  return (
    <GlobalContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
