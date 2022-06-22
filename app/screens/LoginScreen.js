import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Email"),
});
const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        onSubmit={(values) => {}}
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={"email"}
          keyboardType={"email-address"}
          placeholder="Email"
          textContentType="emailAddress"
          name="email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={"lock"}
          secureTextEntry
          placeholder="Password"
          textContentType="password"
          name="password"
        />

        <SubmitButton title={"Login"} />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
