import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

export default function Dashboard() {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Fulano da Silva" />

      <ScrollView style={styles.mainContent}>
        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => {
              navigator.navigate('RegistrarPontos');
            }}>
            <Text style={styles.buttonText}>Registrar pontos</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => {
              navigator.navigate('ConsultarPontos');
            }}>
            <Text style={styles.buttonText}>Consultar pontos</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => {
              navigator.navigate('Espelho');
            }}>
            <Text style={styles.buttonText}>Espelho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={() => {
            navigator.goBack;
          }}>
          <Text style={styles.logoutButtonText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
