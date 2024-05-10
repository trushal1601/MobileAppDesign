import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import first from "../image/search.png";
import second from "../image/facebook.png";
import third from "../image/twitter.png";
import FloatingTextInput from "../components/TextInput";

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.loginText}>Sign Up</Text>
      <FloatingTextInput label={"Name"} placeholder={"Enter A Name"} secureTextEntry={false}/>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter An Email here"
        style={styles.input}
        accessible={true}
        accessibilityLabel="Email Input"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter A Password here"
        style={styles.input}
        secureTextEntry={true}
        accessible={true}
        accessibilityLabel="Password Input"
      />
      <FloatingTextInput label={"Confirm Password"} placeholder={"Enter A Password Second Time"} secureTextEntry={true}/>

      {/* <Pressable  onPress={() =>
        navigation.navigate('Forget')
      }>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </Pressable> */}

      <Pressable style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{}}>Already have an account? </Text>
        <Pressable onPress={() =>
        navigation.navigate('Login')
      }>
          <Text style={styles.signUpLink}>
            <Text>Sign In</Text>
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 20,
  },
  loginText: {
    marginTop: 1,
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
    // marginTop: 1,
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 15,
    padding: 7,
  },
  signUpButton: {
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

export default Signup;
