import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { color, recipeList } from "../../screens/Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RecipeDetail", { item: item })}
            style={{
              backgroundColor: color.COLOR_LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text>{item.time}</Text>
              <Text> / </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={color.COLOR_PRIMARY}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCard;

const style = StyleSheet.create({});
