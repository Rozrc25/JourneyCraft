import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  // Check if userTrips has at least one trip
  if (!userTrips || userTrips.length === 0) {
    return <Text>No trips available.</Text>;
  }

  const latestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();
  const otherTrips = userTrips.slice(1);

  return (
    <View style={{ marginTop: 15 }}>
      <View>
        {latestTrip.locationInfo.photoRef ? (
          <Image
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: 15,
            }}
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                latestTrip.locationInfo.photoRef +
                "&key=" +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
          />
        ) : (
          <Image
            source={require("./../../assets/images/abu dhabi.jpg")}
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        )}
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontFamily: "outfit-Medium", fontSize: 18 }}>
            {latestTrip.locationInfo?.name || "Unknown Destination"}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontFamily: "outfit", fontSize: 18 }}>
              {moment.utc(latestTrip.startDate).format("Do MMM YYYY")}
            </Text>
            <Text style={{ fontSize: 15 }}>
              {" " + latestTrip?.travelerCount?.title}
              {latestTrip?.travelerCount?.icon}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={() =>
              router.push({
                pathname: "trip-details",
                params: {
                  trip: JSON.stringify(userTrips[0]),
                },
              })
            }
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "outfit-Medium",
                fontSize: 15,
              }}
            >
              See your Plan
            </Text>
          </TouchableOpacity>
        </View>

        {/* Render remaining trips */}
        {otherTrips?.map((trip, index) => (
          <TouchableOpacity  onPress={() =>
            router.push({
              pathname: "trip-details",
              params: {
                trip: JSON.stringify(userTrips[index+1]),
              },
            })
          } >
            <UserTripCard key={index} trip={trip} docId={trip.docId} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
