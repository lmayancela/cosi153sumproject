import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Splash } from './app/screens';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // TODO will be used for auth purposes...maybe not?

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a profile loading action by waiting a second
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  // Add theme prop to NavigationContainer later
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
