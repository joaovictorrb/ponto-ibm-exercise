import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header';

export default function RegistrarPontos() {
  const navigator = useNavigation();

  const flagIsEntry = true;

  return (
    <View style={styles.container}>
      <Header title="Registrar Ponto" returnButton={true} />
      <TouchableOpacity></TouchableOpacity>
      <View style={styles.mainContent}>
        {flagIsEntry ? (
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Marcar ponto</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>O ponto foi marcado</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.sendDataButton}
          activeOpacity={0.8}
          // onPress={OnClickSubmit}
        >
          <Text style={styles.sendDataButtonText}>Finalizar o dia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const OnClickSubmit = useCallback(
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const response = await request('post', `/${userId}/newPointRegistry`);

//     if (response.status !== 200) {
//       // navigate(`/review/${id}`);
//       return alert('Somethign went wrong while trying to save the review.');
//     }
//     // setDisable(true);
//     setFlagIsEntry({flagIsEntryPoint});
//     // navigate(`/review/${id}`);
//     return alert('Successfully saved point.');
//   },
//   [/*navigate, reviewDescription, review,*/ iuserId, request],
// );
