import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  navigate,
} from "react-native";
import first from "../image/search.png";
import second from "../image/facebook.png";
import third from "../image/twitter.png";
import FloatingTextInput from "../components/TextInput";

const Signup = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const saveData = () => {
      if(!name){
        setNameError(true)
      }else{
        setNameError(false)
      }
      if(!email){
        setEmailError(true)
      }else{
        setEmailError(false)
      }
      if(!password){
        setPasswordError(true)

      }else{
        setPasswordError(false)
      }
      if(!confirmPassword){
        setConfirmPasswordError(true)
      }else{
        setConfirmPasswordError(false)
      }
      if (password !== confirmPassword) {
        setPasswordMatchError(true);
        valid = false;
      } else {
        setPasswordMatchError(false);
      }

      if(!name || !email || !password || !confirmPassword || password !== confirmPassword){
        return false
      }

    navigation.navigate('Login');
      };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "red",
            borderRadius: 10,
            marginLeft: 25,
            marginRight: 25,
            padding: 6,
          }}
        >
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "white" }}>Sign In</Text>
          </Pressable>
          <Text style={{ color: "white", marginLeft: 15 }}>|</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "white", marginLeft: 15 }}>Sign Up</Text>
          </Pressable>
        </View>
        <Text style={styles.loginText}>Sign Up</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Enter A Name here"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {nameError ? (
          <Text style={{ color: "red", marginLeft: 12, marginTop: 10 }}>
            Please Enter A Name
          </Text>
        ) : null}
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter An Email here"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {emailError ? (
          <Text style={{ color: "red", marginLeft: 12, marginTop: 10 }}>
            Please Enter An Email
          </Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter A Password here"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {passwordError ? (
          <Text style={{ color: "red", marginLeft: 12, marginTop: 10 }}>
            Please Enter A Password
          </Text>
        ) : null}
        <Text style={styles.label}>Confirm Password</Text>

        <TextInput
          placeholder="Enter A Password here"
          style={styles.input}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {confirmPasswordError ? (
          <Text style={{ color: "red", marginLeft: 12, marginTop: 10 }}>
            Please Enter A Password
          </Text>
        ) : null}
        {passwordMatchError ? (
          <Text style={{ color: "red", marginLeft: 12, marginTop: 10 }}>
            Password Does Not Matched
          </Text>
        ) : null}

        {/* <Pressable  onPress={() =>
        navigation.navigate('Forget')
      }>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </Pressable> */}

        <Pressable style={styles.signUpButton} onPress={saveData}>
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
          <Pressable onPress={() => navigation.navigate("Login")}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 20,
  },
  loginText: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "4%",
    marginTop: 20,
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
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
  },
  forgotPassword: {
    color: "red",
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
