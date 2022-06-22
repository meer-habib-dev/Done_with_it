import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import AppFormPicker from "../components/Forms/AppFormPicker";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppImagePicker from "../components/Forms/AppImagePicker";
import * as Location from "expo-location";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];
const ListingEditScreen = () => {
  const [location, setLocation] = useState();
  const geoLocation = async () => {
    const { granted } = await Location.requestBackgroundPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
  };
  useEffect(() => {
    geoLocation();
  }, []);
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={() => console.log("loc", location)}
        validationSchema={validationSchema}
      >
        <AppImagePicker name={"images"} />
        <AppFormField maxLength={255} name={"title"} placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name={"price"}
          placeholder={"Price"}
        />
        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder={"Category"}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumn={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          name={"description"}
          placeholder="Description"
          numberOfLines={3}
        />
        <SubmitButton title={"Post"} />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
