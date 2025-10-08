// hooks/useTheme.ts
import { useColorScheme, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "@/utils/colorSheet";

// Save to async
export const storeTheme = async (value: "dark" | "light" | "native") => {
  try {
    await AsyncStorage.setItem("theme", value);
  } catch (e) {
    console.error("Error saving theme", e);
  }
};

// Load to async
export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem("theme");
    return (value as "dark" | "light" | "native") ?? "native";
  } catch (e) {
    console.error("Error reading theme", e);
    return null;
  }
};

export function useTheme() {
  const systemTheme = useColorScheme(); //native Theme
  const [selectedTheme, setSelectedTheme] = useState<
    "light" | "dark" | "native"
  >("native");
  useEffect(() => {
    const loadTheme = async () => {
      const theme = await getTheme();
      setSelectedTheme(theme || "native");
    };
    loadTheme();
  });

  const isDark = "dark";
  // const isDark =
  //   selectedTheme === "dark"
  //     ? true
  //     : selectedTheme === "light"
  //     ? false
  //     : systemTheme === "dark";
  return {
    isDark,
    colors: isDark ? darkTheme : lightTheme,
  };
}
