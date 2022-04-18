import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../context/authContext';

interface HeaderProps {
  returnButton: boolean;
}

export default function Header({returnButton}: HeaderProps) {
  
  // To-do: fazer retornar os dados corretamente.
  const {userData} = useContext(AuthContext);

  console.log(userData);
  // ------
  
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>{userData}</Text>
        {returnButton === true ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}>
              <Icon name="x" style={styles.icon} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
}
