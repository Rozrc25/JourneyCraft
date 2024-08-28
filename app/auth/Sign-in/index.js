import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../../../configs/FirebaseConfig';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const checkIfLoggedIn = () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, navigate to the 'mytrip' screen
                    router.replace('/mytrip');
                }
            });
        };
        checkIfLoggedIn();
    }, []);

    const onSignIn = () => {
        if (!email || !password) {
            ToastAndroid.show("Please Enter Email & Password", ToastAndroid.LONG);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.replace('/mytrip');
                ToastAndroid.show("Welcome " + user.email, ToastAndroid.LONG);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode === 'auth/invalid-credential') {
                    ToastAndroid.show("Invalid Email or Password", ToastAndroid.LONG);
                } else {
                    ToastAndroid.show(errorMessage, ToastAndroid.LONG);
                }
            });
    };
    return (
        <SafeAreaView style={{
            padding: 25,
            marginTop: 26,
            backgroundColor: Colors.WHITE,
            height: '100%',
            paddingTop: 40
        }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'outfit-Bold',
                fontSize: 30,
                marginTop: 10
            }}>Let's Sign You In</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 20
            }} >Welcom Back</Text>
            <Text style={{
                fontFamily: 'outfit-Bold',
                color: Colors.GRAY,
                fontSize: 30,
                marginTop: 10
            }} >You've been missed</Text>

            {/* Email */}
            <View style={{
                marginTop: 30,
            }}>
                <Text style={{
                    fontFamily: 'outfit'
                }}>Email</Text>
                <TextInput
                    onChangeText={(value) => setEmail(value)}
                    style={styles.input}
                    placeholder='Enter your Email'></TextInput>
            </View>
            {/* Password */}
            <View style={{
                marginTop: 30,
            }}>
                <Text style={{
                    fontFamily: 'outfit'
                }}>Password</Text>
                <TextInput
                    onChangeText={setPassword}
                    secureTextEntry={true} style={styles.input}
                    placeholder='Enter your Password'></TextInput>
            </View>
            {/* sigh in button */}
            <TouchableOpacity
                onPress={() => onSignIn()}
                style={{
                    padding: 15,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 15,
                    marginTop: 50
                }}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center'
                }}>Sigh In</Text>
            </TouchableOpacity>
            {/* create acc */}
            <TouchableOpacity
                onPress={() => router.replace('auth/Sign-up')}
                style={{
                    padding: 15,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    marginTop: 20,
                    borderWidth: 1
                }}>
                <Text style={{
                    color: Colors.PRIMARY,
                    textAlign: 'center'
                }}>Create Account</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit'
    }
})
