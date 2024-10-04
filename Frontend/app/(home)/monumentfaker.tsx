import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SignedIn, useUser } from '@clerk/clerk-expo';
import { router, useRouter, useLocalSearchParams } from 'expo-router';
import axios from 'axios';

// Define the type for the monument information
type MonumentInfo = {
  name: string;
  city: string;
  description: string;
};

function Page() {
  const { user } = useUser();
  const route = useRouter(); 
  const {name} = useLocalSearchParams();;

  // Initialize monumentInfo as an object with default values
  const [monumentInfo, setMonumentInfo] = useState<MonumentInfo>({
    name: '',
    city: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMonumentInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/monument/getmonumentinfo`, {
          params: { monument_name: name },
        });
        setMonumentInfo(response.data);
      } catch (err) {
        setError('Failed to fetch monument information.');
        setLoading(false);
      }
    };

    fetchMonumentInfo();
  }, []);

  return (
    <View style={styles.container}>
      <SignedIn>
        <Image 
          source={require('../../assets/images/Riyad.jpg')} 
          style={styles.monumentImage} 
          resizeMode="cover" 
        />

        {/* Monument Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.monumentName}>{monumentInfo.name}</Text>
          <Text style={styles.monumentLocation}>{monumentInfo.city}, Morocco</Text>
          <Text style={styles.monumentDescription}>
            {monumentInfo.description}
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
              onPress={() => router.replace({
                pathname: '/(home)/suggestions',
                params: { city: monumentInfo.city, name: monumentInfo.name}, // Pass city as parameter
              })}
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
    fontSize: 17,
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