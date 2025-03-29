import { Link, Stack } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../../theme";
import { Pressable } from "react-native";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => {
            return (
              <Link href={"counter/history"} asChild>
                <Pressable hitSlop={20}>
                  <FontAwesome5
                    name="history"
                    size={24}
                    color={theme.colorGrey}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />
    </Stack>
  );
}
