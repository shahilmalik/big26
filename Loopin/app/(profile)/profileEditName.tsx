import React, { useState, useLayoutEffect } from "react";
import { View, Button, Alert } from "react-native";
import { router, useNavigation } from "expo-router";
import MetaInput from "@/components/profile/MetaInput";
import { useGlobal } from "@/context/GlobalContext";
import { HeaderTitle } from "@react-navigation/elements";
import { useTheme } from "@/hooks/useColors";
function ProfileEditName() {
  const { colors } = useTheme();
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
      headerTitle: "Edit Name",
      headerRight: () => <Button title="Save" onPress={handleSave} />,
    });
  }, [navigation, name]);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <MetaInput placeholder="Name" value={name} setValue={setName} autoFocus />
    </View>
  );
}

export default ProfileEditName;
