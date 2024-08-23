import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Switch } from 'react-native';


export default function SettingsScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
            <View style={styles.container}>
                <Text>Hello from the Settings page!</Text>
                <View style={{width: 'auto', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'pink'}}>
                <Text style={{fontWeight: 'bold', alignSelf: 'flex-start'}}>Enable card-style menu list</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#22c55e'}}
                    thumbColor={isEnabled ? '#fff' : '#fff'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{alignSelf: 'flex-end'}}
                />
                </View>
                <View style={{width: 'auto', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'pink'}}>
                <Text style={{fontWeight: 'bold', alignSelf: 'flex-start'}}>Enable single-style menu list</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#22c55e'}}
                    thumbColor={isEnabled ? '#fff' : '#fff'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{alignSelf: 'flex-end'}}
                />
                </View>

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    coolButton: {
        backgroundColor: 'black',
        borderRadius: 8,
        margin: 2,
    },
});