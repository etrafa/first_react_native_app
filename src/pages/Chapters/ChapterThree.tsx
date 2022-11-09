import { View, Text } from "react-native";
import ChapterHeader from "../../components/ChapterHeader";
import LessonCart from "../../components/LessonCards";
import { chapterThreeLessons } from "../../lessons";

const ChapterThree = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 3" lessonNumber="11-15" />
      {chapterThreeLessons &&
        chapterThreeLessons.map((chapter) => (
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

export default ChapterThree;
