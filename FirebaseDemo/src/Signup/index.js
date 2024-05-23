import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Alert,
  Linking,
  ActivityIndicator
} from "react-native";
import axios from 'axios';
import first from "../image/search.png";
import second from "../image/facebook.png";
import third from "../image/instagram.png";
import { Formik } from 'formik';
import * as yup from 'yup';

const handlePress1 = () => {
  Linking.openURL('https://www.facebook.com/people/InfoLanze-Tech/61555278311151/');
};

const handlePress2 = () => {
  Linking.openURL('https://www.infolanze.tech/');
};

const handlePress = () => {
  Linking.openURL('https://www.instagram.com/infolanze/?igsh=OXR2d2I4Mm1mMDZt');
};

const Signup = ({ navigation }) => {
  const[showLoader,setShowLoader]=useState(false);

  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Name is Required')
      .matches(/^[A-Za-z\s]+$/, 'Name cannot contain numbers'),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    phonenumber: yup
      .string()
      .required('Phone Number is required')
      .matches(/^[6-9]\d{9}$/, 'Phone number must start with a digit between 6 and 9 and be exactly 10 digits'),
  });

  const handleSubmit = async (values,{resetForm}) => {
    setShowLoader(true);
    
      const response = await axios.post('https://backend-livid-chi-10.vercel.app/api/auth/register', {
        username: values.username,
        email: values.email,
        password: values.password,
        phonenumber: values.phonenumber,
      });
      resetForm();
        navigation.navigate('Login');
      
        setTimeout(() => {
          setShowLoader(false);
        }, 3000);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "rgba(33,150,243,255)",
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
        
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ username: '', email: '', password: '', phonenumber: '' }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
            <>
              <TextInput
                name="username"
                placeholder="Enter Username"
                style={styles.textInput}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                keyboardType="default"
              />
              {errors.username && <Text style={{ fontSize: 10, color: 'red', marginLeft: 14, marginTop: -20 }}>{errors.username}</Text>}

              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && <Text style={{ fontSize: 10, color: 'red', marginLeft: 14, marginTop: -18 }}>{errors.email}</Text>}

              <TextInput
                name="phonenumber"
                placeholder="Enter Phonenumber"
                style={styles.textInput}
                onChangeText={handleChange('phonenumber')}
                onBlur={handleBlur('phonenumber')}
                value={values.phonenumber}
                keyboardType="numeric"
              />
              {errors.phonenumber && <Text style={{ fontSize: 10, color: 'red', marginLeft: 10, marginTop: -18 }}>{errors.phonenumber}</Text>}

              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && <Text style={{ fontSize: 10, color: 'red', marginLeft: 10, marginTop: -18 }}>{errors.password}</Text>}

              <Pressable onPress={() => navigation.navigate('Forget')}>
                <Text style={styles.forgotPassword}>Forget Password?</Text>
              </Pressable>

      

              
              <View style={{ paddingLeft: 10, paddingRight: 9 }}>
               {showLoader ?  <ActivityIndicator size={30} color="blue" animating={showLoader}/> :<Button onPress={handleSubmit} title="Submit" />}
              </View>
            </>
          )}
        </Formik>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
          <Text>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signUpLink}>Sign In</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
          <Pressable style={{ marginRight: 10 }} onPress={handlePress1}>
            <Image source={second} style={styles.image} />
          </Pressable>
          <Pressable style={{ marginRight: 10 }} onPress={handlePress2}>
            <Image source={first} style={styles.image} />
          </Pressable>
          <Pressable onPress={handlePress}>
            <Image source={third} style={styles.image} />
          </Pressable>
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
  textInput: {
    height: 40,
    width: '95%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  input: {
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
    marginTop: -15,
    marginBottom: 40,
  },
  signUpLink: {
    color: "red",
  },
  image: {
    alignSelf: "center",
    marginTop: 20,
    height: 30,
    width: 30,
    borderWidth: 4,
    borderRadius: 3,
  },
});

export default Signup;
