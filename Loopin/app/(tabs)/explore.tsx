import SearchField from "@/components/searchPage/searchField";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/hooks/useColors";
import { useState } from "react";
import { postMockData } from "@/utils/mockData";
import { Text, ScrollView, View } from "react-native";
import { getFirstLetter } from "@/utils/helperFunction";
export default function TabTwoScreen() {
  const { colors } = useTheme();
  const [search, setSearch] = useState<string>("");

  // Filter only by acc_name (case-insensitive partial match)
  const filteredPosts = postMockData.filter((p) =>
    p.acc_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.background,
          padding: 20,
        }}
      >
        <SearchField search={search} setSearch={setSearch} />
        {search.length != 0 && (
          <ScrollView style={{ marginTop: 10 }}>
            {search.length > 0 && filteredPosts.length === 0 ? (
              <Text style={{ color: "gray" }}>
                No results found for "{search}"
              </Text>
            ) : (
              filteredPosts.map((post) => (
                <View
                  key={post.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      height: 50,
                      width: 50,
                      borderRadius: 100,
                      padding: 10,
                      borderColor: "white",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "white",
                        // borderColor: "pink",
                        borderRadius: 100,
                        textAlign: "center",
                      }}
                    >
                      {getFirstLetter(post.acc_name)}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "white",
                      marginBottom: 12,
                      paddingVertical: 12,
                      // lineHeight: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      // backgroundColor: "blue",
                    }}
                  >
                    {post.acc_name}
                  </Text>
                </View>
              ))
            )}
          </ScrollView>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
