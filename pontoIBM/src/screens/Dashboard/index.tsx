import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import AuthContext from '../../context/authContext';
import MainHeader from '../../components/MainHeader';

export default function Dashboard() {
  const navigator = useNavigation();
  const {SignOut} = useContext(AuthContext);

  function handleLogOut() {
    SignOut();
  }

  return (
    <View style={styles.container}>
      <MainHeader returnButton={false} />

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
          onPress={handleLogOut}>
          <Icon name="log-out" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
