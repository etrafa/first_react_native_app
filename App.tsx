import { ScrollView, StyleSheet } from "react-native";
import Footer from "./src/components/Footer";
import ChapterEight from "./src/pages/Chapters/ChapterEight";
import ChapterFive from "./src/pages/Chapters/ChapterFive";
import ChapterFour from "./src/pages/Chapters/ChapterFour";
import ChapterNine from "./src/pages/Chapters/ChapterNine";
import ChapterOne from "./src/pages/Chapters/ChapterOne";
import ChapterSeven from "./src/pages/Chapters/ChapterSeven";
import ChapterSix from "./src/pages/Chapters/ChapterSix";
import ChapterTen from "./src/pages/Chapters/ChapterTen";
import ChapterThree from "./src/pages/Chapters/ChapterThree";
import ChapterTwo from "./src/pages/Chapters/ChapterTwo";

export default function App() {
  return (
    <>
      <ScrollView style={styles.container}>
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ChapterFour />
        <ChapterFive />
        <ChapterSix />
        <ChapterSeven />
        <ChapterEight />
        <ChapterNine />
        <ChapterTen />
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
