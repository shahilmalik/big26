import CustomButton from "@/components/loginPage/CustomButton";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignIn from "../screens/sign-in";
import SignUp from "../screens/sign-up";
import { ThemedText } from "@/components/themed-text";
import { useGlobal } from "../context/GlobalContext";
import { getTheme, storeTheme } from "@/hooks/useColors";
import { useTheme } from "@/hooks/useColors";
function Login() {
  const debug = 0;
  const { colors } = useTheme();
  const { theme, toggleTheme } = useGlobal();
  const [themeName, setThemeName] = useState<"light" | "dark" | "native">(
    "native"
  );
  useEffect(() => {
    storeTheme(theme);
  }, [theme]);

  useEffect(() => {
    const loadTheme = async () => {
      const theme = await getTheme();
      setThemeName(theme || "native");
    };
    loadTheme();
  }, [theme]);

  const [screen, setScreen] = useState<"home" | "signin" | "signup">("home");
  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: colors.background,
        height: "100%",
      }}
    >
      {/* SIGN in / Create account page */}
      {screen === "home" && (
        <View
          style={{
            backgroundColor: debug ? "red" : "",
            gap: "20",
            padding: 10,
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: debug ? "yellow" : "",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: colors.text, fontSize: 24 }}>
              Welcom To Our Application
            </Text>
          </View>
          <View style={{ gap: 10, backgroundColor: debug ? "pink" : "" }}>
            <CustomButton
              title="SIGN IN"
              bgColor="black"
              color="white"
              onPress={() => setScreen("signin")}
            />
            <CustomButton
              title="CREATE ACCOUNT"
              color="black"
              onPress={() => setScreen("signup")}
            />
            {/* <CustomButton title={themeName} onPress={() => toggleTheme()} /> */}
          </View>
        </View>
      )}

      {screen === "signin" && <SignIn setState={setScreen} />}

      {screen === "signup" && <SignUp setState={setScreen} />}
    </SafeAreaView>
  );
}

export default Login;
