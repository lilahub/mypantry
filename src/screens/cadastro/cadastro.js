import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './styles';

function Cadastro({ navigation }) {
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
            <Image source={require('../../../assets/logo.png')}
                style={{ width: 161, height: 114 }}
            />

            <View style={styles.inputEmail}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    type='text'
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    type='text'
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Repita a senha'
                    type='text'
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o nome do seu negócio'
                    type='text'
                />
            </View>

            <TouchableOpacity style={styles.btnCadastrar}>
                <Text style={styles.txtBtnCadastrar}>Cadastrar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default Cadastro