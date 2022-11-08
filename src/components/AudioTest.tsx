import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const AudioTest = () => {
  return (
    <View>
      <Text style={styles.header}>What did you hear?</Text>
      <Image
        style={styles.icon}
        source={require("../../assets/icons/volume-color.png")}
      />
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

export default AudioTest;
const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "800",
    opacity: 0.8,
    paddingTop: 60,
    textAlign: "center",
  },

  icon: {
    width: 80,
    height: 80,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
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
