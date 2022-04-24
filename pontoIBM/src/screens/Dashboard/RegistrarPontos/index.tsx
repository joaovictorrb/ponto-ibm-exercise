import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './styles';
import Header from '../../../components/Header';
import DataContext from '../../../context/dataContext';

export default function RegistrarPontos() {
  // Botao de marcar o ponto vai so enviar o sinal

  // O server vai retornar um status de sucesso ou falha e alem disso uma flag

  // Baseado nessa flag, o Finalizar o dia vai ser mostrado ou nao / exibir erro ou algo assim.

  const {handleSubmit, submitToRegistry} = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Header title="Registrar Ponto" returnButton={true} />
      <TouchableOpacity></TouchableOpacity>
      <View style={styles.mainContent}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>Marcar ponto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sendDataButton}
          activeOpacity={0.8}
          onPress={submitToRegistry}>
          <Text style={styles.sendDataButtonText}>Finalizar o dia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
