import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import listingApi from "../api/listings";

const ListingScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetchListings();
  }, []);
  const fetchListings = async () => {
    const response = await listingApi.getListings();
    setListings(response.data);
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
