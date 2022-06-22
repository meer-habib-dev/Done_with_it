import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ImageInput from "./app/components/ImageInput";
import * as ImagePicker from "expo-image-picker";
import ImageInputList from "./app/components/ImageInputList";
export default function App() {
  return (
    <>
      <Screen>
        <ListingEditScreen />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
