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
import Addnewcard from "./src/Addnewcard";
import Myaddress from "./src/Myaddress";
import Changepass from "./src/Changepass";
import Addnewaddress from "./src/Addnewaddress";
import Myfavourite from "./src/Myfavourite";
import Orderhistory from "./src/Orderhistory";

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
