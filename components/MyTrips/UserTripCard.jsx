import { View, Text, Image, Alert } from "react-native";
import React from "react";
import moment from "moment";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";

export default function UserTripCard({ trip, docId, onDelete }) {
  const tripData = JSON.parse(trip.tripData);
  
  console.log(trip.docId);
 
  const handleDelete = async () => {
    if (!docId) {
      console.error("Error: docId is undefined");
      Alert.alert("Error", "Unable to delete trip. Missing document ID.");
      return;
    }

    try {
      console.log("Deleting trip with docId:", trip.docId);
      await deleteDoc(doc(db, "UserTrips", docId)); // Ensure 'trips' is the correct collection name
      Alert.alert("Trip Deleted", "The trip has been successfully deleted.");
      if (onDelete) {
        onDelete(docId); // Optional callback to remove the trip from the UI
      }
    } catch (error) {
      console.error("Error deleting trip: ", error);
      Alert.alert("Error", "There was an error deleting the trip.");
    }
  };
  const confirmDelete = () => {
    Alert.alert("Delete Trip", "Are you sure you want to delete this trip?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: handleDelete,
        style: "destructive",
      },
    ]);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        padding: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
      }}
    >
      {tripData?.locationInfo?.photoRef ? (
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginRight: 15,
          }}
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              tripData.locationInfo.photoRef +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
        />
      ) : (
        <Image
          source={require("./../../assets/images/abu dhabi.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginRight: 15,
          }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "outfit-Medium",
            fontSize: 16,
            marginBottom: 5,
          }}
        >
          {tripData?.locationInfo?.name || "Unknown Destination"}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: Colors.GRAY,
          }}
        >
          {tripData?.startDate
            ? `Start Date: ${moment
                .utc(tripData.startDate)
                .format("Do MMM YYYY")} `
            : "Start Date: Not Available"}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: Colors.GRAY,
          }}
        >
          {tripData?.endDate
            ? `End Date: ${moment.utc(tripData.endDate).format("Do MMM YYYY")}`
            : "End Date: Not Available"}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: Colors.GRAY,
          }}
        >
          {tripData?.travelerCount?.title}
        </Text>
        <TouchableOpacity
          onPress={confirmDelete}
          style={{
            position: "absolute",
            marginTop: 70,
            marginLeft: 150,
          }}
        >
          <Ionicons name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
