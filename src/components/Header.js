import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
        {headerText}
      </Text>
      <FontAwesome
        style={{ position: "absolute", left: 340 }}
        name={headerIcon}
        size={24}
        color="#f96163"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
