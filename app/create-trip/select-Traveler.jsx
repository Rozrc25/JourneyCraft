import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { SelectTravelerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { useContext } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function selectTraveler() {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, travelerCount: selectedTraveler });
  }, [selectedTraveler]);

  return (
    <SafeAreaView
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
        marginTop: 28,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-Bold",
          marginTop: 5,
        }}
      >
        Who's Traveling
      </Text>

      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontFamily: "outfit-Bold",
          }}
        >
          Choose Your Traveler
        </Text>
        <FlatList
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
        }}
      >
        <Link href={'/create-trip/select-dates'} style={{
          textAlign:'center'
        }}>
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "outfit-Medium",
              fontSize: 18,
            }}
          >
            Continue
          </Text>
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
