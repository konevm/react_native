import React from "react";
import { Text, TextInput, Button, View, ToastAndroid } from "react-native";
import { Formik } from "formik";
import axios from "axios";
import { registrationSchema } from "../helpers/walidationSchemas";
import { IUser } from "../helpers/types";
import { styles } from "../styles/Registration.module";

interface IRegisteredUser extends IUser {
  confirmPassword: string;
}

const Registration: React.FC = ({ navigation }) => {
  const ID = Number(new Date()).toString();
  const user: IRegisteredUser = {
    id: ID,
    login: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  };

  return (
    <Formik
      initialValues={user}
      onSubmit={async (values) => {
        try {
          // Local server from another test app
          const result = await axios.post("http://10.0.2.2:3001/registration", values);
          ToastAndroid.showWithGravity(
            "Registration complete",
            ToastAndroid.LONG,
            ToastAndroid.TOP
          );
        } catch (error) {
          console.log(error);
        }
      }}
      validationSchema={registrationSchema}>
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
          <Text>Name: </Text>
          <TextInput
            style={styles.input}
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
          />
          {errors.name && <Text>{errors.name}</Text>}
          <Text>Last Name: </Text>
          <TextInput
            style={styles.input}
            value={values.lastName}
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
          />
          <Text>email: </Text>
          <TextInput
            style={styles.input}
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          <Text>password: </Text>
          <TextInput
            style={styles.input}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          <Text>confirm password: </Text>
          <TextInput
            style={styles.input}
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
          />
          <Text>Address: </Text>
          <TextInput
            style={styles.input}
            value={values.address}
            onChangeText={handleChange("address")}
            onBlur={handleBlur("address")}
          />
          <Text>Phone: </Text>
          <TextInput
            style={styles.input}
            value={values.phone}
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
          />
          <Button
            onPress={() => {
              handleSubmit();
            }}
            title="Submit"
            disabled={Object.keys(errors).length !== 0}
          />
          <Button onPress={() => navigation.navigate("Authorization")} title="Authorization" />
        </View>
      )}
    </Formik>
  );
};

export default Registration;
