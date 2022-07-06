import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IRootStackParamList } from "../helpers/types";
import Authorization from "./Authorization";
import Main from "./Main";
import Registration from "./Registration";

const Stack = createNativeStackNavigator<IRootStackParamList>();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ title: "Register please" }}
      />
      <Stack.Screen name="Main" component={Main} options={{ title: "Main page" }} />
      <Stack.Screen name="Authorization" component={Authorization} />
    </Stack.Navigator>
  </NavigationContainer>
);
