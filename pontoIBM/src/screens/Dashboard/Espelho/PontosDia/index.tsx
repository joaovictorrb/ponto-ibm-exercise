import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../../../components/Header';
import DataContext from '../../../../context/dataContext';

export default function PontosDia() {
  // To-do's:
  // 1. Implementar a call do token dentro do context e transportar-la aqui.
  // 2. Com que a lista de pontos seja exibida num UseEffect, assim atualizando sempre que a tela for renderizada.

  const {dailyPoint, getUserRegistryPoints} = useContext(DataContext);
  
  useEffect(() => {
    getUserRegistryPoints();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Pontos do dia" returnButton={true} />

      <View style={styles.mainContent}>
        <FlatList
          data={dailyPoint as any}
          renderItem={({item}) => (
            <View style={styles.card}>
              {item.flagIsEntry === false ? (
                <Text style={styles.cardTitleAlt}>Saida</Text>
              ) : (
                <Text style={styles.cardTitle}>Entrada</Text>
              )}
              <Text style={styles.cardText}>Hora: {item.hour} </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
