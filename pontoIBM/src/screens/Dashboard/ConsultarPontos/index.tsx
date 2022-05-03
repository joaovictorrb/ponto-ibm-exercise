import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from './styles';
import Header from '../../../components/Header';
import DataContext from '../../../context/dataContext';

export default function ConsultarPontos() {

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
            </View>
          )}
        />
      </View>
    </View>
  );
}
