import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GetPhotoRef } from "../../configs/GooglePlaceApi";

export default function HotelCard({ item }) {
  const [loading, setLoading] = useState(false);

  const [photoRef, setPhotoRef] = useState();
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    setLoading(true);
    const result = await GetPhotoRef(item.name);
    setPhotoRef(result);
    setLoading(false);
    console.log("Fetching photo");
  };

  // if (result && result.results && result.results.length > 0) {
  //   const photoReff = result.results[0]?.photos?.[0]?.photo_reference;
  //   console.log("Google Photo Reference: " + photoRef);
  //   console.log("photo final link "+ ImgUrl);
  //   // You can now use this photo reference to get the actual image
  // } else {
  //   console.log("No photo reference found.");
  // }

  const photoreff = photoRef?.results?.[0]?.photos?.[0]?.photo_reference;

  const ImgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoreff}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;

  //
  return (
    <View
      style={{
        marginRight: 15,
        width: 180,
      }}
    >
      <TouchableOpacity>
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : photoRef ? (
          <Image
            style={{
              width: 180,
              height: 120,
              borderRadius: 15,
            }}
            source={{
              uri: ImgUrl,
            }}
          />
        ) : (
          <Text>No Image Available</Text>
        )}

        <View style={{ padding: 5 }}>
          <Text
            style={{
              fontFamily: "outfit-Medium",
              fontSize: 13,
            }}
          >
            {item.name}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-Medium",
              fontSize: 13,
            }}
          >
            ⭐{item.rating}
          </Text>
          <Text> {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
