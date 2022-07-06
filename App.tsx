import React from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Registration from "./src/components/Registration";
import MainStack from "./src/components/navigation";

const App: React.FC = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.scrollView}>
    <MainStack />
    // </ScrollView>
    // </SafeAreaView>
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
