import { View } from "react-native";
import ChapterHeader from "../../components/ChapterHeader";
import LessonCart from "../../components/LessonCards";
import { chapterOneLessons } from "../../lessons";

const ChapterOne = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 1" lessonNumber="1-5" />
      {chapterOneLessons &&
        chapterOneLessons.map((chapter) => (
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

export default ChapterOne;
