import React from "react";
import { Text, TextInput, Button, View, ToastAndroid } from "react-native";
import { Formik } from "formik";
import axios from "axios";
import { authorisationSchema } from "../helpers/walidationSchemas";
import { IAuthorizationProps } from "../helpers/types";
import { API_ROUTES } from "../constants/apiRoutes.constants";
import { styles } from "../styles/Registration.module";

interface IAuthorizatedUser {
  login: string;
  password: string;
}

const Authorization: React.FC = ({ navigation }: IAuthorizationProps) => {
  const user: IAuthorizatedUser = {
    login: "",
    password: "",
  };

  return (
    <Formik
      initialValues={user}
      onSubmit={async (values) => {
        try {
          // Local server from another test app
          const result = await axios.get(API_ROUTES.AUTHORIZATION, { params: values });
          ToastAndroid.showWithGravity(
            "Authorization complete",
            ToastAndroid.LONG,
            ToastAndroid.TOP
          );
        } catch (error) {
          console.log(error);
        }
      }}
      validationSchema={authorisationSchema}>
      {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
        <View style={styles.container}>
          <Text>Login: </Text>
          <TextInput
            style={styles.input}
            value={values.login}
            onChangeText={handleChange("login")}
            onBlur={handleBlur("login")}
          />
          {errors.login && <Text>{errors.login}</Text>}
          <Text>password: </Text>
          <TextInput
            style={styles.input}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          {errors.password && <Text>{errors.password}</Text>}
          <Button
            onPress={() => {
              handleSubmit();
            }}
            title="Submit"
            disabled={Object.keys(errors).length !== 0}
          />
          <Button onPress={() => navigation.navigate("Registration")} title="Registration" />
        </View>
      )}
    </Formik>
  );
};

export default Authorization;
