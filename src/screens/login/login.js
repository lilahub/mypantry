import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import firebase from '../../configs/firebase';

function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                var user = userCredential.user;
                navigation.navigate('Inicio')

            })
            .catch((error) => {
                setErrorLogin(true)
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

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
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    type='text'
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>

            <TouchableOpacity style={styles.btnLogin} onPress={loginFirebase}>
                <Text style={styles.txtBtnLogin}>Entrar</Text>

            </TouchableOpacity>

            <View>
                <Text style={styles.registration}>
                    Não tem uma conta? Cadastre-se
                </Text>
            </View>

            <TouchableOpacity style={styles.btnCadastrar} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.txtBtnCadastrar}>Cadastrar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default Login