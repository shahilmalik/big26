import React from "react";
import { View } from "react-native";
import { ThemedText } from "../themed-text";

type titleCount = {
  count: number;
  title: string;
};
function TitleCount({ count, title }: titleCount) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText style={{ fontWeight: "bold" }}>{count}</ThemedText>
      <ThemedText>{title}</ThemedText>
    </View>
  );
}

export default TitleCount;
