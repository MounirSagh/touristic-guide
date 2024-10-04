import { Stack } from 'expo-router/stack'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='home' options={{title: 'Home', headerShown: false}}/>
      <Stack.Screen name='monument' options={{title: 'Monument', headerShown: false}}/>
      <Stack.Screen name='suggestions' options={{title: 'Suggestions', headerShown: false}}/>
      <Stack.Screen name='monumentfaker' options={{title: 'MonumentFaker', headerShown: false}}/>
    </Stack>
  )
}