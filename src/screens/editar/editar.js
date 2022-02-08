import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import firebase from 'firebase'
const db = firebase.firestore()

function Editar({ navigation, route }) {
    const [nomeEdit, setNomeEdit] = useState(route.params.nome)
    const [ingredienteEdit, setIngredienteEdit] = useState(route.params.ingrediente)
    const [quantidadeEdit, setQuantidadeEdit] = useState(route.params.quantidade)
    const idReceita = route.params.id

    function salvarEditar(nome, ingrediente, quantidade, id) {
        bd.collection("Receita").doc(id).update({
            nome: nomeEdit,
            ingrediente: ingredienteEdit,
            quantidade: quantidadeEdit
        })

        navigation.navigate('Inicio')
    }

    function deletar(id) {
        bd.collection("Receita").doc(id).delete()

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

            <Text style={styles.title}>Edite os ingredientes</Text>

            <View >
                <TextInput style={styles.input}
                    onChangeText={setNomeEdit}
                    value={nomeEdit}
                />
            </View>

            <View >
                <TextInput style={styles.input}
                    onChangeText={setIngredienteEdit}
                    value={ingredienteEdit}
                />
            </View>

            <View >
                <TextInput style={styles.input}
                    onChangeText={setQuantidadeEdit}
                    value={quantidadeEdit}
                />
            </View>

            <TouchableOpacity style={styles.btnExcluir}
                onPress={() => {
                    deletar(idReceita)
                }}
            >
                <Text style={styles.txtBtnExcluir}>
                    Excluir
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSalvar}
                onPress={() => {
                    salvarEditar(nomeEdit, idReceita)
                }}
            >
                <Text
                    style={styles.txtBtnSalvar}>
                    Salvar alterações
                </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btnSalvar}>
                <Text style={styles.txtBtnSalvar}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnFinalizar} onPress={addReceita}>
                <Text style={styles.txtBtnFinalizar}>Finalizar</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>
    )

}
export default Editar