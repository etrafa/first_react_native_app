import { View, Text, StyleSheet, Image } from "react-native";

const MatchCards = () => {
  return (
    <View>
      <Text style={styles.header}>Match these cards</Text>
      <View style={styles.cardContainer}>
        <View style={styles.option}>
          <Text style={styles.optionText}>kedi</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>kedi</Text>
        </View>
        <View style={styles.option}>
          <Image
            style={styles.vocabularyImage}
            source={require("../../assets/lesson-one-assets/animals/dog.png")}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>kedi</Text>
        </View>
        <View style={styles.option}>
          <Image
            style={styles.vocabularyImage}
            source={require("../../assets/lesson-one-assets/animals/dog.png")}
          />
        </View>
        <View style={styles.option}>
          <Image
            style={styles.vocabularyImage}
            source={require("../../assets/lesson-one-assets/animals/dog.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default MatchCards;

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingLeft: 40,
    paddingHorizontal: 20,
    fontSize: 22,
    fontWeight: "800",
    opacity: 0.8,
  },

  cardContainer: {
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
    justifyContent: "center",
  },
  optionText: {
    fontSize: 26,
    fontWeight: "700",
    opacity: 0.8,
  },
  vocabularyImage: {
    width: 80,
    height: 80,
  },
});
