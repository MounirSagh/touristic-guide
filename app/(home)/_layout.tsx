import { Stack } from 'expo-router/stack'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='home' options={{title: 'Home', headerShown: false}}/>
    </Stack>
  )
}