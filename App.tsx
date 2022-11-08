import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AudioTest from "./src/components/AudioTest";
import FillTheBlanks from "./src/components/FillTheBlanks";
import MatchCards from "./src/components/MatchCards";
import MultipleChoiceWithPicture from "./src/components/MultipleChoiceWithPicture";
import MultipleChoice from "./src/components/MultipleChoice";

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
