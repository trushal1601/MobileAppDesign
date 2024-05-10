import { Text, View } from "react-native";
import Login from "../Login";
import Signup from "../Signup";
import Forget from "../Forget";
import Changepass from "../Changepass";
import Passchanged from "../Passchanged";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Home = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="Changepass" component={Changepass} />
          <Stack.Screen name="Passchanged" component={Passchanged} />
        </Stack.Navigator>
        {/* <Tab.Navigator>
          <Tab.Screen name="SignIn" component={Login} />
          <Tab.Screen name="Signup" component={Signup} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </>
  );
};

export default Home;
