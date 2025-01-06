import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/homescreen';
import RegisterScreen from './src/auth/register';
import SignInScreen from './src/auth/signin';
import { AuthProvider, useAuth } from './src/context/authProvider';
import FirebaseDataUpload from './src/screens/firebaseDataUpload';

const Stack = createStackNavigator();

const AuthenticatedStack: React.FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="FirebaseDataUpload" component={FirebaseDataUpload} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  </AuthProvider>
);

export default App;
