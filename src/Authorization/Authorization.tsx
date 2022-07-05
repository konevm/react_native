import React from "react";
import { Text, TextInput, Button, View, ToastAndroid } from "react-native";
import { Formik } from "formik";
import axios from "axios";
import { authorisationSchema } from "../helpers/walidationSchemas";
import { styles } from "../styles/Registration.module";

interface IAuthorizatedUser {
  login: string;
  password: string;
}

const Authorization: React.FC = () => {
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
          const result = await axios.get("http://10.0.2.2:3001/authorization", { params: values });
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
        </View>
      )}
    </Formik>
  );
};

export default Authorization;
