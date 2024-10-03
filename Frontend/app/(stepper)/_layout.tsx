import { Stack } from 'expo-router/stack'

export default function Layout() {
  return(
    <Stack>
        <Stack.Screen name='index' options={{title: 'Sign in to get started', headerShown: false}}/>
        <Stack.Screen name='secondary' options={{title: 'Create new account and get started', headerShown: false}}/>
        <Stack.Screen name='third' options={{title: 'Create new account and get started', headerShown: false}}/>
    </Stack>
  )}