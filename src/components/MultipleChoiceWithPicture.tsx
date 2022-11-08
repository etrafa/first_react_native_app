import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const MultipleChoiceWithPicture = () => {
  return (
    <View>
      <Text style={styles.header}>Select the correct answer</Text>
      <View style={styles.wordContainer}>
        <Text style={styles.text}>A cat</Text>
        <View style={styles.volumeContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/volume.png")}
          />
        </View>
      </View>
      <View style={styles.choiceContainer}>
        <View style={styles.option}>
          <Text style={styles.optionText}>kedi</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>kedi</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>kedi</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>kedi</Text>
        </View>
      </View>
    </View>
  );
};

export default MultipleChoiceWithPicture;

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "600",
  },
  wordContainer: {
    width: "95%",
    height: 70,
    borderWidth: 3,
    borderColor: "#EAEAEA",
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.8,
  },

  volumeContainer: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: "#EAEAEA",
    borderRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginTop: 7,
    marginLeft: "auto",
    marginRight: "auto",
  },
  choiceContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
  },
  option: {
    width: "45%",
    height: 160,
    borderWidth: 3,
    borderColor: "#EAEAEA",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  optionText: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
});
