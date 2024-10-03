import { SignedIn, useUser } from '@clerk/clerk-expo';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Page() {
  const { user } = useUser();
  const route = useRouter()

  return (
    <View style={styles.container}>
      <SignedIn>
        <ImageBackground 
          source={require('../../assets/images/Fes.jpg')} 
          resizeMode="cover" 
          style={{ flex: 1, justifyContent: 'space-between' }}
        >
        <View style={styles.gradientOverlay} />

          <SafeAreaView style={styles.header}>
            <TouchableOpacity>
              <MaterialIcons name="menu" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                  <FontAwesome name="user-circle-o" size={30} color="white" />
            </TouchableOpacity>
          </SafeAreaView>

          <View style={styles.content}>
            <Text style={styles.title}>Uncover Moroccan History</Text>
            <Text style={styles.subtitle}>
              Upload an image of a monument to learn more about it.
            </Text>

            <TouchableOpacity style={styles.inputContainer}>
              <Text style={styles.input}>Choose File</Text>
              <View style={styles.uploadButton}>
                <Octicons name="upload" size={24} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.uploadButton} 
              onPress={() => route.replace('/(home)/monument')} // Navigate to home page
            >
              <Text>Upload Another Monument</Text>
            </TouchableOpacity>


          </View>
        </ImageBackground>
      </SignedIn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Dark gradient for text clarity
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'yellow',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,          
    borderColor: 'white',    
    borderRadius: 5,         
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  uploadButton: {
    marginLeft: 10,
  },
});