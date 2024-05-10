import React from "react";
import { Button, Text, View, Image } from "react-native";
import Login from "../Login";
import Signup from "../Signup";
import Forget from "../Forget";
import Changepass from "../Changepass";
import Passchanged from "../Passchanged";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const Home = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator initialRouteName="Home"
       drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <View>
            <Image
              style={{ width: 100, height: 100, marginTop: 50, marginLeft: "30%" }}
              resizeMode="contain"
              source={require('../image/facebook.png')}
            />
            <Text style={{ textAlign: "center", marginTop: 10, fontWeight: "bold", fontSize: 25, textDecorationLine: "underline" }}>
              Hello, Mr.Trushal
            </Text>
            <DrawerItem
              label="Login"
              onPress={() => props.navigation.navigate('Login')}
              style={{marginTop:20}}
            />
            <DrawerItem
              label="Signup"
              onPress={() => props.navigation.navigate('Signup')}
            />
          </View>
        </DrawerContentScrollView>
      )} >
        <Drawer.Screen name="Main" component={BottomTabNavigation} />
        <Drawer.Screen name="Login" component={Login} /> 
        <Drawer.Screen name="Signup" component={Signup} />
      </Drawer.Navigator>
    );
  };

  const BottomTabNavigation = () => {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen name="SignIn" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
      </Tab.Navigator>
    );
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="Changepass" component={Changepass} />
          <Stack.Screen name="Passchanged" component={Passchanged} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Home;
