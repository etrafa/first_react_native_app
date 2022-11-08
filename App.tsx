import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AudioTest from "./src/components/AudioTest";
import MatchCards from "./src/components/MatchCards";
import MultipleChoice from "./src/components/MultipleChoiceWithPicture";

export default function App() {
  return (
    <View style={styles.container}>
      <AudioTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
