import { Text, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";

// ? is an optional property
type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(`Are you sure you want to delete ${name}?`, "Second message", [
      {
        text: "Yes",
        onPress: () => console.log("Ok, Deleting"),
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        onPress={() => handleDelete()}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText]}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    // backgroundColor: "pink",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomColor: theme.colorCelurean,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
    borderBottomColor: theme.colorGrey,
  },
  completedText: {
    textDecorationLine: "line-through", //? strikethrough tex
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
  buttonText: {
    color: theme.colorWhite,
    letterSpacing: 1,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
