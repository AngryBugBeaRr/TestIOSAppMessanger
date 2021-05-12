import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import { AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';


const CreateChatScreen = ({ navigation }) => {
  
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
        <View>
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
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Новый групповой чат')}>
              <View style={styles.GroupChat}>
                <FontAwesome5 name="hashtag" size={24} color="#1B2A4A" />
                <Text style={styles.GroupChatText}>Создать новый групповой чат</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Выбор собеседника')}>
              <View style={styles.CreateMessage}>
              <AntDesign name="addusergroup" size={24} color="#1B2A4A" />
                <Text style={styles.Message}>Написать личное сообщение</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
const styles = StyleSheet.create({
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
      fontFamily: 'din-pro',
    },
    micIcon: {
      paddingRight: 8.5,
    },
    AdditionalView: {
      flexDirection: 'row',
      paddingLeft: 11.1,
    },
    GroupChat: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 48,
      paddingTop: 24
    },
    GroupChatText: {
      fontSize: 16,
      textDecorationColor: '#1B2A4A',
      paddingRight: 55,
      fontFamily: 'din-pro',
    },
    CreateMessage: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 48,
      paddingTop: 24,
    },
    Message: {
      fontSize: 16,
      textDecorationColor: '#1B2A4A',
      paddingRight: 62,
      fontFamily: 'din-pro',
    },
  });

  export default CreateChatScreen;