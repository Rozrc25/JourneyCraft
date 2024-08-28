import { Text, View } from "react-native";
import Login from "../components/Login";
import { useFonts } from "expo-font";
import {auth} from './../configs/FirebaseConfig'
import { Redirect } from "expo-router";

export default function Index() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    "outfit-Medium": require("./../assets/fonts/Outfit-Medium.ttf"),
  });

  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >{
      user?
      <Redirect href={'/mytrip'}/>:
      <Login />}
    </View>
  );
}
