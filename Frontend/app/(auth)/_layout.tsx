import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(home)/home'} />
  }

  return(
    <Stack>
      <Stack.Screen name='sign-in' options={{title: 'Sign in to get started', headerShown: false}}/>
      <Stack.Screen name='sign-up' options={{title: 'Create new account and get started', headerShown: false}}/>
    </Stack>
  )
}