import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import { useFonts } from 'expo-font';


function Conta({ navigation }) {
    const [fontsLoaded] = useFonts({
        Montserrat: require('../../../assets/Fonts/Montserrat-Regular.ttf')
    })

    if (!fontsLoaded) {
        return null
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>
                    Perfil
                </Text>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Configurações da conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Compartilhe sua experiência</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Central de ajuda</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Sobre nós</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>
    )
}
export default Conta