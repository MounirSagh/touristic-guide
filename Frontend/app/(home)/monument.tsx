import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SignedIn, useUser } from '@clerk/clerk-expo';
import { router, useRouter } from 'expo-router';
function Page() {
  const { user } = useUser();
  const route = useRouter(); // Navigation hook for going back to the home page

  return (
    <View style={styles.container}>
      <SignedIn>
        {/* Monument Image */}
        <Image 
          source={require('../../assets/images/Riyad.jpg')} 
          style={styles.monumentImage} 
          resizeMode="cover" 
        />

        {/* Monument Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.monumentName}>Riyad Monument</Text>
          <Text style={styles.monumentLocation}>Marrakesh, Morocco</Text>
          <Text style={styles.monumentDescription}>
            The Riyad monument is a stunning example of traditional Moroccan architecture. It is known for its intricate tile work, lush courtyards, and beautifully preserved historical features.
          </Text>

          {/* Upload Another Monument Button */}
          <View>
            <TouchableOpacity 
              style={styles.uploadButton} 
              onPress={() => router.replace('/(home)/home')} // Navigate to home page
            >
              <Text style={styles.uploadButtonText}>Upload Another Monument</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.uploadButton2} 
            onPress={() => router.replace('/(home)/suggestions')} // Navigate to home page
          >
            <Text style={styles.uploadButtonText2}>See Nearby Monuments</Text>
          </TouchableOpacity>
          </View>
          
        </View>
      </SignedIn>
    </View>
  );
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  monumentImage: {
    width: '100%',
    height: 400,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30, // To create the curved effect over the image
  },
  monumentName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  monumentLocation: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  monumentDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  uploadButton: {
    marginTop: 30,
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
  },  
  uploadButton2: {
    marginTop: 30,
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadButtonText2: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: 'bold',
  },
});