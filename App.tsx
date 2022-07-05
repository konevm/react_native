import React from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "./src/Registration/Registration";
import Authorization from "./src/Authorization/Authorization";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Authorization" component={Authorization} />
        {/* <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text>Hello </Text>
            <Registration />
          </ScrollView>
        </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: "flex",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text_input: {
    backgroundColor: "grey",
  },
});
