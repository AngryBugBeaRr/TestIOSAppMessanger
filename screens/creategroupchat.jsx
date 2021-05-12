import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const CreateGroupChat = ({ navigation }) => {
    const [isEnabledClosedChat, setIsEnabledClosedChat] = useState(false);
    const [isEnabledReadOnly, setIsEnabledReadOnly] = useState(false);
    const [isEnabledEncrypted, setIsEnabledEncrypted] = useState(false);
    const toggleSwitchClosedChat = () => setIsEnabledClosedChat(previousState => !previousState);
    const toggleSwitchReadOnly = () => setIsEnabledReadOnly(previousState => !previousState);
    const toggleSwitchEncrypted = () => setIsEnabledEncrypted(previousState => !previousState);
    const [text, setText] = React.useState('');
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
              title='Создать'
              color='#85D305'
              onPress={() => {
                setTodos((prevTodos) => {
                return [
                  { text: text, key: Math.random().toString() },
                  ...prevTodos
                ];
              });
              navigation.navigate('Чат', {todos: {text: text, key: Math.random().toString()}});
            }}
               />
        ),
      });
    }, [navigation]);
  
    return (
      <View style={styles.SettingsNewGroupChat}>
        <View>
          <View style={styles.titleNewGroup}>
            <MaterialIcons name="short-text" size={24} color="#7C8598" />
            <Text style={styles.NameNewGroupTextTag}>Название чата</Text>
          </View>
          <TextInput 
          style={styles.InputNameGroupChat}
          placeholder="Введите название чата.."
          placeholderTextColor='#7C8598'
          onChangeText={text => setText(text)}
          
          />
        </View>
        <View>
          <View style={styles.ClosedChat}>
            <Text style={styles.TextClosedChat}>Закрытый чат</Text>
            <Switch
            trackColor={{ false: "#E5E5EA", true: "#4CD964" }}
            ios_backgroundColor="#E5E5EA"
            onValueChange={toggleSwitchClosedChat}
            value={isEnabledClosedChat}
            />
          </View>
          <View style={styles.ClosedChat}>
            <Text style={styles.TextClosedChat}>Только для чтения</Text>
            <Switch
            trackColor={{ false: "#E5E5EA", true: "#4CD964" }}
            ios_backgroundColor="#E5E5EA"
            onValueChange={toggleSwitchReadOnly}
            value={isEnabledReadOnly}
            />
          </View>
          <View style={styles.ClosedChat}>
            <Text style={styles.TextClosedChat}>Зашифрованный</Text>
            <Switch
            trackColor={{ false: "#E5E5EA", true: "#4CD964" }}
            ios_backgroundColor="#E5E5EA"
            onValueChange={toggleSwitchEncrypted}
            value={isEnabledEncrypted}
            />
          </View>
        </View>
      </View>
    )
  }

  
const styles = StyleSheet.create({
    titleNewGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
    }, 
    NameNewGroupTextTag: {
      color: '#7C8598',
      fontSize: 15,
      paddingLeft: 15,
      fontFamily: 'din-pro',
    },
    InputNameGroupChat: {
      paddingLeft: 59,
      fontFamily: 'din-pro',
    },
    ClosedChat: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      height: 44,
    },
    TextClosedChat: {
      fontSize: 17,
      fontFamily: 'din-pro',
    },
    SettingsNewGroupChat: {
        paddingTop: 24,
      },
  });  
  
  export default CreateGroupChat;