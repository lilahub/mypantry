import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, FlatList, TextInput, Image } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; ''

import firebase from 'firebase'
const db = firebase.firestore()

function Inicio({ navigation }) {
    const [Receita, setReceita] = useState([])

    useEffect(() => {
        db.collection("Receita").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setReceita(list)
        })

    }, [])

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
                style={styles.logo}
            />

            <Text style={styles.title}>Olá, comece a se organizar!</Text>

            <FlatList

                data={Receita}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity style={styles.descricao} onPress={() => {
                            navigation.navigate("Editar", {
                                nome: item.nome,
                                ingrediente: item.ingrediente,
                                quantidade: item.quantidade
                            })
                        }}>

                            <Text>{item.nome}</Text>

                        </TouchableOpacity>



                    )
                }}

            />


            <TouchableOpacity style={styles.btnAdicionar} onPress={() => navigation.navigate('Adicionar')}>
                <Text style={styles.txtBtnAdicionar}>Adicionar receita</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnAdicionar} onPress={() => navigation.navigate('Adicionar')}>
                <Text style={styles.txtBtnAdicionar}>Adicionar receita</Text>
            </TouchableOpacity>



        </KeyboardAvoidingView>
    )

}
export default Inicio