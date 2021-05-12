import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TodoChat from '../components/todochat';
import Sort from '../components/sort';
import 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
    const [chats] = useState([
      { text: 'Константин Константинополивский', description: 'Короткое сообщение на несколько строк, две максимум...', key: '1' },
      { text: 'Печорин Игорь Петрович', description: 'Короткое сообщение на несколько строк, две максимум...', key: '2' },
      { text: '# Созданный чат', description: 'Короткое сообщение на несколько строк, две максимум...', key: '3' }
    ]);
  
    return (
      <View style={styles.container}>
        <Sort />
        <View style={styles.list}>
          <FlatList
          data={chats}
          renderItem={({ item }) => (
          <TodoChat item={ item } navigation={navigation} />
          )}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e5e5e5',
    },
  });
  
  export default HomeScreen;