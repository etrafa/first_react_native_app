import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LessonCart from "./src/components/LessonCart";

export default function App() {
  return (
    <View style={styles.container}>
      <LessonCart
        lessonImage={require("./assets/lesson-one-assets/animals.png")}
        lessonName="Animals"
      />
      <LessonCart
        lessonImage={require("./assets/lesson-one-assets/family.png")}
        lessonName="Family"
      />
      <LessonCart
        lessonImage={require("./assets/lesson-one-assets/pronouns.png")}
        lessonName="Pronouns"
      />
      <LessonCart
        lessonImage={require("./assets/lesson-one-assets/countries.png")}
        lessonName="Country"
      />
      <LessonCart
        lessonImage={require("./assets/lesson-one-assets/occupations.png")}
        lessonName="Occupations"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
