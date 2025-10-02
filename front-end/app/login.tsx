import CustomButton from "@/components/loginPage/CustomButton";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const debug = 0;
function Login() {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: debug ? "green" : "",
        height: "100%",
      }}
    >
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
          onPress={() => router.push("/sign-in")}
        />
        <CustomButton
          title="CREATE ACCOUNT"
          onPress={() => router.push("/sign-up")}
        />
      </View>
    </SafeAreaView>
  );
}

export default Login;
