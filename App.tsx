import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AudioTest from "./src/components/AudioTest";
import FillTheBlanks from "./src/components/FillTheBlanks";
import MatchCards from "./src/components/MatchCards";
import MultipleChoice from "./src/components/MultipleChoiceWithPicture";

export default function App() {
  return (
    <View style={styles.container}>
      <FillTheBlanks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
