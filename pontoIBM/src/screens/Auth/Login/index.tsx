import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {signIn} from '../../../mockup/login';
import {styles} from './styles';
import AuthContext from '../../../context/authContext';

export default function Login() {
  // Aqui estamos puxando a funçao signIn do provider
  const {userLogin} = useContext(AuthContext);

  // Estado dos inputs
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // Pega o mockup e retorna de maneira assincrona no apertar do botao de Login
  async function HandleLogin() {
    console.log(userLogin);
    userLogin(login, password);
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => {
              setLogin(text);
            }}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.forgotButton}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.forgotButtonText}>
            Nao tem uma conta? Clique aqui.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={HandleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
