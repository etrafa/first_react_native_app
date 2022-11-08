import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const MultipleChoice = () => {
  return (
    <View>
      <Text style={styles.header}>Translate this sentence</Text>
      <View style={styles.wordContainer}>
        <Text style={styles.text}>A cat</Text>
        <View style={styles.volumeContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/volume.png")}
          />
        </View>
        <View style={styles.slowReadContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/snail.png")}
          />
        </View>
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Erkek çocuk on iki yaşında.</Text>
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

export default MultipleChoice;
const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "800",
    opacity: 0.8,
    paddingTop: 60,
    textAlign: "center",
  },
  wordContainer: {
    width: "95%",
    height: 140,
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
    width: 45,
    height: 45,
    position: "absolute",
    top: 20,
    right: 15,
    borderWidth: 3,
    borderColor: "#EAEAEA",
    borderRadius: 10,
  },

  slowReadContainer: {
    width: 45,
    height: 45,
    position: "absolute",
    top: 75,
    right: 15,
    borderWidth: 3,
    borderColor: "#EAEAEA",
    borderRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
    opacity: 0.7,
    marginTop: 7,
    marginLeft: "auto",
    marginRight: "auto",
  },
  optionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
  },

  option: {
    width: "95%",
    height: 80,
    borderWidth: 3,
    borderColor: "#EAEAEA",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "800",
    opacity: 0.8,
    paddingTop: 25,
    paddingHorizontal: 20,
  },
});
