import React, { useState, useLayoutEffect } from "react";
import { View, Button, Alert } from "react-native";
import { router, useNavigation } from "expo-router";
import MetaInput from "@/components/profile/MetaInput";
import { useGlobal } from "@/context/GlobalContext";
import { HeaderTitle } from "@react-navigation/elements";
function ProfileEditBio() {
  const { profileData, setProfileData } = useGlobal();
  const [bio, setBio] = useState(profileData.bio);
  const navigation = useNavigation();
  const handleSave = () => {
    setProfileData((prev: typeof profileData) => ({
      ...prev,
      bio,
    }));
    router.back();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      HeaderTitle: "Bio",
      headerRight: () => <Button title="Save" onPress={handleSave} />,
    });
  }, [navigation, bio]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <MetaInput
        placeholder="Bio"
        value={bio}
        setValue={setBio}
        multiline
        numberOfLines={10}
        autoFocus
      />
    </View>
  );
}

export default ProfileEditBio;
