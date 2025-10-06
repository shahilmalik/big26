import React, { useState, useLayoutEffect } from "react";
import { View, Button, Alert } from "react-native";
import { router, useNavigation } from "expo-router";
import MetaInput from "@/components/profile/MetaInput";
import { useGlobal } from "@/context/GlobalContext";
function ProfileEditUsername() {
  const { profileData, setProfileData } = useGlobal();
  const [userName, setUserName] = useState(profileData.userName);
  const navigation = useNavigation();
  const handleSave = () => {
    setProfileData((prev: typeof profileData) => ({
      ...prev,
      userName,
    }));
    router.back();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Edit Username",
      headerRight: () => <Button title="Save" onPress={handleSave} />,
    });
  }, [navigation, userName]);

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <MetaInput
        placeholder="Username"
        value={userName}
        setValue={setUserName}
        autoFocus
      />
    </View>
  );
}

export default ProfileEditUsername;
