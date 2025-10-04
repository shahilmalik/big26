import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonType = {
  title: string;
  onPress: () => void;
  bgColor?: string;
  color?: string;
};
function CustomButton({
  title,
  onPress,
  bgColor = "white",
  color = "black",
}: ButtonType) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        backgroundColor: bgColor,
        padding: 12,
        borderRadius: 8,
        borderColor: color,
        borderWidth: 2,
        width: "100%",
      }}
    >
      <Text style={{ color: color, fontWeight: "bold", textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
