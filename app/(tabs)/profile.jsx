import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { auth } from "../../configs/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";

export default function Profile() {
  const navigation = useNavigation();
  const router = useRouter();
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.replace('auth/Sign-in')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{auth.currentUser?.email}</Text>
        <Text style={styles.label}>User Name: </Text>
        <Text style={styles.value}>{auth.currentUser?.email.split('@')[0]}</Text>

      </View>
      
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:28,
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  title: {
    fontFamily: "outfit-Bold",
    fontSize: 24,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "outfit",
    fontSize: 16,
    color: Colors.GRAY,
  },
  value: {
    fontFamily: "outfit-Medium",
    fontSize: 18,
    color: Colors.BLACK,
  },
  signOutButton: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginTop: 30,
  },
  signOutText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "outfit-Bold",
    fontSize: 16,
  },
});
