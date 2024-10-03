import { Link } from 'expo-router';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <View style={{ flex: 1 , backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <ImageBackground 
        source={require('../../assets/images/Chefchaouen.jpg')} 
        resizeMode="cover" 
        style={{ flex: 1, justifyContent: 'space-between' }}
      >
        <View>
          <Text style={{
            fontSize: 100, 
            marginTop: 400,
            justifyContent: 'center',
            color: 'yellow',// #cffafe
            fontWeight: '900',
            textAlign: 'center',
            fontFamily: 'Cochin', 
          }}>
            Morocco,Land of Wonders
          </Text>
        </View>

        <View style={{ padding: 20 }}>
          <TouchableOpacity 
            style={{
              backgroundColor: 'yellow', 
              borderRadius: 30,
              paddingVertical: 15,
              paddingHorizontal: 30,
              alignSelf: 'flex-end',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Link href="/(stepper)/secondary">
              <Text style={{
                fontSize: 20, 
                color: 'black',
                fontWeight: '600',
                fontFamily: 'Arial',
              }}>
                Next
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}