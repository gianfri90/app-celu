// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import Home from './pages/Home';
import Login from './pages/login';
import Groups from './pages/Groups';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = ({ setIsAuthenticated }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home">
      {props => <Home {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Stack.Screen>
    <Stack.Screen name="Groups" component={Groups} />
  </Stack.Navigator>
);

const AuthStack = ({ setIsAuthenticated }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login">
      {props => <Login {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);
  

  if (isAuthenticated === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AuthenticatedStack setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <AuthStack setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});