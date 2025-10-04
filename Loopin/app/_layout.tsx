import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as LocalAuthentication from "expo-local-authentication";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { useEffect } from "react";

export const unstable_settings = {
  anchor: "/",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const func = async () => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const supportedTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      const result = await LocalAuthentication.authenticateAsync()
      console.log("AUTHEN:", hasHardware, supportedTypes, isEnrolled, result);
    };
    func();
  });
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen
          name="login"
          options={{ headerShown: false, headerTitle: "Login" }}
        /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
