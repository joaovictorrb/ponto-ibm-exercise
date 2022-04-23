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
              <Text style={styles.cardTitle}>{item.referalMonth.toUpperCase()}</Text>

              {/* Conditional dos titulos */}

              {/* {item.registryId % 2 ? (
                <Text style={styles.cardText}>Entrada</Text>
              ) : (
                <Text style={styles.cardText}>Saida</Text>
              )} */}

              {/* Conditional do overtime */}

              {item.hoursExceeded > 0 ? (
                <Text style={styles.cardText}>Horas excedidas</Text>
              ) : null}

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
