import {useState} from 'react'
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from './screens/Onboarding';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from './screens/Profile';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [onboardingComplete, setOnboaringComplete] = useState(false)
  const Stack = createNativeStackNavigator()


  AsyncStorage.getItem('onboardingComplete', (err, result) => {
    if(result){
      setOnboaringComplete(result)
    }
    setIsLoading(false)
  })

  if(isLoading){
    return <View/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!onboardingComplete ? 
        <Stack.Screen name='Profile' component={Profile}/> :
        <Stack.Screen name='Onboarding' component={Onboarding}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
