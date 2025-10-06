import CustomButton from "@/components/loginPage/CustomButton";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignIn from "../screens/sign-in";
import SignUp from "../screens/sign-up";
import { useGlobal } from "../context/GlobalContext";
import { getTheme, storeTheme } from "@/hooks/useColors";
import { useTheme } from "@/hooks/useColors";
import { router } from "expo-router";
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
    <KeyboardAvoidingView
      style={{ backgroundColor: colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <SafeAreaView
        edges={["top"]}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: debug ? "green" : colors.loginScreenBg,
          // backgroundColor: colors.background,
          height: "100%",
        }}
      >
        {/* SIGN in / Create account page */}
        <View
          style={{
            backgroundColor: debug ? "red" : "",
            gap: "20",
            padding: 0,
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: screen === "home" ? 3 : 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: debug ? "red" : "",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              Change Starts Here,
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              Spreads Everywhere
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderBottomWidth: 0,
              backgroundColor: debug ? "blue" : "#eae0d6",
              padding: 20,
              paddingBottom: 30,
            }}
          >
            <View
              style={{
                backgroundColor: debug ? "yellow" : "",
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              {screen === "home" && (
                <>
                  <Text
                    style={{ color: "black", fontWeight: "bold", fontSize: 24 }}
                  >
                    Proximum
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    See what’s happening in your city, state, or country. Chat
                    with nearby users, join local groups, and share your
                    thoughts—anonymously or openly. With location-based chats
                    and updates, Proximum keeps you connected to the world
                    around you.
                  </Text>
                </>
              )}
              <View
                style={{
                  gap: 10,
                  backgroundColor: debug ? "pink" : "",
                  // display: "flex",
                  // flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                {screen === "home" && (
                  <View style={{ flexDirection: "row", width: "50%", gap: 5 }}>
                    <CustomButton
                      title="SIGN IN"
                      color="white"
                      onPress={() => setScreen("signin")}
                      style={{ backgroundColor: "black" }}
                    />
                    {/* <CustomButton
                      title="CREATE ACCOUNT"
                      color="black"
                      onPress={() => setScreen("signup")}
                    /> */}
                    {/* <CustomButton
                      title={`${themeName}`}
                      color="black"
                      onPress={() => toggleTheme()}
                    /> */}
                    <CustomButton
                      title={`PROFILE`}
                      color="black"
                      onPress={() => router.replace("/(tabs)/profile")}
                    />
                  </View>
                )}
                {screen === "signin" && <SignIn setState={setScreen} />}
                {screen === "signup" && <SignUp setState={setScreen} />}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default Login;
