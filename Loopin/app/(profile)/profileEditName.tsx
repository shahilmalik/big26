import React, { useState, useLayoutEffect } from "react";
import { View, Button, Alert } from "react-native";
import { router, useNavigation } from "expo-router";
import MetaInput from "@/components/profile/MetaInput";
import { useGlobal } from "@/context/GlobalContext";
import { HeaderTitle } from "@react-navigation/elements";
function ProfileEditName() {
  const { profileData, setProfileData } = useGlobal();
  const [name, setName] = useState(profileData.name);
  const navigation = useNavigation();
  const handleSave = () => {
    setProfileData((prev: typeof profileData) => ({
      ...prev,
      name,
    }));
    router.back();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      HeaderTitle: "Edit Name",
      headerRight: () => <Button title="Save" onPress={handleSave} />,
    });
  }, [navigation, name]);

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <MetaInput placeholder="Name" value={name} setValue={setName} autoFocus />
    </View>
  );
}

export default ProfileEditName;
