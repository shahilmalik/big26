import CustomButton from "@/components/loginPage/CustomButton";
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignIn from "./screens/sign-in";
import SignUp from "./screens/sign-up";
const debug = 0;
function Login() {
  const [screen, setScreen] = useState<"home" | "signin" | "signup">("home");
  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: debug ? "green" : "",
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
            onPress={() => setScreen("signup")}
          />
        </View>
      )}

      {screen === "signin" && <SignIn setState={setScreen} />}

      {screen === "signup" && <SignUp setState={setScreen}/>}
    </SafeAreaView>
  );
}

export default Login;
