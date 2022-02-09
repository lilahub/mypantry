import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Entrada from './src/screens/entrada/entrada';
import Login from './src/screens/login/login';
import Cadastro from './src/screens/cadastro/cadastro';
import Inicio from './src/screens/inicio/inicio';
import Adicionar from './src/screens/adicionar/adicionar';
import Conta from './src/screens/conta/conta';
import Editar from './src/screens/editar/editar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen
          name="Entrada"
          component={Entrada}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Adicionar"
          component={Adicionar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Conta"
          component={Conta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Editar"
          component={Editar}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  )
}
