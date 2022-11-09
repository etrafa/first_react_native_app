import { View, Text } from "react-native";
import React from "react";
import ChapterHeader from "../../components/ChapterHeader";
import { chapterSixLessons } from "../../lessons";
import LessonCart from "../../components/LessonCards";

const ChapterSix = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 6" lessonNumber="26-30" />
      {chapterSixLessons &&
        chapterSixLessons.map((chapter) => (
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

export default ChapterSix;
