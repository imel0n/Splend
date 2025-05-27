// index.tsx (or index.js if you're not using TypeScript)
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

const App = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>

      <Button
        title = "Go to Home Screen"
        onPress = {() => router.push('/(tabs)')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,             // Makes the container take up the full screen height
    backgroundColor: '#fff', // Sets the background color to white
    alignItems: 'center',   // Centers children horizontally in a flex container
    justifyContent: 'center', // Centers children vertically in a flex container
  },
  text: {
    fontSize: 24,        // Sets the font size
    marginBottom: 20,
  },
});

export default App;
