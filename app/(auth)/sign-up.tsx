import * as React from 'react';
import { TextInput, Button, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icons

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace('/(home)/home');
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      {!pendingVerification && (
        <>
          <Image 
            source={require('../../assets/images/Qalaa.jpg')} 
            style={{ width: '100%', height: 400, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} 
            resizeMode="cover" 
          />
          <View style={{padding: 20}}>
            <Text style={styles.headerText}>Create Account</Text>
            <Text style={styles.subHeaderText}>Sign up to get started</Text>

            <View style={styles.inputContainer}>
              <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
              <TextInput
                value={firstName}
                placeholder="First Name"
                onChangeText={setFirstName}
                placeholderTextColor="#000"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
              <TextInput
                value={lastName}
                placeholder="Last Name"
                onChangeText={setLastName}
                placeholderTextColor="#000"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
              <TextInput
                value={emailAddress}
                placeholder="Email"
                onChangeText={setEmailAddress}
                placeholderTextColor="#000"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <MaterialIcons name="lock" size={24} color="black" style={styles.icon} />
              <TextInput
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPassword}
                placeholderTextColor="#000"
                style={styles.input}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
              <Text style={styles.buttonText}>Sign Up</Text>
              <MaterialIcons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
          </View>
         
        </>
      )}

      {pendingVerification && (
        <>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={styles.headerText}>Verify Email</Text>
            <Text style={styles.subHeaderText}>Enter the code sent to your email</Text>

            <View style={styles.inputContainer}>
              <MaterialIcons name="verified" size={24} color="black" style={styles.icon} />
              <TextInput
                value={code}
                placeholder="Verification Code"
                onChangeText={setCode}
                placeholderTextColor="#000"
                style={styles.input}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={onPressVerify}>
              <Text style={styles.buttonText}>Verify Email</Text>
              <MaterialIcons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
          </View>
         
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});