import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    if (!email || !password) {
      alert('Preencha todos os campos.');
      return;
    }

    try {
      const res = await axios.post('http://192.168.0.134:5000/api/auth/login', {
        email,
        password,
      });
      alert('Login realizado com sucesso!');
      navigation.navigate('Mapa', { token: res.data.token });
    } catch (err) {
      alert('Erro no login. Verifique e-mail e senha.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons name="bike" size={48} color="#00796B" />
          <Text style={styles.title}>VaiDeBike Maringá</Text>
        </View>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          keyboardType="email-address"
        />
        <TextInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          mode="outlined"
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e0f2f1',
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796B',
    marginTop: 4,
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#00796B',
    borderRadius: 8,
    marginTop: 8,
  },
});
