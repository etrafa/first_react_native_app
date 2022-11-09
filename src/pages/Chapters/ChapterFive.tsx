import { View, Text } from "react-native";
import React from "react";
import ChapterHeader from "../../components/ChapterHeader";
import { chapterFiveLessons } from "../../lessons";
import LessonCart from "../../components/LessonCards";

const ChapterFive = () => {
  return (
    <View>
      <ChapterHeader header="Chapter 5" lessonNumber="21-25" />
      {chapterFiveLessons &&
        chapterFiveLessons.map((chapter) => (
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

export default ChapterFive;
