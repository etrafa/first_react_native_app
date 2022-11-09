import { View, Text } from "react-native";
import ChapterHeader from "../../components/ChapterHeader";
import LessonCart from "../../components/LessonCards";
import { chapterEightLessons } from "../../lessons";

const ChapterEight = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 8" lessonNumber="36-40" />
      {chapterEightLessons &&
        chapterEightLessons.map((chapter) => (
          <LessonCart
            key={chapter.lessonName}
            lessonName={chapter.lessonName}
            lessonImage={chapter.src}
            path={chapter.path}
          />
        ))}
    </View>
  );
};

export default ChapterEight;
