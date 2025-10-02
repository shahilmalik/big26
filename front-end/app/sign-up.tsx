import CustomView from "@/components/CustomView";
import CustomButton from "@/components/loginPage/CustomButton";
import CustomInput from "@/components/loginPage/CustomInput";
import { ThemedText } from "@/components/themed-text";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
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

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (step == 3) {
      router.replace("/(tabs)/profile");
    }
  }, [step]);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // tweak offset so inputs aren’t cut off by navbar
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
        SIGN UP
      </Text>
      {/* Dismiss keyboard when tapping outside */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.wrapper}>
              {step == 0 && (
                <CustomView style={{ backgroundColor: "" }}>
                  <CustomInput
                    value={email}
                    setValue={setEmail}
                    placeholder="Email"
                  />
                </CustomView>
              )}
              {step == 1 && (
                <CustomView>
                  <CustomInput
                    value={otp}
                    setValue={setOtp}
                    placeholder="OTP | One Time Password "
                  />
                </CustomView>
              )}
              {step == 2 && (
                <CustomView>
                  <CustomInput
                    value={name}
                    setValue={setName}
                    placeholder="Name"
                  />
                  <CustomInput
                    value={username}
                    setValue={setUsername}
                    placeholder="Username"
                  />
                  <CustomInput
                    value={password}
                    setValue={setPassword}
                    placeholder="Password"
                  />
                </CustomView>
              )}

              <CustomButton
                title={step == 2 ? "Sign up" : "Next"}
                // onPress={() => router.replace("/(tabs)")}
                onPress={() => setStep((prev) => prev + 1)}
              />
              {step >= 1 && (
                <CustomButton
                  title="Back"
                  onPress={() => setStep((prev) => prev - 1)}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignUp;

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
