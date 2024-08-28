import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [tripDetails, setTripDetails] = useState(null);
  const [onlyPlan, setOnlyPlan] = useState(null);

  const parseTripData = (data) => {
    try {
      const parsedTrip = JSON.parse(trip); // Parse the trip string to get the trip data
      setTripDetails(parsedTrip); // Set the tripDetails state directly
      console.log("Parsed trip data:", parsedTrip);
    } catch (error) {
      console.error("Error parsing trip data:", error);
    }
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    if (trip) {
      try {
        setLoading(true)
        const parsedTrip = JSON.parse(trip);
        const tripData = JSON.parse(parsedTrip.tripData);
        setTripDetails(tripData);
        setOnlyPlan(parsedTrip.tripPlan);
        setLoading(false)
      } catch (error) {
        console.error("Error parsing trip data:", error);
      }
    }
  }, [trip]);

  // useEffect(() => {
  //   if (onlyPlan) {
  //     //  console.log("tripPlan data available:", onlyPlan);
  //     //  console.log("Hotels:", tripPlan.hotels);
  //   } else {
  //     console.log("tripPlan data is not available");
  //   }
  // }, [onlyPlan]);
  const tripPlan = onlyPlan;


  // Check if tripDetails and its nested properties are set
  const photoRef = tripDetails?.locationInfo?.photoRef;
  const imageUri = photoRef
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
    : null;

  return (
    <ScrollView
      style={{
        marginTop: 27,
      }}
    >
      {imageUri ? (
        <Image
          style={{
            width: "100%",
            height: 330,
          }}
          source={{ uri: imageUri }}
        />
      ) : (
        <Text>No image available</Text>
      )}
      {/* location name */}
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          height: "100%",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-Bold",
            fontSize: 25,
          }}
        >
          {tripDetails?.locationInfo?.name}
        </Text>
        {/* days */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-Medium",
              fontSize: 18,
              color: Colors.GRAY,
            }}
          >
            {tripDetails?.startDate
              ? ` ${moment.utc(tripDetails.startDate).format("Do MMM YYYY")} `
              : "Start Date: Not Available"}
          </Text>
          <Text
            style={{
              fontFamily: "outfit-Medium",
              fontSize: 18,
              color: Colors.GRAY,
            }}
          >
            -
          </Text>
          <Text
            style={{
              fontFamily: "outfit-Medium",
              fontSize: 18,
              color: Colors.GRAY,
            }}
          >
            {tripDetails?.endDate
              ? ` ${moment.utc(tripDetails.endDate).format("Do MMM YYYY")}`
              : "End Date: Not Available"}
          </Text>
        </View>
        {/* travelers */}
        <View>
          <Text
            style={{
              fontFamily: "outfit-Medium",
              fontSize: 18,
              color: Colors.GRAY,
            }}
          >
            {tripDetails?.travelerCount?.title}
          </Text>
        </View>
        {/* flight details */}
        <View>
          {tripPlan?.flights ? (
            <FlightInfo flightData={tripPlan?.flights} />
          ) : (
            <Text>No flight information available</Text>
          )}
        </View>
        {/* Hotel list */}
        <View>
        {tripPlan?.hotels ? (
        <HotelList hotelList={tripPlan.hotels}/>
          ) : (
            <Text>No Hotel  information available</Text>
          )}
        </View>
        {/* trip plan */}
        <View>
          <PlannedTrip details={tripPlan?.itinerary} />
        </View>
      </View>
    </ScrollView>
  );
}
