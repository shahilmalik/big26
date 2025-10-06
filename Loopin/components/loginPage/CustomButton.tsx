import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

type ButtonType = {
  title: string;
  onPress: () => void;

  color?: string;
  style?: ViewStyle | ViewStyle[];
};
function CustomButton({ title, onPress, color = "black", style }: ButtonType) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        {
          padding: 12,
          borderRadius: 8,
          width: "100%",
          backgroundColor: "white",
        },
        style,
      ]}
    >
      <Text style={{ color: color, fontWeight: "bold", textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
