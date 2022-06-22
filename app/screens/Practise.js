import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

const Practise = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppButton title={"Login In"} onPress={() => console.log("tappeds")} />
    </View>
  );
};

export default Practise;

const styles = StyleSheet.create({});
