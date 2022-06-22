import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({}) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/viewimage.jpg")} />
      <View style={styles.detailsContain}>
        <AppText style={styles.title}>Red facial for sale</AppText>
        <AppText>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/download.png")}
            title={"Meer Habib"}
            subTitle={"5 Listing Images"}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContain: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  userContainer: {
    marginVertical: 40,
  },
});
