import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import React from "react";
import Header from "../src/components/Header";
import SearchFilter from "../src/components/SearchFilter";
import CategoriesFilter from "../src/components/CategoriesFilter";
import RecipeCard from "../src/components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 22 }}>
      {/* {renderheader} */}
      <Header headerText={"Hi, John"} headerIcon={"bell-o"} />

      {/*Search filter*/}
      <SearchFilter headerIcon="search" />

      {/*Categories Filter*/}

      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/* Categories list*/}
        <CategoriesFilter />
      </View>

      {/*Recipe List Filter*/}

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        {/* Recipe List */}

        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RecipeListScreen;
