import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function TodoChat({ item, navigation }) {

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Чат с собеседником')}>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/ava.png')}
                />
                <View style={styles.Additional}>
                    <View style={styles.tag}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/Ellipse_1.png')}
                        />
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        height: 85,
        flexDirection: 'column',
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 5,
        fontFamily: 'din-pro-bold',
    },
    description: {
        color: '#000',
        fontSize: 15,
        width: 249,
        fontFamily: 'din-pro',
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Additional: {
        flexDirection: 'column',
        paddingLeft: 18
    }
});