import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="book-outline" color="#000" size={22} />
        <Text style={styles.iconText}>Learn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="person-outline" color="#000" size={22} />
        <Text style={styles.iconText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="settings-outline" color="#000" size={22} />
        <Text style={styles.iconText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f5f2f2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  iconContainer: {
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 8,
    textAlign: "center",
  },
});
