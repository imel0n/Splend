// app/_layout.tsx (or app/_layout.js)
import React from 'react';
import { Stack } from 'expo-router'; // Using the Stack navigator from expo-router

const RootLayout = () => {
  return (
    // Stack navigator is a common layout that provides a header and screen transitions
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e', // Example header background
        },
        headerTintColor: '#fff',      // Example header text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {}
    </Stack>
  );
};

export default RootLayout;
