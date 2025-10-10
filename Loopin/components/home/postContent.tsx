import { getFirstLetter } from "@/utils/helperFunction";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Haptics from "@/utils/haptics";
type postContentType = {
  name: string;
  time?: string;
  content?: string;
  public?: boolean;
};
function PostContent({ name, time, content }: postContentType) {
  const [heartActive, setHeartActive] = useState<boolean>(false);
  function toggleHeart() {
    setHeartActive((prev) => !prev);
    Haptics.soft();
  }
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        minHeight: 100,
        // backgroundColor: "green",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomColor: "white",
        borderBottomWidth: 0.2,
      }}
    >
      <View>
        <View
          style={{
            height: 50,
            width: 50,
            borderColor: "black",
            borderRadius: 100,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{getFirstLetter(name)}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          paddingHorizontal: 10,
          gap: 10,
        }}
      >
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>{name}</Text>
            <Text style={{ color: "grey", fontWeight: "bold" }}>{time}</Text>
          </View>
          {content !== undefined ? (
            <Text
              style={{
                color: "white",
                marginRight: 40,
              }}
            >
              {content}
            </Text>
          ) : (
            <>
              <TextInput
                placeholder="Type your thoughts here..."
                value={content}
                placeholderTextColor="grey"
              />
            </>
          )}
        </View>
        {content != undefined && (
          <View style={{ flexDirection: "row", gap: 30 }}>
            {heartActive ? (
              <AntDesign
                name="heart"
                size={20}
                color="red"
                onPress={toggleHeart}
              />
            ) : (
              <FontAwesome6
                name="heart"
                size={20}
                color="white"
                onPress={toggleHeart}
              />
            )}
            <FontAwesome6 name="comment" size={20} color="white" />
            <FontAwesome6 name="repeat" size={20} color="white" />
          </View>
        )}
      </View>
    </View>
  );
}

export default PostContent;
