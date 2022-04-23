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
          data={userRegistry}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.referalMonth}</Text>

              {item.registryId % 2 ? (
                <Text style={styles.cardText}>Entrada</Text>
              ) : (
                <Text style={styles.cardText}>Saida</Text>
              )}

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
