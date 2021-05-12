import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'sharingan-rn-modal-dropdown';

export const data = [
    {
        value: '1',
        label: 'Сортировка по алфавиту',
        avatarComponent: <MaterialCommunityIcons name="equalizer" size={36} color="#D1D1D6" />
    },
    {
        value: '2',
        label: 'Сортировка по активности',
        avatarComponent: <MaterialCommunityIcons name="equalizer" size={36} color="#D1D1D6" />
    },
    {
        value: '3',
        label: 'Группировать по типу',
        avatarComponent: <MaterialCommunityIcons name="equalizer" size={36} color="#D1D1D6" />
    },
    {
        value: '4',
        label: 'Группировать по избранному',
        avatarComponent: <MaterialCommunityIcons name="equalizer" size={36} color="#D1D1D6" />
    },
    {
        value: '5',
        label: 'Сначала непрочитанные',
        avatarComponent: <MaterialCommunityIcons name="equalizer" size={36} color="#D1D1D6" />
    }
  ];

export default function Sort() {
    const [valueSS, setValueSS] = useState('Сортировка по активности');
    const onChangeSS = (value) => {
        setValueSS(value);
      };

    return (
        <View style={styles.item}>
            <Dropdown
            label='Тип сортировки'
            data={data}
            value={valueSS}
            enableAvatar
            onChange={onChangeSS}
            onBlur
            disableSort
            itemTextStyle={styles.dropdown}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        flex: 0.135,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        fontFamily: 'din-pro',
    },
    dropdown: {
        fontFamily: 'din-pro',
        fontSize: 16
    },
    icon: {
        flex: 1,
        paddingTop: 2,
        paddingLeft: 12,
    },
    sort: {
        flex: 5.5,
        fontSize: 18,
        paddingTop: 13,
        color: '#7C8598',
        fontFamily: 'AppleSDGothicNeo-Light',
    },
    button: {
        flex: 1,
        flexDirection: 'row'
    },
    Picker: {
        height: 48,
        width: 375,
    }
})

            