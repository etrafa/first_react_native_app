import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MultipleChoice from "./src/components/MultipleChoiceWithPicture";

export default function App() {
  return (
    <View style={styles.container}>
      <MultipleChoice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
