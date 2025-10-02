import TitleCount from "@/components/profile/TitleCount";
import { ThemedText } from "@/components/themed-text";
import { router } from "expo-router";
import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const data = {
  name: "Rahim",
  username: "@ebrahim",
  bio: "Hello This is Me and this is my biography. Feel Free to add your own bio here.",
};

const debug = 0;
function Profile() {
  return (
    <SafeAreaView>
      <ThemedText
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        Profile
      </ThemedText>
      <ScrollView
        contentContainerStyle={{
          gap: 20,
        }}
        style={{
          padding: 10,
          height: "100%",
          backgroundColor: debug ? "pink" : "",
        }}
      >
        {/* div that has profile pic and followrs row */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: debug ? "red" : "",
          }}
        >
          <View
            style={{
              backgroundColor: debug ? "grey" : "",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: debug ? "green" : "",
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 100,
              }}
            >
              {/* profile pic */}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flex: 1,
              minWidth: 0,
              backgroundColor: debug ? "yellow" : "",
              padding: 10,
            }}
          >
            <ThemedText
              style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}
            >
              {data.name} |{" "}
              <Text
                style={{
                  fontWeight: "normal",
                  color: "gray",
                  fontSize: 18,
                  marginLeft: 10,
                }}
              >
                {data.username}
              </Text>
            </ThemedText>
            <ThemedText style={{ flexShrink: 1 }}>{data.bio}</ThemedText>
          </View>
        </View>

        {/* Title Count */}
        <View style={{ width: "100%", backgroundColor: debug ? "red" : "" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 0,
            }}
          >
            <TitleCount count={10} title="Posts" />
            <TitleCount count={35} title="Followers" />
            <TitleCount count={12} title="Following" />
            <TitleCount count={45} title="Liked" />
            <TitleCount count={2} title="Repost" />
          </View>
        </View>
        {/* Tabs GO here */}
        <Button title="LOGOUT" onPress={() => router.replace("/login")} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
