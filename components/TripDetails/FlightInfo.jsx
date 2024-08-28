import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const FlightInfo = ({ flightData }) => {
  if (!Array.isArray(flightData) || flightData.length === 0) {
    return <Text>No flight information available</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {flightData.map((flight, index) => (
        <View key={index} style={styles.flightContainer}>
          <Text
            style={{
              fontFamily: "outfit-Bold",
              fontSize: 15,
            }}
          >
            ✈️ Flights
          </Text>
          <Text style={styles.airline}>{flight.airline}</Text>
          <Text style={styles.details}>
            Departure: {flight.departure} - Arrival: {flight.arrival}
          </Text>
          <Text style={styles.details}>Date: {flight.date}</Text>
          <Text style={styles.details}>Price: {flight.price}</Text>

          <TouchableOpacity
            style={{
              padding: 8,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 15,
            }}
            onPress={() => Linking.openURL(flight.booking_url)}
          >
            <Text style={styles.link}>Book here</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
  },
  flightContainer: {
    marginBottom: 15,
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 5,
  },
  airline: {
    fontFamily: "outfit-Bold",
    fontSize: 18,
  },
  details: {
    fontFamily: "outfit-Medium",
    fontSize: 16,
    color: Colors.GRAY,
  },
  link: {
    color: Colors.WHITE,
    fontFamily: "outfit-Medium",
    textAlign: "center",
  },
});

export default FlightInfo;
