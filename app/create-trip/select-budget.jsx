import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({
      ...tripData,
      budget: selectedOption?.title,
    });
  },[selectedOption]);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Select Your Budget",ToastAndroid.LONG);
      return;
    }

    router.push('/create-trip/review-trip');
  };

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
          fontSize: 28,
        }}
      >
        Budget
      </Text>
      <View>
        <Text
          style={{
            fontFamily: "outfit-Medium",
            fontSize: 21,
          }}
        >
          Choose Spending habits for your trip
        </Text>
        <FlatList
          data={SelectBudgetOptions}
          keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
                marginTop: 20,
              }}
              onPress={() => setSelectedOption(item)}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => onClickContinue()}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
