import TitleCount from "@/components/profile/TitleCount";
import { ThemedText } from "@/components/themed-text";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { storeTheme, useTheme } from "@/hooks/useColors";
import CustomButton from "@/components/loginPage/CustomButton";
import { useGlobal } from "@/context/GlobalContext";

const debug = 0;
function Profile() {
  const { colors } = useTheme();
  const { profileData } = useGlobal();
  // console.log(profileData, "PROFILE DATA");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        // backgroundColor: 'green',
      }}
    >
      {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}> */}
      <ThemedText
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 24,
          color: colors.text,
        }}
      >
        Profile
      </ThemedText>

      {/* </View> */}
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
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginVertical: 10,
                color: colors.text,
              }}
            >
              {profileData.name} |{" "}
              <Text
                style={{
                  fontWeight: "normal",
                  color: "gray",
                  fontSize: 18,
                  marginLeft: 10,
                }}
              >
                @{profileData.userName}
              </Text>
            </ThemedText>
            <ThemedText style={{ flexShrink: 1, color: colors.text }}>
              {profileData.bio}
            </ThemedText>
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
        <View style={{ flexDirection: "row", width: "48%", gap:5 }}>
          <CustomButton
            title="Edit Profile"
            color="black"
            onPress={() => router.push("/profileEdit")}
            style={{ backgroundColor: "white" }}
          />
          <CustomButton
            title="LOGOUT"
            onPress={() => router.replace("/login")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
