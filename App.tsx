import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LessonCart from "./src/components/LessonCart";
import NewVocabulary from "./src/components/NewVocabulary";

export default function App() {
  return (
    <View style={styles.container}>
      <NewVocabulary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
