import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ headerIcon }) => {
  return (
    <View style={styles.section}>
      <FontAwesome name={headerIcon} size={20} color={"#f96163"} />
      <TextInput
        style={{ paddingLeft: 8, fontSize: 16, color: "#808080" }}
        placeholder="Search your fav Recipe Here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  filterText: {
    color: "black",
    fontSize: 15,
    paddingLeft: 8,
  },
});

export default SearchFilter;
