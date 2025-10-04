import CustomButton from "@/components/loginPage/CustomButton";
import CustomInput from "@/components/loginPage/CustomInput";
import { ThemedText } from "@/components/themed-text";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SignIn({ setState }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);

  return (
    // <SafeAreaView>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 30,
          marginBottom: 15,
          top: 10,
          textAlign: "center",
        }}
      >
        SIGN IN
      </Text>
      {/* Dismiss keyboard when tapping outside */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <CustomInput
                value={email}
                setValue={setEmail}
                placeholder="Email"
              />
              <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
              />
              <CustomButton
                title="Sign in"
                onPress={() => router.replace("/(tabs)")}
              />
              <CustomButton
                bgColor="black"
                color="white"
                title="Don't have an account?"
                onPress={() => setState("signup")}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 16,
    // backgroundColor: "red",
  },
  wrapper: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    color: "white",
  },
});
