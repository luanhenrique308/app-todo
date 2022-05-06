import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native'
import { Container } from 'views/home/style';
import Home from 'views/home';



const App: () => Node = () => {

  return (
    <Home />
    // <NavigationContainer>
    //     <MainStack.Screen name='Home' component={Home} />
    // </NavigationContainer>
  );
};



export default App;
