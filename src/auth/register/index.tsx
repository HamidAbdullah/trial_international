import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created & signed in!');
        navigation.navigate('Home' as never);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        console.error(error);
      });
    console.log('Email:', email);
    console.log('Password:', password);
    Alert.alert('Success', 'Registration completed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Register" onPress={handleRegister} />
      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          height: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 30,
          borderRadius: 20
        }}
        onPress={() => navigation.navigate('SignInScreen' as never)}>
        <Text style={[styles.title, {color: '#fff'}]}>Already Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default RegisterScreen;
