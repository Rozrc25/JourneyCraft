import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        {
          padding: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: 5,
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedOption?.id === option.id && { borderWidth: 3, borderColor: Colors.PRIMARY },
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-Bold",
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit",
            color: Colors.GRAY,
          }}
        >
          {option?.desc}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          marginRight:5
        }}
      >
        {option?.icon}
      </Text>
    </View>
  );
}
