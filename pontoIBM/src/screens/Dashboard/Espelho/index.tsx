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

  return (
    <View style={styles.container}>
      <Header title="Folha Espelho" returnButton={true} />

      <View style={styles.mainContent}>
        <FlatList
          data={userRegistry as any}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>
                  {item.referalMonth.toUpperCase()}
                </Text>
                {item.hoursExceeded > 0 ? (
                  <Text style={styles.cardAlert}>Horas excedidas</Text>
                ) : null}
              </View>
              <Text style={styles.cardText}>
                Registrado em: {item.registryReferalDate}
              </Text>

              <Text style={styles.cardText}>
                Horas estouradas: {item.hoursExceeded}
              </Text>

              <Text style={styles.cardText}>
                Horas a cumprir: {item.avaliableHours}
              </Text>
            </View>
          )}
          keyExtractor={item => item.registryId}
        />
      </View>
    </View>
  );
}

// {item.registry.registryId % 2 ? (
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
