import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import firebase from 'firebase'
const db = firebase.firestore()

function Adicionar({ navigation }) {
    const [nome, setNome] = useState(null)
    const [quantidade, setQuantidade] = useState(null)
    const [ingrediente, setIngrediente] = useState(null)

    function addReceita() {
        db.collection('Receita').add({
            nome: nome,
            ingrediente: ingrediente,
            quantidade: quantidade

        })
        navigation.navigate('Inicio')
    }


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
                style={{ width: 53, height: 38 }}
            />


            <Text style={styles.title}>Acrescente os ingredientes</Text>

            <View style={styles.inputNome}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o nome'
                    type='text'
                    onChangeText={setNome}
                    value={nome}
                />
            </View>

            <View style={styles.inputIngrediente}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o ingrediente'
                    type='text'
                    onChangeText={setIngrediente}
                    value={ingrediente}
                />
            </View>

            <View style={styles.inputQuantidade}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite a quantidade'
                    type='text'
                    onChangeText={setQuantidade}
                    value={quantidade}
                />
            </View>

            <TouchableOpacity style={styles.btnAdicionar}>
                <Text style={styles.txtBtnAdicionar}>Adicionar outro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnFinalizar} onPress={addReceita}>
                <Text style={styles.txtBtnFinalizar}>Finalizar</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>
    )

}
export default Adicionar