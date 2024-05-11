import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Home from "./src/Home";
import Login from "./src/Login";
import Signup from "./src/Signup";
import Editprofile from "./src/Editprofile";
import Paymentmethod from "./src/Paymentmethod";

export default function App() {
  return <Paymentmethod />;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
