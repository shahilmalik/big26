import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { GlobalProvider } from "../context/GlobalContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Button, Text } from "react-native";
import { useTheme } from "@/hooks/useColors";

export const unstable_settings = {
  anchor: "/",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();
  return (
    <GlobalProvider>
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
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, headerTitle: "" }}
          />
          <Stack.Screen
            name="(profile)/profileEdit"
            options={{ headerShown: true, headerTitle: "Edit Profile" }}
          />
          <Stack.Screen
            name="(profile)/profileEditName"
            options={{
              headerShown: true,
              headerTitle: "Edit Name",
            }}
          />
          <Stack.Screen
            name="(profile)/profileEditUsername"
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="(profile)/profileEditBio"
            options={{ headerShown: true, headerTitle: "Edit Bio" }}
          />
        </Stack>
        {/* <Text style={{ backgroundColor: colors.text }}>LAYOUT</Text> */}
        <StatusBar style="auto" />
      </ThemeProvider>
    </GlobalProvider>
  );
}
