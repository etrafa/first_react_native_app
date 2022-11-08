import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface ChapterHeaderProps {
  header: string;
  lessonNumber: string;
}

const ChapterHeader = ({ header, lessonNumber }: ChapterHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.header}>({lessonNumber})</Text>
    </View>
  );
};

export default ChapterHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    fontSize: 17,
    letterSpacing: 1.2,
    fontWeight: "700",
  },
});
