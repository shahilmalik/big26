import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

const styles = StyleSheet.create({
  view: {
    width: "100%",
    gap: 10,
  },
});

type CustomViewProps = ViewProps & {
  children: React.ReactNode; // 👈 tells TS you accept children
};

function CustomView({ children, style }: CustomViewProps) {
  return <View style={[styles.view, style]}>{children}</View>;
}

export default CustomView;
