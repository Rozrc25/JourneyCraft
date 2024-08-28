import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../../constants/Colors'
import { useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../../../configs/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullName, setFullName] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    const OnCreateAccount = () => {

        if(!email&&!password&&!fullName){
            ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM)
            return ;
        }
        console.log(fullName,email,password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                router.replace('/mytrip')
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode)
            });
    }

    return (
        <SafeAreaView style={{
            marginTop: 27,
            backgroundColor: Colors.WHITE,
            padding: 25,
            paddingTop: 20,
            height: '100%'
        }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'outfit-Bold',
                fontSize: 28,
            }}>Create New Account</Text>
            {/* name */}
            <View style={{
                marginTop: 30,
            }}>
                <Text style={{
                    fontFamily: 'outfit'
                }}>Full Name</Text>
                <TextInput style={styles.input}
                    placeholder='Enter your name'
                    onChangeText={(value) => setFullName(value)}>

                </TextInput>
            </View>
            {/* Email */}
            <View style={{
                marginTop: 30,
            }}>
                <Text style={{
                    fontFamily: 'outfit'
                }}>Email</Text>
                <TextInput style={styles.input} 
                placeholder='Enter your Email'
                onChangeText={(value)=>setEmail(value)}
                ></TextInput>
            </View>
            {/* Password */}
            <View style={{
                marginTop: 30,
            }}>
                <Text style={{
                    fontFamily: 'outfit'
                }}>Password</Text>
                <TextInput secureTextEntry={true} 
                style={styles.input} 
                placeholder='Enter your Password'
                onChangeText={(value)=>setPassword(value)}
                ></TextInput>
            </View>
            {/* create acc */}
            <TouchableOpacity 
            onPress={OnCreateAccount()} 
            style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 50
            
            }}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center'
                }}>Create Account</Text>
            </TouchableOpacity>
            {/* create acc */}
            <TouchableOpacity
                onPress={() => router.replace('auth/Sign-in')}
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
                }}>Sigh In</Text>
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