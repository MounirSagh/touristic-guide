import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
export default function App() {
    const router=useRouter()
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker
          description="Mosque Hassan 2"
          coordinate={{ latitude: 33.608635, longitude: -7.632555 }}  // Corrected coordinates object
        />
      </MapView>
      <View style={{
    position: "absolute", 
    bottom: 0, 
    left: 0, 
    width: '100%', 
    paddingHorizontal: 60, 
    paddingVertical: 20, 
    display: 'flex', 
    flexDirection: 'row',  // Arrange items in a row
    alignItems: 'center', 
    justifyContent: 'space-between'  // Distribute buttons evenly
}}>
    <TouchableOpacity style={{
        width: "45%",  // Make each button take half the available space
        backgroundColor: 'yellow', 
        borderRadius: 100, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 15
    }}
    onPress={() => router.replace('/(home)/monument')}  // Navigate to home page
    >
        <Text style={{
            width: '100%', 
            textAlign: "center", 
            color: "black", 
            fontSize: 16
        }}>
           Back
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        width: "45%",  // Same width as the other button
        backgroundColor: 'black', 
        borderRadius: 100, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 15
    }}
    onPress={() => router.replace('/(home)/monument')}  // Navigate to home page
    >
        <Text style={{
            width: '100%', 
            textAlign: "center", 
            color: "yellow", 
            fontSize: 16
        }}>
            Learn More
        </Text>
    </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: 'white'
  },
  map: {
    width: '100%',
    height: '100%',
  },
  uploadButton: {
    marginTop: 30,
    backgroundColor: 'yellow',
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
});
