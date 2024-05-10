import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import first from "../image/search.png";
import second from "../image/facebook.png";
import third from "../image/twitter.png";
import FloatingTextInput from "../components/TextInput";
// import { NavigationContainer } from "@react-navigation/native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "orange",
            borderRadius: 10,
            marginLeft: 25,
            marginRight: 25,
            padding: 6,
          }}
        >
          <Pressable>
            <Text style={{ color: "white" }}>Sign In</Text>
          </Pressable>
          <Text style={{ color: "white", marginLeft: 15 }}>|</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "white", marginLeft: 15 }}>Sign Up</Text>
          </Pressable>
        </View>
        <Text style={styles.loginText}>Sign In</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter An Email here"
            style={styles.input}
            accessible={true}
            accessibilityLabel="Email Input"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter A Password here"
          style={styles.input}
          secureTextEntry={true}
          accessible={true}
          accessibilityLabel="Password Input"
        />
        <Pressable onPress={() => navigation.navigate("Forget")}>
          <Text style={styles.forgotPassword}>Forget Password?</Text>
        </Pressable>

        <Pressable style={styles.signInButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{}}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signUpLink}>
              <Text>Sign Up</Text>
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Image source={second} style={styles.image} />
          </View>
          <View style={{ marginRight: 10 }}>
            <Image source={first} style={styles.image} />
          </View>
          <View>
            <Image source={third} style={styles.image} />
          </View>
        </View>
      </ScrollView>
      {/* <FloatingTextInput label={"aaaaa"} placeholder={"paswo"} secureTextEntry={true}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: "100%",
    padding: 20,
  },
  loginText: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "4%",
    marginTop: 40,
  },
  input: {
    // textAlign: "center",
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 15,
    padding: 7,
  },
  signInButton: {
    marginTop: 50,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "orange",
  },
  buttonText: {
    color: "white",
  },
  forgotPassword: {
    color: "orange",
    textAlign: "right",
    marginRight: 10,
    marginTop: 10,
  },
  signUpLink: {
    color: "red",
    // marginTop: 10,
  },
  image: {
    alignSelf: "center",
    marginTop: 20,
    height: 30,
    width: 30,
    borderWidth: 4,
    // borderColor:"white",
    borderRadius: 3,
  },
});

export default Login;
