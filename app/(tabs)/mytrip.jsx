import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { auth, db } from "./../../configs/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import UserTripList from "../../components/MyTrips/UserTripList";
import { router, useRouter } from "expo-router";

export default function Mytrip() {
  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setUserTrips((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <View
      style={{
        marginTop: 27,
        padding: 25,
        paddingTop: 35,
        backgroundColor: Colors.WHITE,
        height: "100%",
        marginBottom:5
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-Bold",
              fontSize: 35,
            }}
          >
            My Trip
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/create-trip/search-place")}
          >
            <Ionicons name="add-circle" size={40} color="black" />
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        ) : userTrips?.length === 0 ? (
          <StartNewTripCard />
        ) : (
          <UserTripList userTrips={userTrips} />
        )}
      </ScrollView>
    </View>
  );
}
