// app/_layout.tsx (or app/_layout.js)
import React from 'react';
import { Stack } from 'expo-router'; // Using the Stack navigator from expo-router

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Stack navigator is a common layout that provides a header and screen transitions
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff', // Example header background
        },
        headerTintColor: '#f4511e',      // Example header text color
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
      }}
    >
      {children}
    </Stack>
  );
};

export default RootLayout;