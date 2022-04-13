import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../../components/Header';

export default function Espelho() {
  const mockup = [
    {
      pointId: '17',
      user_id: '1',
      date: '2022-04-12',
      hour: '12:45',
      unixTimeStampMilli: '1649767527971',
      created_at: '2022-04-12 09:45:28',
      updated_at: '2022-04-12 09:45:28',
    },
    {
      pointId: '18',
      user_id: '1',
      date: '2022-04-12',
      hour: '12:45',
      unixTimeStampMilli: '1649767529257',
      created_at: '2022-04-12 09:45:29',
      updated_at: '2022-04-12 09:45:29',
    },
    {
      pointId: '19',
      user_id: '1',
      date: '2022-04-12',
      hour: '12:45',
      unixTimeStampMilli: 1649767530160,
      created_at: '2022-04-12 09:45:30',
      updated_at: '2022-04-12 09:45:30',
    },
    {
      pointId: '20',
      user_id: 1,
      date: '2022-04-12',
      hour: '12:45',
      unixTimeStampMilli: 1649767531907,
      created_at: '2022-04-12 09:45:31',
      updated_at: '2022-04-12 09:45:31',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Folha Espelho" returnButton={true} />

      <View style={styles.mainContent}>
        <FlatList
          data={mockup}
          renderItem={({item}) => (
            <View style={styles.card}>
              {item.pointId % 2 ? (
                <Text style={styles.cardTitle}>Entrada</Text>
              ) : (
                <Text style={styles.cardTitleAlt}>Saida</Text>
              )}
              <Text style={styles.cardText}>Hora: {item.hour} </Text>

              <Text style={styles.cardText}>Data: {item.date} </Text>

            </View>
          )}
        />
      </View>
    </View>
  );
}
