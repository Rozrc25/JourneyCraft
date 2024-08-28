import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModal";
import { useRouter } from "expo-router";
import { auth, db } from "../../configs/FirebaseConfig";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData.locationInfo?.name
    )
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNight}", tripData.totalNoOfDays - 1)
      .replace("{traveler}", tripData?.travelerCount?.title)
      .replace("{budget}", tripData.budget)
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNight}", tripData.totalNoOfDays - 1);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());

    const tripResp = JSON.parse(result.response.text());

    setLoading(false);
    const docId = Date.now().toString();

    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripResp, //Ai result
      tripData:JSON.stringify(tripData), //user resp
      docId:docId,
      createdAt: serverTimestamp()
    });

      router.push("(tabs)/mytrip");

  };

  return (
    <View
      style={{
        padding: 25,
        marginTop: 30,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 30,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: "outfit-Medium",
          fontSize: 25,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        We are working to generating your dream trip
      </Text>
      <Image
        source={require("./../../assets/images/Running.gif")}
        style={{
          width: "100%",
          height: 250,
          objectFit: "contain",
        }}
      />

      <Text
        style={{
          fontFamily: "outfit-Medium",
          fontSize: 20,
          textAlign: "center",
          marginTop: 30,
          color: Colors.GRAY,
        }}
      >
        Don't Go Back
      </Text>
    </View>
  );
}
