import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import Home from "../screens/Home";
// import SecondScreen from "../screens/SecondScreen";
import loginView from "../screens/loginView";
import signUpView from "../screens/signUpView";
import homeView from '../screens/HomeView'

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="loginView" component={loginView} />
      <MainStack.Screen name="homeView" component={homeView} />
      <MainStack.Screen name="signUpView" component={signUpView} />
      

    </MainStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
