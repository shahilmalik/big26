import { Colors } from "@/constants/theme";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useTheme } from "@/hooks/useColors";
import { useGlobal } from "@/context/GlobalContext";
import CustomInput from "@/components/loginPage/CustomInput";
import CustomButton from "@/components/loginPage/CustomButton";
import { router } from "expo-router";
import MetaInput from "@/components/profile/MetaInput";
import EditField from "@/components/profile/EditField";
import { useNavigation } from "expo-router";
function profileEdit() {
  const navigation = useNavigation();
  const { profileData, setProfileData } = useGlobal();
  const { colors } = useTheme();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Edit Profile",
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "space-between",
        padding: 20,
        // width: "70%",
      }}
    >
      <View style={{ gap: 10 }}>
        <EditField
          route="/(profile)/profileEditName"
          title="Name"
          data={profileData.name}
        />
        <EditField
          route="/(profile)/profileEditUsername"
          title="Username"
          data={profileData.userName}
        />
        <EditField
          route="/(profile)/profileEditBio"
          title="Bio"
          data={profileData.bio}
        />
      </View>
    </View>
  );
}

export default profileEdit;
