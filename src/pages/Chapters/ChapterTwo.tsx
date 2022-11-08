import { View, Text } from "react-native";
import ChapterHeader from "../../components/ChapterHeader";
import LessonCart from "../../components/LessonCards";
import { chapterTwoLessons } from "../../lessons";

const ChapterTwo = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 2" lessonNumber="6-10" />
      {chapterTwoLessons &&
        chapterTwoLessons.map((chapter) => (
          <LessonCart
            key={chapter.lessonName}
            lessonName={chapter.lessonName}
            lessonImage={chapter.src}
          />
        ))}
    </View>
  );
};

export default ChapterTwo;
