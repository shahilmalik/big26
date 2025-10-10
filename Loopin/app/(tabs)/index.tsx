import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/hooks/useColors";
import PostContent from "@/components/home/postContent";
import { postMockData } from "@/utils/mockData";
import { FlatList, ScrollView } from "react-native";
import { GlobalProvider, useGlobal } from "@/context/GlobalContext";
export default function HomeScreen() {
  const { profileData } = useGlobal();
  const { colors } = useTheme();
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <SafeAreaView>
        <ScrollView>
          <PostContent name={profileData.name}  />
          {/* <PostContent name="Ebrahim" /> */}
          {postMockData.map((item) => (
            <PostContent
              content={item.content}
              name={item.acc_name}
              key={item.id}
              time={item.posted_time}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
