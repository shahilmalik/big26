// import { getTheme, storeTheme } from "@/hooks/useColors";
import React, { createContext, useState, useContext, useEffect } from "react";
import { Profiledata } from "@/utils/mockData";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// const printAllAsyncStorageItems = async () => {
//   try {
//     const keys = await AsyncStorage.getAllKeys();
//     const result = await AsyncStorage.multiGet(keys);

//     console.log("===== AsyncStorage Contents =====");
//     result.forEach(([key, value]) => {
//       console.log(`${key}: ${value}`);
//     });
//   } catch (error) {
//     console.error("Error reading AsyncStorage:", error);
//   }
// };
// printAllAsyncStorageItems();
type GlobalContextType = {
  theme: "dark" | "light" | "native";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light" | "native">>;
  toggleTheme: () => void;
  profileData: any;
  setProfileData: any;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light" | "native">("native");
  const [profileData, setProfileData] = useState(Profiledata);
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "native";
      return "light";
    });
  };

  return (
    <GlobalContext.Provider
      value={{ theme, setTheme, toggleTheme, profileData, setProfileData }}
    >
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
