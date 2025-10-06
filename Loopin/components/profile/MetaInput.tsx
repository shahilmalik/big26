import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
} from "react-native";
import { useTheme } from "@/hooks/useColors";
const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 10,
  },
});

type CustomInputType = TextInputProps & {
  value: string;
  placeholder: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};
function MetaInput({
  value,
  setValue,
  placeholder,
  ...props
}: CustomInputType) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: "column",
        borderWidth: 2,
        borderColor: colors.text,
        borderRadius: 10,
        padding: 8,
        width: "100%",
      }}
    >
      <Text style={{ color: colors.text, fontWeight: "bold" }}>
        {placeholder}
      </Text>
      <TextInput
        style={{
          width: "100%",
          borderWidth: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
          borderRadius: 10,
          color: colors.text,
        }}
        value={value}
        onChangeText={setValue}
        placeholderTextColor="gray"
        // placeholder={placeholder}
        secureTextEntry={placeholder.toLowerCase() === "password"}
        {...props}
      />
    </View>
  );
}

export default MetaInput;
