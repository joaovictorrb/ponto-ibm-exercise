import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import AuthContext from '../../../context/authContext';

import {styles} from './styles';

export default function SignUp() {
  const {SignUp} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function HandleSignUp() {
    SignUp(email, username, password);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={username => setUsername(username)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={HandleSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
