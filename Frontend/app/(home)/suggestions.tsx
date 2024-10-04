import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import axios from 'axios';

// Define the type for the monument information
type MonumentInfo = {
  name: string;
  longitude: string;
  latitude: string;
};

// Update state to hold an array of monuments
export default function App() {
  const router = useRouter();
  const { city } = useLocalSearchParams();
  console.log(city)
  const { name } = useLocalSearchParams();
  console.log(name)

  // Initialize monumentInfo as an array
  const [monumentInfo, setMonumentInfo] = useState<MonumentInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMonumentInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/monument/getsuggestions`, {
          params: { Monument_city: city },
        });
        setMonumentInfo(response.data); // Set the fetched data to the state
      } catch (err) {
        setError('Failed to fetch monument information.');
      } finally {
        setLoading(false);
      }
    };

    fetchMonumentInfo();
  }, [city]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {/* Render markers for each monument */}
        {monumentInfo.map((monument) => (
          <Marker
            key={monument.name} // Use unique key for each marker
            description={monument.name} // Description on marker
            coordinate={{
              latitude: parseFloat(monument.latitude), // Convert latitude to number
              longitude: parseFloat(monument.longitude), // Convert longitude to number
            }}
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace({
            pathname: '/(home)/monumentfaker',
            params: {name: name}, // Pass city as parameter
          })}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,

    width: '100%',
    paddingHorizontal: 60,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    width: '45%',
    backgroundColor: 'yellow',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  learnButton: {
    width: '45%',
    backgroundColor: 'black',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
});