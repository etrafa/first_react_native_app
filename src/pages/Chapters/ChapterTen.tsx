import { View, Text } from "react-native";
import ChapterHeader from "../../components/ChapterHeader";
import LessonCart from "../../components/LessonCards";
import { chapterTenLessons } from "../../lessons";

const ChapterTen = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 10" lessonNumber="46-50" />
      {chapterTenLessons &&
        chapterTenLessons.map((chapter) => (
          <LessonCart
            key={chapter.lessonName}
            lessonName={chapter.lessonName}
            lessonImage={chapter.src}
          />
        ))}
    </View>
  );
};

export default ChapterTen;
