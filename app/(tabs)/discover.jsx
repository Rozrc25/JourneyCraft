import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Colors } from "../../constants/Colors";
import * as Location from "expo-location";

export default function Discover() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nearBylocation, setNearByLocation] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setLoading(false); // Stop loading if permission is denied
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log("Location:", location.coords);
      setNearByLocation(location.coords);
    };

    getLocation();
  }, []);

  useEffect(() => {
    const getPlaces = async () => {
      if (nearBylocation) {
        const { latitude, longitude } = nearBylocation;
        const nearbyPlaces = await fetchNearbyPlaces(latitude, longitude);
        setPlaces(nearbyPlaces);
        setLoading(false);
      }
    };

    getPlaces();
  }, [nearBylocation]);

  const fetchNearbyPlaces = async (latitude, longitude) => {
    const types = ["amusement_park"];
    const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=150000&type=${types}&key=${API_KEY}`
      );
      // console.log("API Response:", response.data.results);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching nearby places:", error);
      return [];
    }
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={Colors.PRIMARY}
        style={styles.loader}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nearby Places</Text>
      {places.length > 0 ? (
        places.map((place, index) => (
          <View key={index} style={styles.card}>
            {/* Uncomment and update the following line if you have photos */}
            <TouchableOpacity>
              <Image
                source={{
                  uri: place.photos
                    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
                    : "https://via.placeholder.com/150",
                }}
                style={styles.image}
              />
              <Text style={styles.cardTitle}>{place.name}</Text>
              <Text style={styles.cardAddress}>{place.vicinity}</Text>
              <Text
                style={[
                  styles.businessStatus,
                  place.business_status === "OPERATIONAL"
                    ? styles.open
                    : styles.closed,
                ]}
              >
                {place.business_status === "OPERATIONAL"
                  ? "Open"
                  : "Closed Temporarily"}
              </Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>No nearby places found.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 20,
    marginTop: 28,
  },
  title: {
    fontFamily: "outfit-Bold",
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: Colors.LIGHT_GRAY,
  },
  image: {
    width: "100%",
    height: 120,
  },
  cardTitle: {
    padding: 10,
    fontFamily: "outfit-Medium",
    fontSize: 16,
    color: "#333",
  },
  cardAddress: {
    padding: 10,
    fontFamily: "outfit",
    fontSize: 14,
    color: "#666",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  businessStatus: {
    padding: 10,
    fontFamily: "outfit",
    fontSize: 14,
  },
  open: {
    color: "green",
  },
  closed: {
    color: "red",
  }
});
