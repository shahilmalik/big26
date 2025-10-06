import React from "react";
import { View } from "react-native";
import { ThemedText } from "../themed-text";
import { useTheme } from "@/hooks/useColors"; 
type titleCount = {
  count: number;
  title: string;
};
function TitleCount({ count, title }: titleCount) {
  const {colors} = useTheme()
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText style={{ fontWeight: "bold", color: colors.text }}>
        {count}
      </ThemedText>
      <ThemedText>{title}</ThemedText>
    </View>
  );
}

export default TitleCount;
