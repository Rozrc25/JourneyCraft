import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/Journeycraft logo.png")}
        style={{ width: "100%", height: 400 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit-Bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit-Medium",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Personalized Itineraries at
          your fingertips. Travel smarter with AI-driven Insights.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>router.push('auth/Sign-in')}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontSize: 17,
              fontFamily: "outfit-Bold",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -28,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "100%",
    padding: 15,
  },
  button: {
    marginTop: "10%",
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
  },
});
