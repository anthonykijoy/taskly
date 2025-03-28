import { Text, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";

// ? is an optional property
type Props = {
  name?: string;
};

export function ShoppingListItem({ name }: Props) {
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
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDelete()}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Delete</Text>
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
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    letterSpacing: 1,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
