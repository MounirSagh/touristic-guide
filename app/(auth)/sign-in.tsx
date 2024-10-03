import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icons from Expo vector icons

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image 
        source={require('../../assets/images/Riyad.jpg')} 
        style={{ width: '100%', height: 400, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} 
        resizeMode="cover" 
      />
      <View style={{
        backgroundColor: '#fff', 
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40, 
        padding: 20, 
        paddingTop: 40,
        elevation: 10,
      }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Welcome!</Text>
        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>Please sign in to continue.</Text>
        
        <View style={{ marginBottom: 15 }}>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={setEmailAddress}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
              paddingLeft: 40,
              paddingVertical: 15,
              backgroundColor: '#f7f9fc',
            }}
          />
          <MaterialIcons name="email" size={24} color="black" style={{ position: 'absolute', left: 10, top: 15 }} />
        </View>

        <View style={{ marginBottom: 20 }}>
          <TextInput
            value={password}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={setPassword}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
              paddingLeft: 40,
              paddingVertical: 15,
              backgroundColor: '#f7f9fc',
            }}
          />
          <MaterialIcons name="lock" size={24} color="black" style={{ position: 'absolute', left: 10, top: 15 }} />
        </View>

        <TouchableOpacity 
          onPress={onSignInPress} 
          style={{
            backgroundColor: 'yellow', 
            borderRadius: 10, 
            paddingVertical: 15, 
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Log In</Text>
            <MaterialIcons name="arrow-forward" size={20} color="black" style={{ marginLeft: 5 }} />
          </View>
        </TouchableOpacity>
        
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ color: '#555' }}>Don't have an account?</Text>
          <Link href="/sign-up" style={{ color: 'black', fontWeight: 'bold', marginTop: 5 }}>
            Sign Up
          </Link>
        </View>
      </View>
    </View>
  );
}