import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { Feather, FontAwesome } from '@expo/vector-icons';

const ChooseFriend = () => {
    return (
      <View style={styles.containerSearchChat}>
          <View style={styles.ChatSearch}>
            <View style={styles.AdditionalView}>
              <Feather name="search" size={24} color="black" style={styles.searchInput} />
              <TextInput
                style={styles.input}
                placeholder="Поиск"
                placeholderTextColor='black'
              />
            </View>
            <FontAwesome name="microphone" size={24} color="grey" style={styles.micIcon} />
          </View>
        </View>
    );
  };
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e5e5e5',
    },
    search: {
      paddingRight: 10
    },
    form: {
      paddingRight: 10
    },
    containerSearchChat: {
      backgroundColor: '#142654',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ChatSearch: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 343,
      height: 36,
      borderRadius: 10,
      opacity: 0.34,
      justifyContent: 'space-between',
    },
    searchInput: {
      paddingRight: 10,
      opacity: 0.36,
    },
    input: {
      fontSize: 17,
      opacity: 0.34,
      flex: 0.9,
    },
    micIcon: {
      paddingRight: 8.5,
    },
    AdditionalView: {
      flexDirection: 'row',
      paddingLeft: 11.1,
    },
  });
  

  export default ChooseFriend;