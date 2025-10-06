import { Colors } from "@/constants/theme";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useTheme } from "@/hooks/useColors";
import { useGlobal } from "@/context/GlobalContext";
import CustomInput from "@/components/loginPage/CustomInput";
import CustomButton from "@/components/loginPage/CustomButton";
import { router } from "expo-router";
import MetaInput from "@/components/profile/MetaInput";
function profileEdit() {
  const { profileData, setProfileData } = useGlobal();
  const { colors } = useTheme();

  const [name, setName] = useState<string>(profileData.name);
  const [userName, setUserName] = useState<string>(profileData.userName);
  const [bio, setBio] = useState<string>(profileData.bio);

  const saveEdit = () => {
    setProfileData((prev: typeof profileData) => ({
      ...prev,
      name,
      bio,
      userName,
    }));
    router.back();
  };

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
        <MetaInput placeholder="Name" value={name} setValue={setName} />
        <MetaInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
        />
        <MetaInput
          placeholder="Bio"
          value={bio}
          setValue={setBio}
          multiline
          numberOfLines={10}
        />
      </View>

      <CustomButton title="Save" onPress={() => saveEdit()} />
    </View>
  );
}

export default profileEdit;
