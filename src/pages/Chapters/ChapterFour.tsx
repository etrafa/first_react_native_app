import { View, Text } from "react-native";
import ChapterHeader from "../../components/ChapterHeader";
import LessonCart from "../../components/LessonCards";
import { chapterFourLessons } from "../../lessons";

const ChapterFour = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 4" lessonNumber="16-20" />
      {chapterFourLessons &&
        chapterFourLessons.map((chapter) => (
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

export default ChapterFour;
