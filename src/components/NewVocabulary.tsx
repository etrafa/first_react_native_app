import { View, Text, Image, StyleSheet, Button } from "react-native";

const NewVocabulary = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>New Vocabulary</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.vocabularyImage}
          source={require("../../assets/lesson-one-assets/animals/dog.png")}
        />
      </View>
      <View style={styles.exampleContainer}>
        <Text style={styles.mainLanguageText}>kedi</Text>
        <Text style={styles.translationText}>A cat</Text>
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
      <View style={styles.secondExampleContainer}>
        <Text style={styles.mainLanguageText}>Bu bir kedi.</Text>
        <Text style={styles.translationText}>It is a cat.</Text>
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
    </View>
  );
};

export default NewVocabulary;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  header: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    letterSpacing: 1.4,
    fontWeight: "bold",
    opacity: 0.6,
  },

  imageContainer: {
    width: 160,
    height: 160,
    textAlign: "center",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 3,
    borderColor: "#EAEAEA",
    borderRadius: 15,
    shadowOpacity: 0.12,
  },

  vocabularyImage: {
    width: 80,
    height: 80,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 35,
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
  secondExampleContainer: {
    width: "95%",
    height: 140,
    borderWidth: 3,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#EAEAEA",
    borderRadius: 15,
    marginVertical: 0,
  },
  mainLanguageText: {
    fontSize: 24,
    paddingTop: 40,
    paddingLeft: 40,
    letterSpacing: 1.2,
    fontWeight: "bold",
  },
  translationText: {
    fontSize: 16,
    paddingTop: 15,
    paddingLeft: 40,
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
});
