import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const SignInScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  GoogleSignin.configure({
    webClientId:
      '1051552018503-20s3tfvol5qilh6t3td6ojnm939jsehb.apps.googleusercontent.com',
    offlineAccess: true,
    forceCodeForRefreshToken: true,
  });

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please in all fields');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Login Successful');
      navigation.navigate('Home' as never);
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        Alert.alert("Email and password don't match.");
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      } else {
        Alert.alert('Error', error.message);
      }
      console.error(error);
    }
  };

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      console.log(GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true}))
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log({googleCredential: googleCredential});
      await auth().signInWithCredential(googleCredential);
    } catch (e: any) {
      console.error('Google Sign-In Error: ', e.message);
      if (e.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('statusCodes.SIGN_IN_CANCELLED');
      } else if (e.code === statusCodes.IN_PROGRESS) {
        console.log('statusCodes.IN_PROGRESS');
      } else if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('statusCodes.IN_PROGRESS');
      }
    } 
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

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
        secureTextEntry
      />

      <Button title="Sign In" onPress={handleSignIn} />
      <TouchableOpacity onPress={() => onGoogleButtonPress()}>
        <Text>Continue with Google</Text>
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
    marginBottom: 20,
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

export default SignInScreen;
