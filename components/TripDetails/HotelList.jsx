import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../../constants/Colors";
import HotelCard from "./HotelCard";

export default function HotelList({ hotelList }) {
 

 
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 18,
        }}
      >
        🏨 Hotel Recommendation
      </Text>

      <FlatList
        data={hotelList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 10,
        }}
        renderItem={({ item, index }) => (
         <HotelCard item={item} />
        )}
      />
    </View>
  );
}
