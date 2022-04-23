import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from './styles';
import Header from '../../../components/Header';
import DataContext from '../../../context/dataContext';

export default function Espelho() {
  const {getUserRegistry, userRegistry} = useContext(DataContext);

  useEffect(() => {
    getUserRegistry();
  }, []);

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
          data={userRegistry as any}
          renderItem={({item}) => (
            <View style={styles.card}>
              {item.registryId % 2 ? (
                <Text style={styles.cardTitle}>Entrada</Text>
              ) : (
                <Text style={styles.cardTitle}>Saida</Text>
              )}

              <Text style={styles.cardTitle}>{item.referalMonth}</Text>

              <Text style={styles.cardText}>{item.created_at}</Text>
              <Text style={styles.cardText}>{item.updated_at}</Text>
            </View>
          )}
          keyExtractor={item => item.registryId}
        />
      </View>
    </View>
  );
}

// To-do:
// - Um layout legal dos cartoes
// Um seletor que é um filtrozinho que pega especificamente de cada mes escolhido.

//             {item.registry.registryId % 2 ? (
//   <Text style={styles.cardTitle}>Entrada</Text>
// ) : (
//   <Text style={styles.cardTitleAlt}>Saida</Text>
// )}
//     </View>
//   );
// }

// {item.registry.registryId % 2 ? (
//   <Text style={styles.cardTitle}>Entrada</Text>
// ) : (
//   <Text style={styles.cardTitleAlt}>Saida</Text>
// )}
// <Text style={styles.cardText}>Hora: {item.hour} </Text>

// <Text style={styles.cardText}>Data: {item.date} </Text>
