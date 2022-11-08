import { View, Text } from "react-native";
import ChapterHeader from "../../components/ChapterHeader";
import LessonCart from "../../components/LessonCards";
import { chapterNineLessons } from "../../lessons";

const ChapterNine = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 9" lessonNumber="41-45" />
      {chapterNineLessons &&
        chapterNineLessons.map((chapter) => (
          <LessonCart
            key={chapter.lessonName}
            lessonName={chapter.lessonName}
            lessonImage={chapter.src}
          />
        ))}
    </View>
  );
};

export default ChapterNine;
