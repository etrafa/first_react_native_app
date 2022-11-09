import { ScrollView, StyleSheet } from "react-native";
import ChapterEight from "../Chapters/ChapterEight";
import ChapterFive from "../Chapters/ChapterFive";
import ChapterFour from "../Chapters/ChapterFour";
import ChapterNine from "../Chapters/ChapterNine";
import ChapterOne from "../Chapters/ChapterOne";
import ChapterSeven from "../Chapters/ChapterSeven";
import ChapterSix from "../Chapters/ChapterSix";
import ChapterTen from "../Chapters/ChapterTen";
import ChapterThree from "../Chapters/ChapterThree";
import ChapterTwo from "../Chapters/ChapterTwo";

const Home = () => {
  return (
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
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
