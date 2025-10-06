import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    // borderColor: "gray",
    borderWidth: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    // color: "white",
  },
});

type CustomInputType = {
  value: string;
  placeholder: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};
function CustomInput({
  value,
  setValue,
  placeholder,
  ...props
}: CustomInputType) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor="gray"
      secureTextEntry={placeholder.toLowerCase() === "password"}
      {...props}
    />
  );
}

export default CustomInput;
