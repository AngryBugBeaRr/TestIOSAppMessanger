import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Feather } from '@expo/vector-icons';
import HomeScreen from './screens/homescreen';
import ChatScreen from './screens/chatscreen';
import CreateChatScreen from './screens/createchatscreen';
import ChooseFriend from './screens/choosefriend';
import CreateGroupChat from './screens/creategroupchat';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

const App = () => {
  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      'din-pro': require('./assets/fonts/DINPro.ttf'),
      'din-pro-bold': require('./assets/fonts/DINPro-Bold.ttf'),
    });
    setFontsLoaded(true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#142654'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'AppleSDGothicNeo-Light',
            fontSize: 20
          },
        }}
      >
        <Stack.Screen 
          name="Чат"
          component={HomeScreen}
          options={({ navigation }) => ({ 
            headerRight: () => (
                <Text>
                <TouchableOpacity onPress={() => navigation.navigate('Новый диалог')}><AntDesign name="form" size={24} color="white" style={styles.form} /></TouchableOpacity>
                <TouchableOpacity><Feather name="search" size={24} color="white" style={styles.search} /></TouchableOpacity>
                </Text>
                ),
            headerLeft: () => (
                <TouchableOpacity><AntDesign name="left" size={24} color="white" /></TouchableOpacity>
            ),
            headerTitleStyle: { fontFamily: 'din-pro', fontSize: 17, fontWeight: 'normal' }, 
          })}
        />
        <Stack.Screen name="Новый диалог" component={CreateChatScreen}
        options={{headerTitleStyle: { fontFamily: 'din-pro', fontSize: 17, fontWeight: 'normal' }}}
        />
        <Stack.Screen name="Выбор собеседника" component={ChooseFriend} 
        options={{headerTitleStyle: { fontFamily: 'din-pro', fontSize: 17, fontWeight: 'normal' }}}
        />
        <Stack.Screen name='Чат с собеседником' component={ChatScreen}
        options={{headerTitleStyle: { fontFamily: 'din-pro', fontSize: 17, fontWeight: 'normal' }}}
         />
        <Stack.Screen 
        name="Новый групповой чат" 
        component={CreateGroupChat}
        options={{headerTitleStyle: { fontFamily: 'din-pro', fontSize: 17, fontWeight: 'normal' }}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default App;

const styles = StyleSheet.create({
  search: {
    paddingRight: 10
  },
  form: {
    paddingRight: 10
  },
});
