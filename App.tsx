import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MatchCards from "./src/components/MatchCards";
import MultipleChoice from "./src/components/MultipleChoiceWithPicture";

export default function App() {
  return (
    <View style={styles.container}>
      <MatchCards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
