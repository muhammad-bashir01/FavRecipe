import React from "react";
import { TouchableOpacity, Text, Alert, View, StyleSheet } from "react-native";
// import {
//   Text,
//   Alert,
//   View,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
// } from "react-native-web";

// export const GreetingComponent = () => {
//   return (
//     <View>
//       <Text>Hello there! I'm just a greeting componente</Text>
//     </View>
//   );
// };

// const handleClick = () => {
//   console.log("Button Clicked");
//   //   Alert.alert("Button Clicked");
// };

// export const ButtonComponent = () => {
//   return (
//     <TouchableOpacity style={styles.customButton} onPress={handleClick}>
//       <Text style={styles.textButton}>Click Me</Text>
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({
  customButton: {
    width: 200,
    height: 40,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
  },
});
