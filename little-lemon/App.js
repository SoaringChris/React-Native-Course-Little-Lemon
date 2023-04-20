import {useCallback, useState, useEffect} from 'react'
import { StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from './screens/Onboarding';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from './screens/Profile';
import Home from './screens/Home';
import useFonts from './hooks/useFonts'
import * as SplashScreen from 'expo-splash-screen'
import Header from './components/Header';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [onboardingComplete, setOnboaringComplete] = useState(false)
  const Stack = createNativeStackNavigator()

  useEffect(() => {
    async function prepare(){
      try{
        await useFonts()
      }catch(e){
        console.warn(e)
      }finally{
        setHasLoaded(true)
      }
    }

    prepare()
  }, [])

  // AsyncStorage.getItem('onboardingComplete', (err, result) => {
  //   if(result){
  //     setOnboaringComplete(result)
  //   }
  //   setIsLoading(false)
  // })

if(!hasLoaded){
  return null
}

  SplashScreen.hideAsync()

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: Header}}>
          {!onboardingComplete ? (
          <>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile} />
          </>
          ) : (
          <Stack.Screen name='Onboarding' component={Onboarding}/>)
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
