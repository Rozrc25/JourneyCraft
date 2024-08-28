import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        marginTop: 28,
        padding: 35,
        paddingTop: 60,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 33,
        }}
      >
        Review your trip
      </Text>

      <View>
        <Text
          style={{
            fontFamily: "outfit-Medium",
            fontSize: 20,
          }}
        >
          Before generating your trip,please review your selection
        </Text>
        {/* destination */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 20,
              }}
            >
              {tripData.locationInfo?.name}
            </Text>
          </View>
        </View>
        {/* Date selected info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <AntDesign name="calendar" size={30} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 20,
              }}
            >
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData.endDate).format("DD MMM") +
                "  "}
              ({tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>
        {/* Traveler info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            🚌
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Who is Traveling
            </Text>
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 20,
              }}
            >
              {tripData?.travelerCount?.title}
            </Text>
          </View>
        </View>
        {/* Budget */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            💰
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-Medium",
                fontSize: 20,
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
        {/*  */}
        <TouchableOpacity
          onPress={() => router.push("/create-trip/generate-trip")}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "outfit-Medium",
              fontSize: 18,
            }}
          >
            Build My trip
          </Text>
        </TouchableOpacity>
        <Link style={{
          textAlign:'center',
          marginTop:20,
        }} href={"/create-trip/search-place"}>
          <Text
            style={{
              textAlign: "center",
              color: Colors.PRIMARY,
              fontFamily: "outfit-Medium",
              fontSize: 18,
              marginTop: 10,
            }}
          >
            go back to edit
          </Text>
        </Link>
      </View>
    </View>
  );
}
