import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "@/hooks/useColors";
import { useGlobal } from "@/context/GlobalContext";
import { router } from "expo-router";

type editFieldType = {
  route: string;
  title: string;
  data: string;
};
function EditField({ route, title, data }: editFieldType) {
  const { colors } = useTheme();
  const { profileData } = useGlobal();
  return (
    // <TouchableOpacity onPress={() => router.push("/profileEditName")}>
    <TouchableOpacity onPress={() => router.push(route)}>
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
        <Text style={{ color: colors.text, fontWeight: "bold" }}>{title}</Text>
        <Text
          style={{
            width: "100%",
            borderWidth: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderRadius: 10,
            color: colors.text,
            // color: "white",
          }}
        >
          {/* {profileData.name} */}
          {data}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default EditField;
