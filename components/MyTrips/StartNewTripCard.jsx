import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Ionicons name="location" size={30} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit-Medium",
        }}
      >
        No Trips Planned Yet
      </Text>

      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-Medium",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its time to plan a new travel experience! Get started Below
      </Text>

      <TouchableOpacity
      onPress={()=>router.push('/create-trip/search-place')}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text style={{ color: Colors.WHITE, fontFamily: "outfit-Medium" }}>
          Start a New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
