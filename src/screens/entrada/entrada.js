import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font'

function Entrada({ navigation }) {
    const [fontsLoaded] = useFonts({
        Montserrat: require('../../../assets/Fonts/Montserrat-Bold.ttf')

    })
    if (!fontsLoaded) {
        return null
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <Image source={require('../../../assets/logo.png')}
                style={{ width: 161, height: 114 }}
            />
            <Image source={require('../../../assets/sacola.png')}
                style={{ width: 286, height: 338 }}
            />

            <Text style={styles.title}>Organize seu negócio e sua despensa aqui!</Text>

            <TouchableOpacity style={styles.btnComecar} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.txtBtnComecar}>Começar</Text>
            </TouchableOpacity>



        </KeyboardAvoidingView>
    )

}
export default Entrada