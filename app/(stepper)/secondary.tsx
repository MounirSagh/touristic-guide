import { Link } from 'expo-router';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <ImageBackground 
        source={require('../../assets/images/Sahara.jpg')} 
        resizeMode="cover" 
        style={{ flex: 1, justifyContent: 'space-between' }}
      >

        <View style={{padding: 10}}>
          <Text style={{
            fontSize: 100, 
            marginTop: 50,
            justifyContent: 'center',
            color: 'yellow',
            fontWeight: '900',
            textAlign: 'right',
            fontFamily: 'Cochin', 
          }}>
            Rich Culture 
          </Text>
          <Text style={{
            fontSize: 100, 
            justifyContent: 'center',
            color: 'yellow',
            fontWeight: '900',
            textAlign: 'left',
            fontFamily: 'Cochin', 
          }}>
       and History
          </Text>
        </View>



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          {/* Back Button */}
          <TouchableOpacity 
            style={{
              backgroundColor: 'yellow', 
              borderRadius: 30, 
              paddingVertical: 15,
              paddingHorizontal: 30,
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
            <Link href="/(stepper)/">
              <Text style={{
                fontSize: 20,
                color: 'black',
                fontWeight: '600',
                fontFamily: 'Arial', 
              }}>
                Back
              </Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{
              backgroundColor: 'black', 
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
            <Link href="/(stepper)/third">
              <Text style={{
                fontSize: 20,
                color: 'yellow',
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