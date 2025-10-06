import { Colors } from "@/constants/theme";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useTheme } from "@/hooks/useColors";
import { useGlobal } from "@/context/GlobalContext";
import CustomInput from "@/components/loginPage/CustomInput";
import CustomButton from "@/components/loginPage/CustomButton";
import { router } from "expo-router";
import MetaInput from "@/components/profile/MetaInput";
import EditField from "@/components/profile/EditField";
function profileEdit() {
  const { profileData, setProfileData } = useGlobal();
  const { colors } = useTheme();

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
