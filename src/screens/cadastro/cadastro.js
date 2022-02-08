import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './styles';
import firebase from '../../configs/firebase';

function Cadastro({ navigation }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorCadastro, setErrorCadastro] = useState("")

    const cadastroBd = () => {

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {

                var user = userCredential.user;
                console.log(user)
                navigation.navigate('Login', { idUser: user.uid }) //trazendo informações singular do usuário, tá sendo usado?

            })
            .catch((error) => {
                setErrorCadastro(true)
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
        <KeyboardAvoidingView style={styles.container}>

            <Image source={require('../../../assets/logo.png')}
                style={{ width: 161, height: 114 }}
            />

            <View >
                <TextInput style={styles.input}
                    placeholder='Nome'
                />
            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder='Email'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>

            <View>

                <TextInput style={styles.input}
                    placeholder='Senha'
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>


            <TouchableOpacity style={styles.btnCadastrar} onPress={cadastroBd}>
                <Text style={styles.txtBtnCadastrar}>Cadastrar</Text>

            </TouchableOpacity>



        </KeyboardAvoidingView>
    )
}

export default Cadastro