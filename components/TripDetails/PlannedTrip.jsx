import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Link } from "expo-router";
import { GetPhotoRef } from "../../configs/GooglePlaceApi";

export default function PlannedTrip({ details }) {

  // const [loading, setLoading] = useState(false);

  // const [photoRef, setPhotoRef] = useState();
  // useEffect(() => {
  //   GetGooglePhotoRef();
  // }, []);

  // const GetGooglePhotoRef = async () => {
  //   setLoading(true);
  //   const result = await GetPhotoRef(details.title);
  //   setPhotoRef(result);
  //   setLoading(false);
  // };
  // const photoreff = JSON.stringify(photoRef.results);
  // const 

  // // const ImgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoreff}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;
  // console.log("Fetching photo", photoreff.);

  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 18,
        }}
      >
       📝 Plan Details
      </Text>
      <View>
        {details?.map((item, index) => (
          <View
            key={index}
            style={{
              marginBottom: 15,
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 16,
                marginBottom: 5,
              }}
            >
              Day {item.day}: {item.title}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 14,
                color: Colors.GRAY,
                marginBottom: 5,
              }}
            >
              {item.description}
            </Text>

            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 14,
                color: Colors.GRAY,
                marginBottom: 5,
              }}
            >
              Best Time: {item.best_time}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 14,
                color: Colors.GRAY,
                marginBottom: 5,
              }}
            >
              🕒 {item.time}
            </Text>
            {/* FlatList for places */}
            <FlatList
              data={item.places}
              horizontal={true}
              keyExtractor={(place, placeIndex) => placeIndex.toString()}
              renderItem={({ item: place, index: placeIndex }) => (
                <View
                  style={{
                    marginLeft: 10,
                    marginTop: 5,
                    backgroundColor: Colors.LIGHT_GRAY,
                    borderRadius: 10,
                    padding: 5,
                    width: 180,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "outfit-Medium",
                      fontSize: 14,
                      color: "#333",
                    }}
                  >
                    Place {placeIndex + 1}: {place.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "outfit",
                      fontSize: 14,
                      color: "#666",
                      marginBottom: 5,
                    }}
                  >
                    {place.details}
                  </Text>
                  
                    <TouchableOpacity  style={{
                          backgroundColor: Colors.PRIMARY,
                          borderRadius: 15,
                          padding:5,
                          marginTop:5
                        }}>
                      <Text
                       style={{
                        color: Colors.WHITE,
                        textAlign: "center",
                        fontFamily: "outfit",
                        fontSize: 14,
                       }}
                      >
                        location
                      </Text>
                    </TouchableOpacity>
                  
                </View>
              )}
            />
            {/* You can further map and display the 'places' array here if needed */}
          </View>
        ))}
      </View>
    </View>
  );
}
