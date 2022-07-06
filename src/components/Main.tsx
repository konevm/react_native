import React from "react";
import { Text, ScrollView, StatusBar, TouchableHighlight } from "react-native";
import { IMainProps } from "../helpers/types";

export default ({ navigation }: IMainProps) => {
  const navigationList = ["Main", "Authorization", "Registration"];
  return (
    <ScrollView>
      <StatusBar hidden />
      {navigationList.map((item, index) => (
        <TouchableHighlight
          key={index}
          activeOpacity={0.7}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate(item as any)}>
          <Text>{item}</Text>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};
