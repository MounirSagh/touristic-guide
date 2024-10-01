import * as React from 'react'
import { TextInput, Button, View, StyleSheet, Text } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setPendingVerification(true)
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        router.replace('/')
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <View style={styles.container}>
      {!pendingVerification && (
        <>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Email..."
            onChangeText={(email) => setEmailAddress(email)}
          />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <Button title="Sign Up" onPress={onSignUpPress} />
        </>
      )}
      {pendingVerification && (
        <>
          <Text style={styles.title}>Verify Email</Text>
          <TextInput
            style={styles.input}
            value={code}
            placeholder="Code..."
            onChangeText={(code) => setCode(code)}
          />
          <Button title="Verify Email" onPress={onPressVerify} />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})