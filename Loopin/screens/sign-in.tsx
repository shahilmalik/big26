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
  Alert,
} from "react-native";
import CustomButton from "@/components/loginPage/CustomButton";
import CustomInput from "@/components/loginPage/CustomInput";
import * as SecureStore from "expo-secure-store";
import { router } from 'expo-router';
import env from "@/env";


function SignIn({ setState }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${env.API_URL}/api/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username_or_email: email, 
          password: password,
        }),
      });

      if (!response.ok) {
        Alert.alert("Login Failed", "Invalid credentials");
        setLoading(false);
        return;
      }

      const data = await response.json();
      const token = data.token; // or data.key / access depending on your backend

      await SecureStore.setItemAsync("userToken", token);
      // 👇 Navigate to the main app screen
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <Text style={styles.header}>SIGN IN</Text>
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
                title={loading ? "Signing in..." : "Sign in"}
                onPress={handleLogin}
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
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 15,
    top: 10,
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 16,
  },
  wrapper: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
});
