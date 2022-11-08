import { View, Text } from "react-native";
import ChapterHeader from "../../components/ChapterHeader";
import LessonCart from "../../components/LessonCards";
import { chapterSevenLessons } from "../../lessons";

const ChapterSeven = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 7" lessonNumber="31-35" />
      {chapterSevenLessons &&
        chapterSevenLessons.map((chapter) => (
          <LessonCart
            key={chapter.lessonName}
            lessonName={chapter.lessonName}
            lessonImage={chapter.src}
          />
        ))}
    </View>
  );
};

export default ChapterSeven;
