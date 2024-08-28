import { View, Text, SafeAreaView } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {CreateTripContext} from './../../context/CreateTripContext'

export default function SearchPlace() {
  const navigation = useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext);
  const router = useRouter();


  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: "Search Place",
    });
  }, []);

  // useEffect(()=>{
  //   console.log(tripData);
  // }),[tripData]

  return (
    <SafeAreaView style={{
      marginTop:28,
        padding:35,
        paddingTop:60,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search Your Destination'
      fetchDetails = {true}
      onPress={(data, details = null) => {
        
        // console.log(data, details);
        // console.log(details?.geometry.location);
        // console.log(details?.photos[0]?.photo_reference);
        // console.log(details?.url);
        setTripData({
          locationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url:details?.url
          }
        })
        router.push('/create-trip/select-Traveler')

      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}

      styles={{
        textInputContainer: {
          marginTop:25,
          borderRadius:5,
          borderWidth: 1,
        }
      }}
    />
    </SafeAreaView>
  );
}
