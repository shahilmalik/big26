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
      edges={["top"]}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: debug ? "green" : "#22333b",
        // backgroundColor: colors.background,
        height: "100%",
      }}
    >
      {/* SIGN in / Create account page */}
      {screen === "home" && (
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
              flex: 3,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: debug ? "red" : "",
            }}
          >
            <ThemedText
              style={{
                fontSize: 30,
                fontWeight: "bold",
                padding: 5,
                textAlign: "center",
              }}
            >
              Change Starts Here,
            </ThemedText>
            <ThemedText
              style={{
                fontSize: 30,
                fontWeight: "bold",
                padding: 5,
                textAlign: "center",
              }}
            >
              Spreads Everywhere
            </ThemedText>
          </View>
          <View
            style={{
              flex: 2,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderColor: "yellow",
              // borderWidth: 2,
              borderBottomWidth: 0,
              backgroundColor: debug ? "blue" : "#eae0d6",
              padding: 20,
              paddingBottom: 30,
            }}
          >
            <View
              style={{
                // backgroundColor: debug ? "yellow" : "",
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 24 }}
              >
                Proximum
              </Text>
              <Text style={{ textAlign: "center" }}>
                See what’s happening in your city, state, or country. Chat with
                nearby users, join local groups, and share your
                thoughts—anonymously or openly. With location-based chats and
                updates, Proximum keeps you connected to the world around you.
              </Text>
            </View>
            <View
              style={{
                gap: 10,
                backgroundColor: debug ? "pink" : "",
                display: "flex",
                flexDirection: "row",
                width: "50%",
              }}
            >
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
              {/* <CustomButton
                title={`DEV: ${themeName}`}
                onPress={() => toggleTheme()}
              /> */}
            </View>
          </View>
        </View>
      )}

      {screen === "signin" && <SignIn setState={setScreen} />}

      {screen === "signup" && <SignUp setState={setScreen} />}
    </SafeAreaView>
  );
}

export default Login;
