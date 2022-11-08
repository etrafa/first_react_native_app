import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const FillTheBlanks = () => {
  return (
    <View>
      <Text style={styles.header}>Translate this sentence</Text>
      <View style={styles.exampleContainer}>
        <Text style={styles.mainLanguageText}>Ben 25 yaşındayım.</Text>
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
      <View style={styles.blankContainer}>
        <View style={styles.blankBox}></View>
        <View style={styles.blankBox}></View>
        <View style={styles.blankBox}></View>
        <View style={styles.blankBox}></View>
        <View style={styles.blankBox}></View>
      </View>
      <View style={styles.givenWordsContainer}>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Laura</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Etem</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Kayhan</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Ayfer</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Seniz</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Erdem</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Julie</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Lily</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>USA</Text>
        </View>
        <View style={styles.givenWords}>
          <Text style={styles.givenWordsText}>Türkiye</Text>
        </View>
      </View>
    </View>
  );
};

export default FillTheBlanks;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  header: {
    fontSize: 22,
    fontWeight: "800",
    opacity: 0.8,
    paddingTop: 60,
    textAlign: "center",
    letterSpacing: 1,
  },
  exampleContainer: {
    width: "95%",
    height: 140,
    borderWidth: 3,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#EAEAEA",
    borderRadius: 15,
    marginVertical: 20,
  },

  mainLanguageText: {
    fontSize: 24,
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 60,
    letterSpacing: 1.2,
    fontWeight: "bold",
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

  blankContainer: {
    width: "95%",
    minHeight: 70,
    borderWidth: 3,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#EAEAEA",
    borderRadius: 15,
    marginVertical: 20,
    borderStyle: "dotted",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  blankBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#EAEAEA",
    borderRadius: 15,
    borderStyle: "dotted",
    marginHorizontal: 10,
    marginVertical: 10,
  },

  givenWordsContainer: {
    width: "95%",
    minHeight: 70,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  givenWords: {
    minWidth: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  givenWordsText: {
    fontSize: 12,
    fontWeight: "600",
    opacity: 0.4,
  },
});
