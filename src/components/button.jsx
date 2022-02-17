import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Doing something...");
      }}
    >
      <Text>I'm a button</Text>
    </TouchableOpacity>
  );
};

export default Button;
