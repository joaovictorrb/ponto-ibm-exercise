import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from './styles';
import Header from '../../../components/Header';
import DataContext from '../../../context/dataContext';

export default function ConsultarPontos() {
  // To-do's:
  // 1. Implementar a call do token dentro do context e transportar-la aqui.
  // 2. Com que a lista de pontos seja exibida num UseEffect, assim atualizando sempre que a tela for renderizada.

  const {userPoint, getUserPoint} = useContext(DataContext);

  useEffect(() => {
    getUserPoint();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Consultar Ponto" returnButton={true} />

      <View style={styles.mainContent}>
        <FlatList
          data={userPoint as any}
          renderItem={({item}) => (
            <View style={styles.card}>
              {item.flagIsEntry === false ? (
                <Text style={styles.cardTitleAlt}>Saida</Text>
              ) : (
                <Text style={styles.cardTitle}>Entrada</Text>
              )}
              <Text style={styles.cardText}>Hora: {item.hour} </Text>
              <Text style={styles.cardText}>Flag: {item.flagisEntry} </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
