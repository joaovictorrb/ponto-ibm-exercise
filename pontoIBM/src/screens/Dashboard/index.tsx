import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import AuthContext from '../../context/authContext';

export default function Dashboard() {
  const navigator = useNavigation();
  // const {LogOut} = useContext(AuthContext);

  // function handleLogOut() {
  //   LogOut();
  // }

  return (
    <View style={styles.container}>
      <Header returnButton={false} />

      <View style={styles.mainContent}>
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
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={() => {}}>
          <Icon name="log-out" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
