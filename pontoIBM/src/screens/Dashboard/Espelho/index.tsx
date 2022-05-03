import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../../components/Header';
import DataContext from '../../../context/dataContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import CollapsibleList from 'react-native-collapsible-list';

export default function Espelho() {
  const {getUserRegistry, userRegistry} =
    useContext(DataContext);

  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    getUserRegistry(selectedMonth);
  }, [selectedMonth]);

  return (
    <View style={styles.container}>
      <Header title="Folha Espelho" returnButton={true} />

      <View style={styles.mainContent}>
        <View style={styles.card}>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={itemValue => setSelectedMonth(itemValue)}>
            <Picker.Item label="Selecione um mês" value="" />
            <Picker.Item label="Janeiro" value="JANEIRO" />
            <Picker.Item label="Fevereiro" value="FEVEREIRO" />
            <Picker.Item label="Março" value="MARÇO" />
            <Picker.Item label="Abril" value="ABRIL" />
            <Picker.Item label="Maio" value="MAIO" />
            <Picker.Item label="Junho" value="JUNHO" />
            <Picker.Item label="Julho" value="JULHO" />
            <Picker.Item label="Agosto" value="AGOSTO" />
            <Picker.Item label="Setembro" value="SETEMBRO" />
            <Picker.Item label="Outubro" value="OUTUBRO" />
            <Picker.Item label="Novembro" value="NOVEMBRO" />
            <Picker.Item label="Dezembro" value="DEZEMBRO" />
          </Picker>
        </View>

        <View style={styles.cardHeader}>
          <FlatList
            data={userRegistry as any}
            keyExtractor={item => item.registryReferalData}
            renderItem={({item}) => (
              <CollapsibleList
              buttonPosition='top'  
              numberOfVisibleItems={0}
                wrapperStyle={styles.cardList}
                buttonContent={
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>
                      {item.referalMonth}
                    </Text>

                    <Text style={styles.cardText}>
                      Data: {item.registryReferalDate}
                    </Text>

                    <Text style={styles.cardText}>
                      Horas de trabalho restantes: {item.avaliableHours * -1}
                    </Text>

                    {item.hoursExceeded > 0 ? (
                      <Text style={styles.cardAlert}>Horas excedidas</Text>
                    ) : null}

                  </View>
                }>

                {item.points.map((point: any) => (
                  <View style={styles.cardItemList}>
                    {point.isEntry === false ? (
                      <Text style={styles.cardTitleAlt}>Saida</Text>
                    ) : (
                      <Text style={styles.cardTitle}>Entrada</Text>
                    )}
                    <Text style={styles.cardText}>{point.hour}</Text>
                  </View>
                ))}

              </CollapsibleList>
            )}
          />
        </View>
      </View>
    </View>
  );
}