import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  Button
} from "react-native";
import first from "../image/search.png";
import second from "../image/facebook.png";
import third from "../image/instagram.png";
import FloatingTextInput from "../components/TextInput";
import { Formik, } from 'formik';
import * as yup from 'yup';
// import { NavigationContainer } from "@react-navigation/native";

const loginValidationSchema = yup.object().shape({
 
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
  .string()
  .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
  .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
  .matches(/\d/, "Password must have a number")
  .min(8, ({ min }) => `Password must be at least ${min} characters`)
  .required('Password is required'),
})
const Login = ({ navigation }) => {
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
          <Pressable>
            <Text style={{ color: "white" }}>Sign In</Text>
          </Pressable>
          <Text style={{ color: "white", marginLeft: 15 }}>|</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "white", marginLeft: 15 }}>Sign Up</Text>
          </Pressable>
        </View>
        <Text style={styles.loginText}>Sign In</Text>
        {/* <View>
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
        /> */}
        {/* <Pressable onPress={() => navigation.navigate("Forget")}>
          <Text style={styles.forgotPassword}>Forget Password?</Text>
        </Pressable> */}
         <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: '',  }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values,errors,isValid,touched }) => (
              <>
               <View style={{}}>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email &&
         <Text style={{ fontSize: 10, color: 'red',marginLeft:14,}}>{errors.email}</Text>
       }
       </View>
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={{height: 40,
                    width: '95%',
                    margin: 10,
                    backgroundColor: 'white',
                    borderColor: 'gray',
                    borderWidth:1,
                    borderRadius: 10,
                    padding:10,
                    
                  }}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                 {errors.password  &&
         <Text style={{ fontSize: 10, color: 'red' ,marginLeft:14,}}>{errors.password}</Text>
       }
               
                <View style={{marginTop:13 , paddingLeft:10,paddingRight:9}}>
                <Button onPress={handleSubmit} title="Submit"  />
                </View>
              </>
            )}
          </Formik>

        {/* <Pressable style={styles.signInButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable> */}

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
    backgroundColor: "rgba(33,150,243,255)",
  },
  textInput:{
    height: 40,
    width: '95%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth:1,
    borderRadius: 10,
    padding:10,
  
  },
  buttonText: {
    color: "white",
  },
  forgotPassword: {
    color: "red",
    textAlign: "right",
    marginRight: 10,
    marginBottom:50
   
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
