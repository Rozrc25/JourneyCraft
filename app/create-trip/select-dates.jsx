import { View, Text, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from "react-native";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";


export default function selectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const {tripData,setTripData}=useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);


  const onDateChange = (date, type) => {
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else if (type === "END_DATE") {
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      ToastAndroid.show("Please Select Start and End Dates", ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, "days");
    console.log(totalNoOfDays+1);
    setTripData({
        ...tripData,
        startDate: startDate,
        endDate: endDate,
        totalNoOfDays:totalNoOfDays+1
    });

    router.push('/create-trip/select-budget');
  };

  return (
    <View
      style={{
        marginTop: 28,
        padding: 20,
        paddingTop: 70,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-Bold",
        }}
      >
        Travel Dates
      </Text>

      <View
        style={{
          marginTop: 25,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={9}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={onDateSelectionContinue}
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
