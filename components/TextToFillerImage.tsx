import React from "react";
import { View, Text } from "react-native";
import ColourPalette from "@/assets/data/item_colour_palette";

const GetInitialChars = (inputString: string): string => {
  const words = inputString.trim().split(/\s+/);
  let initialChars: string;
  if (words.length >= 2) {
    initialChars = words[0][0] + words[1][0];
  } else {
    initialChars = inputString.slice(0, 2);
  }
  return initialChars.toUpperCase();
};

const TextToFillerImage = (
  inputString: string,
  width: number = 90,
  height: number = 90,
) => {
  const randomIndex = Math.floor(Math.random() * ColourPalette.length);
  return (
    <View
      style={{
        width: width,
        height: height,
        flex: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ColourPalette[randomIndex],
      }}
    >
      <Text style={{ color: "#fff", fontSize: 24, textAlign: "center" }}>
        {GetInitialChars(inputString)}
      </Text>
    </View>
  );
};

export default TextToFillerImage;
