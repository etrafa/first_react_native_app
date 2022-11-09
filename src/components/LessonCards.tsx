import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
interface LessonCartProps {
  lessonName: string;
  lessonImage: any;
  path: string;
}

const LessonCart = ({ lessonName, lessonImage, path }: LessonCartProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(path)}
      style={styles.body}
    >
      <View style={styles.leftContainer}>
        <Image style={styles.lessonImage} source={lessonImage} />
        <View style={styles.divider}></View>
      </View>
      <Text style={styles.lessonName}>{lessonName}</Text>
    </TouchableOpacity>
  );
};

export default LessonCart;

const styles = StyleSheet.create({
  body: {
    height: 100,
    marginTop: 30,
    marginHorizontal: 10,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#EAEAEA",
  },

  leftContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.5,
  },

  lessonImage: {
    width: 60,
    height: 60,
  },

  divider: {
    borderLeftWidth: 1,
    borderLeftColor: "#D3D3D3",
    height: 100,
  },

  lessonName: {
    color: "#000",
    fontWeight: "700",
    letterSpacing: 2,
    paddingLeft: 10,
    flex: 1,
  },
});
